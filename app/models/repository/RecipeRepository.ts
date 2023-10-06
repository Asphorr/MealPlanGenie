import { Recipe } from './recipe.entity';
import { EntityRepository, FindOneOptions, QueryBuilder, Where } from 'typeorm';

@EntityRepository(Recipe)
export class RecipeRepository {
  private readonly queryBuilder: QueryBuilder<Recipe>;

  constructor(private readonly entityManager: EntityManager) {}

  async findAll(): Promise<Recipe[]> {
    return await this.queryBuilder.getMany();
  }

  async findOne(id: number): Promise<Recipe | undefined> {
    return await this.queryBuilder.findOne({ where: { id } });
  }

  async create(recipe: Omit<Recipe, 'id'>): Promise<Recipe> {
    const newRecipe = new Recipe();
    Object.assign(newRecipe, recipe);
    await this.entityManager.save(newRecipe);
    return newRecipe;
  }

  async update(recipe: Recipe): Promise<Recipe> {
    const updatedRecipe = await this.findOne(recipe.id);
    if (!updatedRecipe) {
      throw new Error(`Recipe not found`);
    }
    Object.assign(updatedRecipe, recipe);
    await this.entityManager.save(updatedRecipe);
    return updatedRecipe;
  }

  async delete(id: number): Promise<void> {
    await this.entityManager.remove(await this.findOne(id));
  }

  async search(query: string, limit?: number, offset?: number): Promise<Recipe[]> {
    const qb = this.queryBuilder.where('title LIKE :query', { query: `%${query}%` });
    if (limit) {
      qb.limit(limit);
    }
    if (offset) {
      qb.offset(offset);
    }
    return await qb.getMany();
  }
}
