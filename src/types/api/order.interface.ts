import { Product, User } from ".";

export interface OrderItem {
    id: string;
    productId: string;
    product: Product;
    quantity: number;
    orderId: string;
    order: Order;
    createdAt: Date;
}

export interface Order {
    id: string;
    totalPrice: number;
    status: string;
    userId: string;
    user: User;
    orderItems: OrderItem[];
    createdAt: string;
    updatedAt: string;
}