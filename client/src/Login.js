import React, { useState } from 'react';
import { loginUser, signupUser } from './api';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      let data;
      if (isSignup) {
        data = await signupUser(username, password);
      } else {
        data = await loginUser(username, password);
      }

      onLogin({ username, token: data.token }); // Save user
    } catch (err) {
      setError('Invalid credentials or user already exists.');
    }
  };

  return (
    <div>
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={handleSubmit}>
        {isSignup ? 'Sign Up' : 'Login'}
      </button>
      <button
        onClick={() => setIsSignup(!isSignup)}
        style={{ marginLeft: '10px' }}
      >
        Switch to {isSignup ? 'Login' : 'Sign Up'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
