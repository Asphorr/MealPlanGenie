import { Injectable } from '@angular/core';
import { Recipe } from './recipe.entity';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceInterface {

  constructor() { }

  getRecipes(): Promise<Recipe[]> {
    return Promise.resolve([]);
  }

  getRecipeById(id: number): Promise<Recipe> {
    return Promise.resolve(null);
  }

  createRecipe(recipe: Recipe): Promise<Recipe> {
    return Promise.resolve(recipe);
  }

  updateRecipe(recipe: Recipe): Promise<Recipe> {
    return Promise.resolve(recipe);
  }

  deleteRecipe(id: number): Promise<void> {
    return Promise.resolve();
  }
}
