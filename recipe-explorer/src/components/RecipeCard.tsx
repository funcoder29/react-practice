import { type Recipe } from "../types/RecipeResponse.ts";
import { Link } from "react-router";
export const RecipeCard = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <Link
          to={`/recipes/${recipe.id}`}
          viewTransition
          className="recipe-card"
        >
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-card" />
            <p>{recipe.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
