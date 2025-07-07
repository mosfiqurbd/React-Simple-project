import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p>{product.description.substring(0, 50)}...</p>
      <p className="font-bold">${product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-blue-500 text-white p-2 mt-2 rounded"
      >
        Add to Cart
      </button>
      <Link to={`/product/${product.id}`} className="text-blue-500 block mt-2">View Details</Link>
    </div>
  );
};

export default ProductCard;
