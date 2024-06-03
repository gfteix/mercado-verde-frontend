import { Product } from "../types/api/product.interface";
import { API_URL } from "./config";

export async function getProducts(accessToken: string): Promise<{products: Product[]}> {
  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get products");
  }

  return response.json() as Promise<{products: Product[]}>;
}
