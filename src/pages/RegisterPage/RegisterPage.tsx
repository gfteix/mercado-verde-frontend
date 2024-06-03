import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <main className="register-page-container">
      <div className="register-content-container">
        <div className="welcome-container">
          <h2>Cadastro</h2>
          <br></br>
          <br></br>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
