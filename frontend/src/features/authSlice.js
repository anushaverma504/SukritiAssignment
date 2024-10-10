import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../services/api';


export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
  const response = await axios.post(`${API_URL}/api/login`, userData);

  return response.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await axios.post(`${API_URL}/api/register`, userData);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, isAuthenticated: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    });
  },
});

export default authSlice.reducer;
