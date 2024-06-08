import { useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import { Order } from "../../types";
import { getOrders } from "../../api/order";
import { useAuth } from "../../contexts/auth";
import "./OrdersPage.css";

const OrdersPage = () => {
  const { accessToken } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function buildOrders() {
      const response = await getOrders(accessToken as string);
      setOrders(response.orders);
    }

    buildOrders();
  }, [accessToken]);

  return (
    <main className="orders-page-container">
      <div className="title-container">
        <h2>Pedidos</h2>
      </div>
      <div className="content-container">
        <div className="orders-container">
          {orders.map((order, index) => (
            <OrderCard index={index} key={order.id} order={order} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default OrdersPage;
