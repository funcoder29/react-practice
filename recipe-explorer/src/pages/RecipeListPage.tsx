import { useState } from "react";
import { useRecipes } from "../hooks/useRecipes";
import "./RecipeListPage.css";
export const RecipeListPage = () => {
  const [searchText, setSearchText] = useState("");
  const { recipes, loading, error } = useRecipes(searchText);
  const searchRecipe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="root">
      <h3>RecipeListPage</h3>

      <label>
        Search any recipe
        <input type="text" onChange={searchRecipe} />
      </label>
      {loading && <h4>Loading...</h4>}
      {error != null && error.length > 0 && <h4>Something went wrong!!</h4>}
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <p>{recipe.name}</p>
            <img src={recipe.image} alt={recipe.name} className="recipe-card" />
          </div>
        ))}
      </div>
    </div>
  );
};
