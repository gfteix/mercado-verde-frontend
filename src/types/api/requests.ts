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

export interface CreateOrderPayload {
  items: {
    productId: string;
    quantity: number;
  }[]
}
