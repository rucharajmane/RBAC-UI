import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">RBAC APP</Link>
        </div>

        <nav className="space-x-6">
          <Link
            to="/"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/users"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Users
          </Link>
          <Link
            to="/roles"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Roles
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
