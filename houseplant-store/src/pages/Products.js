import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const plants = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 35,
      category: 'Tropical',
      image: '/images/monstera.jpg',
      description: 'Iconic split-leaf plant that thrives in bright, indirect light.'
    },
    {
      id: 2,
      name: 'Snake Plant',
      price: 25,
      category: 'Low-Light',
      image: '/images/snake-plant.jpg',
      description: 'Nearly indestructible plant that purifies air and survives low light.'
    },
    {
      id: 3,
      name: 'Fiddle Leaf Fig',
      price: 45,
      category: 'Statement',
      image: '/images/fiddle-leaf-fig.jpg',
      description: 'Trendy tree with large, violin-shaped leaves needs bright light.'
    },
    {
      id: 4,
      name: 'Peace Lily',
      price: 30,
      category: 'Flowering',
      image: '/images/peace-lily.jpg',
      description: 'Beautiful white blooms and thrives in low to medium light.'
    },
    {
      id: 5,
      name: 'Aloe Vera',
      price: 18,
      category: 'Succulent',
      image: '/images/aloe-vera.jpg',
      description: 'Healing succulent that loves sunlight and needs little water.'
    },
    {
      id: 6,
      name: 'Golden Pothos',
      price: 22,
      category: 'Trailing',
      image: '/images/pothos.jpg',
      description: 'Easy-care vine with heart-shaped leaves that grows quickly.'
    },
    {
      id: 7,
      name: 'ZZ Plant',
      price: 32,
      category: 'Low-Light',
      image: '/images/zz-plant.jpg',
      description: 'Drought-tolerant plant with glossy leaves that thrives on neglect.'
    },
    {
      id: 8,
      name: 'Rubber Plant',
      price: 38,
      category: 'Statement',
      image: '/images/rubber-plant.jpg',
      description: 'Bold plant with large, shiny leaves that purifies indoor air.'
    },
    {
      id: 9,
      name: 'Heartleaf Philodendron',
      price: 20,
      category: 'Trailing',
      image: '/images/philodendron.jpg',
      description: 'Fast-growing vine perfect for hanging baskets or shelves.'
    },
    {
      id: 10,
      name: 'Spider Plant',
      price: 15,
      category: 'Hanging',
      image: '/images/spider-plant.jpg',
      description: 'Produces baby plantlets that dangle from long stems.'
    }
  ];

  // Get all unique categories
  const categories = ['All', ...new Set(plants.map(plant => plant.category))];

  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="products-page">
      <h1>Shop Plants</h1>
      <select 
        className="category-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="products-grid">
        {filteredPlants.map(plant => (
          <ProductCard 
            key={plant.id} 
            plant={plant} 
            onAddToCart={() => dispatch(addToCart(plant))}
            isInCart={cartItems.some(item => item.id === plant.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;