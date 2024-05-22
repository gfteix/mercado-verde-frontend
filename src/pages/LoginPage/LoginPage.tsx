import LoginForm from "../../components/LoginForm/LoginForm";
import './LoginPage.css'

const ProductPage = () => {
  return (
   <main className="login-page-container">
        <div className="welcome-container">
            <h2>Login</h2>
            <br></br><br></br>
            <h3>Olá, bem vindo ao Mercado Verde!</h3>
        </div>
        <LoginForm/>
        <p>Não tem uma conta? <a>Cadastre-se</a></p>
   </main>
  );
};

export default ProductPage;
