import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Love's Library</h1>
        <nav>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/signup" style={styles.link}>Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2a2a2a',
    padding: '20px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: ' 20px',
  },
  logo: {
    color: '#ffffff',
    margin: 0,
  },
  link: {
    color: '#e0e0e0',
    textDecoration: 'none',
    marginLeft: '20px',
  },
};

export default Header;