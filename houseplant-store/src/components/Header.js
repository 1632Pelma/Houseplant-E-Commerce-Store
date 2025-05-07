import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
      </nav>
      <Link to="/cart" className="nav-link">
        Cart <span className="cart-count">{totalItems}</span>
      </Link>
    </header>
  );
};

export default Header;