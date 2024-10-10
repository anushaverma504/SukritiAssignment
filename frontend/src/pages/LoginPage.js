import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
      <p>Don't have an account: <Link to={'/register'}>Register Here</Link></p>
    </div>
  );
};

export default LoginPage;
