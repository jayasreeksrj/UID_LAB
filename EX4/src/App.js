import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
      validateEmail(e.target.value);
    }
  };

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  // Add a new user
  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email || emailError) return;
    try {
      await axios.post('http://localhost:5000/api/users', newUser);
      fetchUsers();
      setNewUser({ name: '', email: '' });
    } catch (err) {
      console.error(err);
    }
  };

  // Edit user
  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user._id === id);
    setNewUser(userToEdit);
    setCurrentUserId(id);
    setIsEditing(true);
  };

  // Update user
  const handleUpdateUser = async () => {
    if (emailError) return;
    try {
      await axios.put(`http://localhost:5000/api/users/${currentUserId}`, newUser);
      fetchUsers();
      setNewUser({ name: '', email: '' });
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete user
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>User Management (CRUD with MongoDB)</h1>

      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        {emailError && <span className="error">{emailError}</span>}
        {isEditing ? (
          <button onClick={handleUpdateUser}>Update User</button>
        ) : (
          <button onClick={handleAddUser}>Add User</button>
        )}
      </div>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <span>{user.name} - {user.email}</span>
            <button onClick={() => handleEditUser(user._id)}>Edit</button>
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
