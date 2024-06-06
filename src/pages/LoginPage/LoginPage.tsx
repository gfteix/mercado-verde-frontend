import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <main className="login-page-container">
      <div className="login-content-container">
        <div className="welcome-container">
          <br></br>
          <h2>Login</h2>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
