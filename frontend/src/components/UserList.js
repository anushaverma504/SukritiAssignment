import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser, updateUser } from '../features/userSlice';
import '../styles/UserList.css';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  const [editingUserId, setEditingUserId] = useState(null);
  const [editUsername, setEditUsername] = useState('');
  const [editPassword, setEditPassword] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setEditUsername(user.username);
  };

  const handleUpdate = () => {
    dispatch(updateUser({ id: editingUserId, data: { username: editUsername, password: editPassword } }));
    setEditingUserId(null);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {editingUserId === user._id ? (
              <div>
                <input
                  type="text"
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="New password"
                  value={editPassword}
                  onChange={(e) => setEditPassword(e.target.value)}
                />
                <button onClick={handleUpdate}>Save</button>
              </div>
            ) : (
              <div>
                {user.username}
                <button onClick={() => handleEditClick(user)}>Edit</button>
                <button onClick={() => dispatch(deleteUser(user._id))}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
