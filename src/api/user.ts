import { API_URL } from "./config";

export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
  street: string;
  houseNumber: string;
  neighborhood: string;
  state: string;
  city: string;
  country: string;
  zipCode: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  street: string;
  houseNumber: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterResponse {
  user: User;
  accessToken: string;
}

export interface LoginResponse {
  accessToken: string;
}

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
