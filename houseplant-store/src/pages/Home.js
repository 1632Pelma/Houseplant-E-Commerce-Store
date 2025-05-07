import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '2rem',
        borderRadius: '10px'
      }}>
        <h1>GreenThumb</h1>
        <p>Bring nature indoors with our exotic houseplants!</p>
        <Link to="/products">
          <button style={{
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;