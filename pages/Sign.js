import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css'; // Adjust the path as needed

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password || !email) {
      setError('All fields are required');
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
    // Simulate a registration delay
    setTimeout(() => {
      setLoading(false);
      // Example: Replace with actual registration logic
      navigate('/');
    }, 1500);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      <br />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default SignUp;
