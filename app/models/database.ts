import { createConnection } from 'typeorm';
import { Recipe } from './recipe.entity';
import { RecipeRepository } from './recipe.repository';

const dbUrl = 'localhost:5432';
const dbName = 'my_cookbook';
const username = 'myuser';
const password = 'mypassword';

const connection = createConnection({
  type: 'postgres',
  url: `${dbUrl}/${dbName}`,
  username,
  password,
});

connection.entity('recipe', Recipe);

export const recipeRepo = new RecipeRepository(connection);

connection.sync();
