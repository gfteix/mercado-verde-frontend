/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, createContext, useContext, useState } from "react";
import { LoginPayload, RegisterPayload, User, getUser, login, register } from "../api/user";

interface AuthContextData {
  signed: boolean;
  user: User | null;
  accessToken: string | null;
  signIn(data: LoginPayload): Promise<void>;
  signUp(data: RegisterPayload): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  async function signIn(data: LoginPayload): Promise<void> {
    const response = await login(data)
    setAccessToken(response.accessToken);
    const { user } = await getUser(response.accessToken ?? '')
    setUser(user)
  }

  async function signUp(data: RegisterPayload): Promise<void> {
    const response = await register(data)
    setUser(response.user);
    setAccessToken(response.accessToken);
  }

  function signOut() {
    setUser(null);
    setAccessToken(null);
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(true), user, signIn, signUp, accessToken, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider.');
    }
  
    return context;
  }
  
export { AuthProvider, useAuth };