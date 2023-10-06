import React from 'react';
import { Recipe } from './Recipe';

interface Props {
  recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.imageUrl} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={() => handleClick(recipe)}>View Recipe</button>
    </div>
  );
};

const handleClick = (recipe: Recipe) => {
  // Implement logic to handle click event
  console.log('Recipe clicked:', recipe);
};

export default RecipeCard;
