import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/signin'); 
  };

  return (
    <header className="bg-gray-400 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACRozO6VizFkUuKWYmT3GQVGgDwONXQishw&s"
            alt="Healthub Logo"
            className="h-12 w-12"
          />
          <h1 className="text-2xl font-bold">Healthub</h1>
        </div>

        {/* Buttons on the same side */}
        <div className="flex space-x-4">
          {/* Home Button */}
          <Link to="/patient-dashboard">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition">
              Home
            </button>
          </Link>

          <Link to="/appointments">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition">
              My Appointments
            </button>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
