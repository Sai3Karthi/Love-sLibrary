import React from 'react';
import { useParams } from 'react-router-dom';

const StoryPage = () => {
  const { id } = useParams();

  return (
    <div className="container" style={styles.story}>
      <h2 style={styles.title}>Story Title</h2>
      <p style={styles.author}>by Author Name</p>
      <img src="path/to/cover.jpg" alt="Story Cover" style={styles.cover} />
      <div style={styles.content}>
        <p>This is where the story content would go. It would be much longer and properly formatted.</p>
      </div>
    </div>
  );
};

const styles = {
  story: {
    paddingTop: '40px',
  },
  title: {
    marginBottom: '10px',
  },
  author: {
    marginBottom: '20px',
    color: '#b0b0b0',
  },
  cover: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    marginBottom: '20px',
  },
  content: {
    lineHeight: '1.6',
  },
};

export default StoryPage;