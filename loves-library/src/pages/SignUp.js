import React from 'react';

const SignUp = () => {
  return (
    <div className="container" style={styles.signup}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <input type="password" placeholder="Confirm Password" style={styles.input} />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

const styles = {
  signup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px',
  },
  heading: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4a4a4a',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default SignUp;