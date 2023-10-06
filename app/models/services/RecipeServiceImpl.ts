import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeRepository } from './recipe.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceImpl implements RecipeService {

  private recipesUrl = 'api/recipes';

  constructor(private repository: RecipeRepository) { }

  getRecipes(): Observable<Recipe[]> {
    return this.repository.getAll(this.recipesUrl);
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.repository.getOne(this.recipesUrl + '/' + id);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.repository.post(this.recipesUrl, recipe);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.repository.put(this.recipesUrl + '/' + recipe.id, recipe);
  }

  deleteRecipe(id: number): Observable<void> {
    return this.repository.delete(this.recipesUrl + '/' + id);
  }

  searchRecipes(query: string): Observable<Recipe[]> {
    const url = `${this.recipesUrl}/search?q=${encodeURIComponent(query)}`;
    return this.repository.getAll(url);
  }

  getRecipeCategories(): Observable<string[]> {
    const url = `${this.recipesUrl}/categories`;
    return this.repository.getAll(url);
  }

  getRecipeTags(): Observable<string[]> {
    const url = `${this.recipesUrl}/tags`;
    return this.repository.getAll(url);
  }
}
