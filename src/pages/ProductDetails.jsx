import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="p-4 text-red-500">Product not found</div>;
  }

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white p-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
