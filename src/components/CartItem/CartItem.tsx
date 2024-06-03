import React from "react";
import "./CartItem.css";
import { VscAdd, VscRemove } from "react-icons/vsc";
interface CartItemProps {
  cartItem: {
    name: string;
    image: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-card">
        <div className="cart-item-image">
          <img src={cartItem.image}></img>
        </div>
        <div className="cart-item-name-container">
          <p className="cart-item-name">{cartItem.name}</p>
        </div>
        <div className="cart-item-price-container">
          <p className="cart-item-price">
            R$ {cartItem.price.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="change-quantity-container">
        <button>
          <VscRemove />
        </button>
        <p className="cart-item-quantity">{cartItem.quantity}</p>
        <button>
          <VscAdd />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
