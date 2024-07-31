import React from 'react';

const Login = () => {
  return (
    <div className="container" style={styles.login}>
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form}>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  login: {
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

export default Login;