import { Product } from "./api";

export interface CartItem {
    quantity: number;
    product: Product;
}
