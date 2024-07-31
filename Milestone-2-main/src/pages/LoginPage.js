import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css'; // Ensure you have this CSS file if needed for custom styling
import logo from './logo.jpg'; // Import your logo image

function LoginPage({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const { role } = useParams();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    // On successful authentication:
    setIsAuthenticated(true);
    if (role === 'student') {
      navigate('/student'); // Ensure correct route
    } else if (role === 'teacher') {
      navigate('/teacher'); // Ensure correct route
    }
  };

  return (
    <div className="login-page">
      <div className="card-container">
        <div className="card p-4">
          <div className="text-center mb-4">
            <img src={logo} alt="School Logo" className="login-logo" />
          </div>
          <h2 className="text-center">Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
