/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, createContext, useContext, useState } from "react";
import { Product, CartItem } from "../types";

interface CartContextData {
  cartItems: CartItem[];
  total: number;
  itemsQuantity: number;
  addToCart(product: Product): void;
  removeFromCart(product: Product): void;
  clearCart(): void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );

    if (isItemInCart) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.product.id === product.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }

        return cartItem;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  }

  function removeFromCart(product: Product): void {
    const itemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );

    if (!itemInCart) {
      return;
    }

    if (itemInCart.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.product.id !== product.id)
      );
    } else {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.product.id === product.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }

        return cartItem;
      });

      setCartItems(updatedItems);
    }
  }

  function clearCart(): void {
    setCartItems([]);
  }

  function getItemsQuantity() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  function getCartTotal() {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        itemsQuantity: getItemsQuantity(),
        total: getCartTotal(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within an AuthProvider.");
  }

  return context;
}

export { CartProvider, useCart };
