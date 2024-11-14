import React from 'react';
import UserProfile from './UserProfile';

function App() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A passionate developer who loves building interactive and dynamic applications.',
    profilePicture: 'https://via.placeholder.com/150'
  };

  return (
    <div className="App">
      <UserProfile 
        name={user.name}
        email={user.email}
        bio={user.bio}
        profilePicture={user.profilePicture}
      />
    </div>
  );
}

export default App;
