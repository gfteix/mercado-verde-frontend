import CartItem from "../../components/CartItem/CartItem";
import "./CartPage.css";
import { useCart } from "../../contexts/cart";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, total } = useCart();

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
          >
          </CartItem>
          ))}
        </div>
        <div className="total-container">
          <p>Total: R$ {total}</p>
        </div>
      </main>
    </>
  );
};

export default CartPage;
