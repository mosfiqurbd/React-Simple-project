import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>My Store</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
