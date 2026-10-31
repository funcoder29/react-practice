import { useLocation, useParams } from "react-router";
import type { Recipe } from "../types/RecipeResponse";

export const RecipeDetailPage = () => {
  const location = useLocation();
  const { id } = useParams();

  const recipe = (location.state as { recipe?: Recipe } | null)?.recipe;

  if (!recipe) {
    return <p>Recipe data not available.</p>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.instructions}</p>
      <p>Recipe ID: {id}</p>
    </div>
  );
};
