import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => dispatch(removeFromCart(item.id))}
              onIncrement={() => dispatch(incrementQuantity(item.id))}
              onDecrement={() => dispatch(decrementQuantity(item.id))}
            />
          ))}
          <p>Total: ${totalCost.toFixed(2)}</p>
          <button disabled>Checkout (Coming Soon)</button>
          <Link to="/products">Continue Shopping</Link>
        </>
      )}
    </div>
  );
};

export default Cart;