import axios from "axios";
import type { RecipeResponse } from "../types/RecipeResponse";

export const fetchRecipes = async (
  searchString: string | null = null,
): Promise<RecipeResponse> => {
  if (searchString) {
    const response = await axios.get<RecipeResponse>(
      `https://dummyjson.com/recipes/search?q=${searchString}`,
    );
    return response.data;
  } else {
    const response = await axios.get<RecipeResponse>(
      `https://dummyjson.com/recipes/`,
    );
    return response.data;
  }
};
