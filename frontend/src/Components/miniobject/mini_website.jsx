import React, { useState } from 'react';
import '../../style/website.css';
import { FaPen, FaTrash, FaPlus } from 'react-icons/fa';

export default function MiniWebsite() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Bob 119', avatar: '👨‍💼', isActive: true },
    { id: 2, name: 'David 615', avatar: '👨‍💼', isActive: false }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState('');

  const addUser = () => {
    if (newUser.trim()) {
      setUsers([...users, { 
        id: users.length + 1, 
        name: newUser, 
        avatar: '👨‍💼',
        isActive: true 
      }]);
      setNewUser('');
      setShowForm(false);
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="mini-container">
      <div className="mini-header">
        <span className="header-icon">●</span>
        <h2>Management System</h2>
        <span className="header-icon">◐</span>
      </div>

      <div className="mini-content">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <div className="avatar">{user.avatar}</div>
              <span className={`user-name ${!user.isActive ? 'inactive' : ''}`}>
                {user.name}
              </span>
            </div>
            <div className="user-actions">
              <button className="btn-edit" title="Edit">
                <FaPen />
              </button>
              <button className="btn-delete" onClick={() => deleteUser(user.id)} title="Delete">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mini-footer">
        <button 
          className="btn-add"
          onClick={() => setShowForm(!showForm)}
        >
          <FaPlus /> Add User
        </button>

        {showForm && (
          <div className="form-container">
            <input
              type="text"
              placeholder="Enter user name"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addUser()}
            />
            <button className="btn-confirm" onClick={addUser}>Add</button>
            <button className="btn-cancel" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}