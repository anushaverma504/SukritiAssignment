import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      {/* <h1>Register Page</h1> */}
      <RegisterForm />
      <p>Already have an account: <Link to={'/'}>Login Here</Link></p>
    </div>
  );
};

export default RegisterPage;
