import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ title, author, coverImage, id }) => {
  return (
    <Link to={`/story/${id}`} style={styles.card}>
      <img src={coverImage} alt={title} style={styles.image} />
      <div style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.author}>{author}</p>
      </div>
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
    height: '300px',
    objectFit: 'cover',
  },
  info: {
    padding: '10px',
  },
  title: {
    margin: '0 0 5px 0',
  },
  author: {
    margin: 0,
    fontSize: '0.9em',
    color: '#b0b0b0',
  },
};

export default StoryCard;