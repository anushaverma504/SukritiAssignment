// api.js
import axios from 'axios';

export const API_URL = 'http://localhost:5000';

export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const getUsers = () => axios.get(`${API_URL}/users`);
export const deleteUser = (userId) => axios.delete(`${API_URL}/users/${userId}`);
export const updateUser = (userId, userData) => axios.put(`${API_URL}/users/${userId}`, userData);  // New update method
