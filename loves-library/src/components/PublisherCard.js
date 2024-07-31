import React from 'react';
import { Link } from 'react-router-dom';

const PublisherCard = ({ name, image, id }) => {
  return (
    <Link to={`/publisher/${id}`} style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
    </Link>
  );
};

const styles = {
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: '8px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: '#e0e0e0',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  name: {
    padding: '10px',
    margin: 0,
    textAlign: 'center',
  },
};

export default PublisherCard;