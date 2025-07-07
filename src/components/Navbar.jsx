import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
