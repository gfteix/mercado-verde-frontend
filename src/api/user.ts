import { LoginPayload, LoginResponse, RegisterPayload, User } from "../types";
import { API_URL } from "./config";

export const register = async (data: RegisterPayload) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to register");
  }

  return response.json();
};

export const login = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return (await response.json()) as LoginResponse;
};

export const getUser = async (token: string) => {
  console.log(token);

  const response = await fetch(`${API_URL}/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get user data");
  }

  return (await response.json()) as { user: User };
};
