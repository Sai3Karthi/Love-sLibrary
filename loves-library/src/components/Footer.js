import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2024 Love's Library. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#936464',
    padding: '20px 0',
    marginTop: '40px',
    bottom:'0px',
    display: 'block',
  },
  container: {
    display: 'fixed',
    bottom: '0px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    textAlign: 'center',
  },
};

export default Footer;