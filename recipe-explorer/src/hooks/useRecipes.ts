import { useState, useEffect } from "react";
import type { Recipe } from "../types/RecipeResponse.ts";
import { fetchRecipes } from "../services/recipeService.ts";

export const useRecipes = (searchText: string | null = null) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const response = await fetchRecipes(searchText);
        setRecipes(response.recipes);
      } catch (err) {
        setError("Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };
    loadRecipe();
  }, [searchText]);

  return { recipes, loading, error };
};
