import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { PrimaryButton, TextField } from '@fluentui/react';
import { registerUser } from '../api/auth';

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const response = await registerUser(formData);
    if (response === 'REGISTER_SUCCESS') {
      router.push('/login');
    } else {
      alert('Registration failed!');
    }
  };

  return (
    <div id="registerForm">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          label="Username"
          required
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          required
          onChange={handleChange}
        />
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
        />
        <PrimaryButton type="submit">Register</PrimaryButton>
      </form>
    </div>
  );
};

export default Register;