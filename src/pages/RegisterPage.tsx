import React from 'react';
import Register from '../components/auth/Register';

const RegisterPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <Register />
    </div>
  );
};

export default RegisterPage;