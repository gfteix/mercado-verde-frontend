import React, { useState } from 'react';
import { login, LoginPayload } from '../../api/user';
import './LoginForm.css'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload: LoginPayload = { email, password };

    try {
      const response = await login(payload);
      console.log('Login successful:', response);
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
      </div>
      <div>
        <input
            placeholder="Senha"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
      <p>Não tem uma conta? <a href="">Cadastre-se</a></p>
    </form>
  );
};

export default LoginForm;
