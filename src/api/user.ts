import { API_URL } from "./config";

export interface RegisterPayload {
    email: string;
    password: string;
    name: string;
    street: string;
    houseNumber: string;
    neighborhood: string;
    stateCode: string;
    city: string;
    country: string;
    zipCode: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export const register = async (data: RegisterPayload) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to register');
  }

  return response.json();
};

export const login = async (data: LoginPayload) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  return await response.json();
};
