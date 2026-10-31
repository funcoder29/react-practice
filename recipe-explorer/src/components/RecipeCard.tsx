import { ViewTransition } from "react";
import { type Recipe } from "../types/RecipeResponse.ts";
import { Link, useLocation } from "react-router";
export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const location = useLocation();
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      state={{ recipe: recipe, backgroundLocation: location }}
      className="recipe-card"
    >
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.name}</p>
    </Link>
  );
};
