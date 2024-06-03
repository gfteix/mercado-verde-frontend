import CartItem from "../../components/CartItem/CartItem";
import KiwiImage from "../../assets/kiwi.jpg";
import "./CartPage.css";

const cartItems = [
  {
    name: "Kiwi",
    image: KiwiImage,
    price: 1.5,
    quantity: 1,
  },
  {
    name: "Kiwi",
    image: KiwiImage,
    price: 1.5,
    quantity: 1,
  },
];

const CartPage = () => {
  return (
    <>
      <main className="cart-page-container">
        <div className="title-container">
          <h2>Carrinho</h2>
        </div>
        <div className="content-container">
          {cartItems.map((cartItem, index) => (
            <CartItem cartItem={cartItem} key={index}></CartItem>
          ))}
        </div>
        <div className="total-container">
          <p>Total: R$ 80,00</p>
        </div>
      </main>
    </>
  );
};

export default CartPage;
