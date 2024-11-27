import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 shadow-">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <Link to="/">RBAC APP</Link>
        </div>

        <nav className="space-x-6">
          <Link
            to="/"
            className="font-bold text-white hover:text-black transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/users"
            className="font-bold text-white hover:text-black transition duration-300"
          >
            Users
          </Link>
          <Link
            to="/roles"
            className="font-bold text-white hover:text-black transition duration-300"
          >
            Roles
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
