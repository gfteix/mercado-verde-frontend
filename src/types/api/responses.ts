import { User } from "./user.interface";

export interface RegisterResponse {
  user: User;
  accessToken: string;
}

export interface LoginResponse {
  accessToken: string;
}
