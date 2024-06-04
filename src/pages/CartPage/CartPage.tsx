import CartItem from "../../components/CartItem/CartItem";
import "./CartPage.css";
import { useCart } from "../../contexts/cart";
import { formatProductPrice } from "../../utils/price-formatter";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, total, clearCart } = useCart();

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
          <button className="order-btn" onClick={() => clearCart()}>
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
