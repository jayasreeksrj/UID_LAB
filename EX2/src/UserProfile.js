import React from 'react';
import './UserProfile.css'; // For styling

const UserProfile = ({ name, email, bio }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src="/images/profile.jpg" alt={`${name}'s profile`} className="profile-picture" />
      </div>
      <div className="profile-body">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-email">{email}</p>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
