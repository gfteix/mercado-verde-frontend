import React from "react";
import { Order } from "../../types";
import "./OrderCard.css";
import { formatProductPrice } from "../../utils/price-formatter";

interface OrderCardProps {
  order: Order;
  index: number;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, index }) => {
  return (
    <div className="order-card">
      <div className="order-index">
        <p>Número do Pedido</p>
        <p># 00{index + 1}</p>
      </div>
      <div className="order-total">
        <p>Total</p>
        <h3>{formatProductPrice(order.totalPrice)}</h3>
      </div>
      <div className="order-date">
        <p>Data</p>
        <h3>{new Date(order.createdAt).toLocaleDateString("pt-BR")}</h3>
      </div>
    </div>
  );
};

export default OrderCard;
