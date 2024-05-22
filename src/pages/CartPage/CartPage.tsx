import CartItem from "../../components/CartItem/CartItem";
import KiwiImage from '../../assets/kiwi.jpg'
import './CartPage.css'
import Header from "../../components/Header/Header";
import BlankContainer from "../../components/BlankContainer/BlankContainer";

const cartItems = [
    {
        name: "Kiwi",
        image: KiwiImage,
        price: 1.5,
        quantity: 1
    },
    {
        name: "Kiwi",
        image: KiwiImage,
        price: 1.50,
        quantity: 1
    }
]

const CartPage = () => {
    return (
        <>
        <Header></Header>
        <BlankContainer>
          <main className="cart-page-container">
            <div className="title-container">
              <h2>Carrinho</h2>
            </div>
            <div className="content-container">
              {cartItems.map((cartItem, index) => (
                  <CartItem cartItem={cartItem} key={index}></CartItem>
              ))}
            </div>
          </main>
      

      </BlankContainer>
      <div className="total-container">
          <p>Total: R$ 80,00</p>
        </div>
      </>
    );
  };
  
  export default CartPage;