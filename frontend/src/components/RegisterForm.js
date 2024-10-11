import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const resultAction = await dispatch(registerUser({ username, password })); // Wait for the action to complete
  
      if (registerUser.fulfilled.match(resultAction)) {
        // Navigate to the login page after successful registration
        navigate('/');
      } else {
        // Handle error case, like showing an error message
        console.log('Register failed');
      }
    } catch (error) {
      // Handle any errors that might occur
      console.error('Error during registration:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
