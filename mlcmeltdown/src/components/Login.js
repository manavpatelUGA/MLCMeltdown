// Login.js
import React, { useState, useContext } from 'react';
import './Login.css'; // Make sure to create a corresponding CSS file
import { useNavigate, Link } from 'react-router-dom';
import logo from './logo.jpg';
import axios from 'axios';
import UserContext from '../context/UserContext';

const Login = () => {
  const [ugaID, setUgaID] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const loginUser = { ugaID, password };
      const loginRes = await axios.post("http://localhost:12739/users/login", loginUser)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      navigate('/Home-Page'); //NOTE: may be subject to change
    } catch (err) {
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  return (
    <div className="login-container">
      <h1>MLC Meltown</h1>
      <div className="icon-container">
        {/* SVG or image tag for the icon */}
        {/* Replace the src with your actual icon path */}
        <img src={logo} alt="Login Icon" style={{height: '100px', width: '100px'}}/>
      </div>
      {error && <alert variant='danger'>{error}</alert>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" required onChange={e => setUgaID(e.target.value)} placeholder="Student ID" />
        <input type="password" required onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button disabled={loading} type="submit">Log in</button>
      </form>
      <div className="signup-link">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
