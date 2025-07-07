const CartTable = ({ cartItems, onRemove }) => {
    return (
      <table className="min-w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Product</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-2 px-4">{item.title}</td>
              <td className="py-2 px-4">${item.price}</td>
              <td className="py-2 px-4">{item.quantity}</td>
              <td className="py-2 px-4 text-center">
                <button
                  onClick={() => onRemove(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default CartTable;
  