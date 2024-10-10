import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../services/api';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${API_URL}/api/users`);
  return response.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  await axios.delete(`${API_URL}/api/users/${userId}`);
  return userId;
});

export const updateUser = createAsyncThunk('users/updateUser', async ({ id, data }) => {
    const response = await axios.put(`${API_URL}/api/users/${id}`, data);
    return response.data;
  });

  const userSlice = createSlice({
    name: 'users',
    initialState: { list: [], status: null },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
      });
      builder.addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user._id !== action.payload);
      });
      // Handle user update
      builder.addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload.user;
        const index = state.list.findIndex((user) => user._id === updatedUser._id);
        if (index !== -1) {
          state.list[index] = updatedUser;
        }
      });
    },
  });
  
export default userSlice.reducer;
