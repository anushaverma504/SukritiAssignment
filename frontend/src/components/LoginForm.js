import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser({ username, password }));
    
    if (loginUser.fulfilled.match(resultAction)) {
      // Navigate to the home page after successful login
      navigate('/home');
    } else {
      // Handle error case
      console.log('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
