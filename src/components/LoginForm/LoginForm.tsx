import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { LoginPayload } from "../../api/user";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { useAuth } from "../../contexts/auth";

const LoginForm: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      formData.email.trim() !== "" && formData.password.trim() !== "";
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await signIn(formData);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(JSON.stringify(err, null, 2));
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Senha"
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button disabled={!isFormValid} type="submit">
        Login
      </button>
      <p>
        Não é cadastrado?{" "}
        <Link className="page-link" to="/register">
          Criar uma conta
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
