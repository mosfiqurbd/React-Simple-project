import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="container">
        <h2>Product not found.</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: "400px", width: "100%" }} />
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
