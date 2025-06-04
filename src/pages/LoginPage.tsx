import React from 'react';
import Login from '../components/auth/Login';

const LoginPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <Login />
    </div>
  );
};

export default LoginPage;