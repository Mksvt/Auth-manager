import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {user && (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;