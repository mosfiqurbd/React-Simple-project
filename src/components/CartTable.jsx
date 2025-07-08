import { useCart } from "../context/CartContext";

const CartTable = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your cart is empty.</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.title} className="cart-image" />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Remove 1</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartTable;
