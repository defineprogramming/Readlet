import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { PrimaryButton, TextField } from '@fluentui/react';
import { loginUser } from '../api/auth';
import '../styles/login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(username, password);
      if (user) {
        router.push('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form id="loginForm" onSubmit={handleLogin}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>
    </div>
  );
};

export default LoginPage;