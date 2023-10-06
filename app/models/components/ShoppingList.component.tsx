import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

interface Props {}

const ShoppingList: React.FC<Props> = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  const handleSelect = (recipe: Recipe) => {
    if (!selectedRecipes.includes(recipe)) {
      setSelectedRecipes([...selectedRecipes, recipe]);
    } else {
      setSelectedRecipes(selectedRecipes.filter(r => r !== recipe));
    }
  };

  const handleRemove = (recipe: Recipe) => {
    setSelectedRecipes(selectedRecipes.filter(r => r !== recipe));
  };

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            selected={selectedRecipes.includes(recipe)}
            onSelect={() => handleSelect(recipe)}
            onRemove={() => handleRemove(recipe)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
