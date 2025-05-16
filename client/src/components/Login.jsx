import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/admin');
    } catch {
      setError('Hibás felhasználónév vagy jelszó!');
    }
  };

  return (
   <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
      <h2>Admin Bejelentkezés</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Felhasználónév"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Jelszó"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" style={{ width: '100%' }}>Bejelentkezés</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}