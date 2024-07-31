import React from 'react';
import { useParams } from 'react-router-dom';
import StoryCard from '../components/StoryCard';

const stories = [
  { id: 1, title: 'Love in Paris', author: 'Jane Doe', coverImage: 'path/to/cover1.jpg' },
  { id: 2, title: 'Sunset Romance', author: 'John Smith', coverImage: 'path/to/cover2.jpg' },
  { id: 3, title: 'Heartstrings', author: 'Emma Johnson', coverImage: 'path/to/cover3.jpg' },
];

const PublisherPage = () => {
  const { id } = useParams();

  return (
    <div className="container" style={styles.publisher}>
      <h2 style={styles.heading}>Publisher Name</h2>
      <div style={styles.grid}>
        {stories.map(story => (
          <StoryCard key={story.id} {...story} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  publisher: {
    paddingTop: '40px',
  },
  heading: {
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
};

export default PublisherPage;   