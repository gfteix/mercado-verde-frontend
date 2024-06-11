import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../assets/logo.jpg"

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <main className="login-page-container">
      <div className="login-content-container">
        <div className="welcome-container">
          <img src={Logo}/>
          <h2>Login</h2>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
