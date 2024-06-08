import { CreateOrderPayload, Order } from "../types";
import { API_URL } from "./config";

export async function createOrder(
  accessToken: string,
  payload: CreateOrderPayload
): Promise<{ order: Order }> {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  return response.json() as Promise<{ order: Order }>;
}

export async function getOrders(
  accessToken: string
): Promise<{ orders: Order[] }> {
  const response = await fetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get orders");
  }

  return response.json() as Promise<{ orders: Order[] }>;
}

export async function getOrder(
  accessToken: string,
  orderId: string
): Promise<{ order: Order }> {
  const response = await fetch(`${API_URL}/orders/${orderId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get order with id " + orderId);
  }

  return response.json() as Promise<{ order: Order }>;
}
