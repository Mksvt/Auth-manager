import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth';

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="flex items-center justify-center relative">
        <div className="flex gap-7">
          <NavLink to="/dashboard" className="text-white hover:text-blue-400">
            Dashboard
          </NavLink>
          <NavLink to="/todos" className="text-white hover:text-blue-400">
            Todos
          </NavLink>
          <NavLink to="/settings" className="text-white hover:text-blue-400">
            Settings
          </NavLink>
          <NavLink to="/profile" className="text-white hover:text-blue-400">
            Profile
          </NavLink>
        </div>
        {user && (
          <div className="absolute right-4">
            <button
              onClick={handleLogout}
              className="bg-red-200 px-4 py-2 rounded-lg hover:bg-red-400"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
