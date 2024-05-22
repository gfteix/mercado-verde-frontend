import { Category } from "./category.interface";

export interface Product {
    id: string;
    name: string;
    categoryId: string;
    price: number;
    imageUrl: string;
    category: Category
}