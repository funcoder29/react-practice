import { useState } from "react";
import { useRecipes } from "../hooks/useRecipes";
import { RecipeCard } from "../components/RecipeCard.tsx";
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
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};
