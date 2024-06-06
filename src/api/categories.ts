import { Category } from "../types";
import { API_URL } from "./config";

export async function getCategories(
  accessToken: string
): Promise<{ categories: Category[] }> {
  const response = await fetch(`${API_URL}/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get categories");
  }

  return response.json() as Promise<{ categories: Category[] }>;
}
