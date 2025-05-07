const ProductCard = ({ plant, onAddToCart, isInCart }) => {
    return (
      <div className="product-card">
        <img 
          src={process.env.PUBLIC_URL + plant.image}
          alt={plant.name}
          className="product-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = process.env.PUBLIC_URL + '/images/placeholder.jpg';
          }}
        />
        <div className="product-content">
          <h3 className="product-name">{plant.name}</h3>
          <p className="product-price">${plant.price}</p>
          <p className="product-description">{plant.description}</p>
          <button 
            onClick={onAddToCart} 
            disabled={isInCart}
            className="add-to-cart-btn"
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;