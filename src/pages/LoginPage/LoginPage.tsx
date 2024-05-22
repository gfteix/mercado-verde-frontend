import LoginForm from "../../components/LoginForm/LoginForm";
import './LoginPage.css'

const LoginPage = () => {
  return (
   <main className="login-page-container">
        <div className="login-content-container">
          <div className="welcome-container">
              <h2>Login</h2>
              <br></br><br></br>
              <h3 className="welcome-message">Olá, seja bem vindo ao <a className="mercado-verde">Mercado Verde!</a></h3>
          </div>
          <LoginForm/>
          <p>Não tem uma conta? <a href="">Cadastre-se</a></p>
        </div>
   </main>
  );
};

export default LoginPage;
