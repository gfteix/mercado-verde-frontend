import React from "react";
import "./CartItem.css";
import { VscAdd, VscRemove } from "react-icons/vsc";
import { type CartItem, type Product } from "../../types";
import { formatProductPrice } from "../../utils/price-formatter";
interface CartItemProps {
  cartItem: CartItem;
  addToCart(product: Product): void;
  removeFromCart(product: Product): void;
}

const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  addToCart,
  removeFromCart,
}) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-card">
        <div className="cart-item-image">
          <img src={`data:image/jpeg;base64,${cartItem.product.image}`}></img>
        </div>
        <div className="cart-item-name-container">
          <p className="cart-item-name">{cartItem.product.name}</p>
        </div>
        <div className="cart-item-price-container">
          <p className="cart-item-price">
            {formatProductPrice(cartItem.product.price)}
          </p>
        </div>
      </div>
      <div className="change-quantity-container">
        <button onClick={() => removeFromCart(cartItem.product)}>
          <VscRemove />
        </button>
        <p className="cart-item-quantity">{cartItem.quantity}</p>
        <button onClick={() => addToCart(cartItem.product)}>
          <VscAdd />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
