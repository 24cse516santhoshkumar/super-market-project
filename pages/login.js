import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Adjust the path as needed

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password) {
      setError('Username and password are required');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // Simulate a login delay
    setTimeout(() => {
      setLoading(false);
      // Example: Replace with actual authentication logic
      // if (username === 'nithiya@gmail.com' && password === 'pass') {
        navigate('/dashboard');
      // } else {
        // setError('Invalid credentials. Please try again.');
      // }
    }, 1500);
  };

  const handleSignUp = () => {
    navigate('/signup'); // Redirect to the sign-up page
  };

  return (
    <div className="login-container">
      <header className="header">
        <h1>Indian Super Market</h1>
      </header>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <br />
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleSignUp} className="signup-button">
        Not registered? Sign Up
      </button>
    </div>
  );
}

export default Login;
