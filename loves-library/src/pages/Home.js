import React from 'react';
import PublisherCard from '../components/PublisherCard';

const publishers = [
  { id: 1, name: 'Romance Realm', image: 'path/to/image1.jpg' },
  { id: 2, name: 'Heartbeat Books', image: 'path/to/image2.jpg' },
  { id: 3, name: 'Love Chronicles', image: 'path/to/image3.jpg' },
];

const Home = () => {
  return (
    <div className="container" style={styles.home}>
      <h2 style={styles.heading}>Welcome to Love's Library</h2>
      <p style={styles.subheading}>Choose a publisher to explore their stories:</p>
      <div style={styles.grid}>
        {publishers.map(publisher => (
          <PublisherCard key={publisher.id} {...publisher} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  home: {
    paddingTop: '40px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  subheading: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
};

export default Home;