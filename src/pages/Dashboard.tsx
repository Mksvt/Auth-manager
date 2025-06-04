import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto mt-8 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.email}!</h1>
      <p className="text-gray-600">Role: {user?.role}</p>
      <p className="mt-4">Navigate to Todos, Settings, or Profile using the navigation bar above.</p>
    </div>
  );
};

export default Dashboard;