const CartItem = ({ item, onRemove, onIncrement, onDecrement }) => {
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={onIncrement}>+</button>
        </div>
        <button onClick={onRemove}>Remove</button>
      </div>
    );
  };
  
  export default CartItem;