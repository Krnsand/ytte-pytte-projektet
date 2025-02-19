// src/api/cocktailApi.ts
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const fetchDrinksByIngredient = async (ingredient: string) => {
  const response = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.drinks || [];
};

export const fetchDrinkDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.drinks?.[0] || null;
};
