import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, cartTotal } = useContext(CartContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td className="p-2 border"><img src={item.image} alt={item.title} className="h-16" /></td>
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">${item.price}</td>
                <td className="p-2 border">{item.quantity}</td>
                <td className="p-2 border">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mt-4 font-bold">Total: ${cartTotal}</div>
    </div>
  );
};

export default Cart;
