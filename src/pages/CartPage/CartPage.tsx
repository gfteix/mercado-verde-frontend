import CartItem from "../../components/CartItem/CartItem";
import "./CartPage.css";
import { useCart } from "../../contexts/cart";
import { formatProductPrice } from "../../utils/price-formatter";
import { createOrder } from "../../api/order";
import { useAuth } from "../../contexts/auth";

const CartPage = () => {
  const { accessToken } = useAuth();
  const { cartItems, addToCart, removeFromCart, total, clearCart } = useCart();

  async function handleOrderClick() {
    const items = cartItems.map((cartItem) => ({
      productId: cartItem.product.id,
      quantity: cartItem.quantity,
    }));

    const order = await createOrder(accessToken as string, { items });
    console.log(order);
    clearCart();
  }

  return (
    <>
      <main className="cart-page-container">
        <div className="title-container">
          <h2>Carrinho</h2>
        </div>
        <div className="content-container">
          {cartItems.map((cartItem, index) => (
            <CartItem
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItem={cartItem}
              key={index}
            ></CartItem>
          ))}
        </div>
        <div className="button-container">
          <button
            className="order-btn"
            onClick={handleOrderClick}
            disabled={cartItems.length < 1}
          >
            Fazer Pedido
          </button>
        </div>
        <div className="total-container">
          <p>Total: {formatProductPrice(total)}</p>
        </div>
      </main>
    </>
  );
};

export default CartPage;
