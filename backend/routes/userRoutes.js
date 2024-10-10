const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
  deleteUser,
  updateUser, // Import updateUser
} = require('../controllers/userController');

// POST /api/register
router.post('/register', registerUser);

// POST /api/login
router.post('/login', loginUser);

// GET /api/users
router.get('/users', getUsers);

// DELETE /api/users/:id
router.delete('/users/:id', deleteUser);

// PUT /api/users/:id (Update user)
router.put('/users/:id', updateUser);  // Add update route

module.exports = router;
