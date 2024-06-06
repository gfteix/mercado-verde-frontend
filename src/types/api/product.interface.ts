import { Category } from ".";

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
  rating?: number;
  image: string;
}
