// Login.js
import React from 'react';
import './Login.css'; // Make sure to create a corresponding CSS file
import { Link } from 'react-router-dom';

const Login = () => {
    var isLoggedIn = false;
    return (
    <div className="login-container">
      <h1>Welcome</h1>
      <div className="icon-container">
        {/* SVG or image tag for the icon */}
        {/* Replace the src with your actual icon path */}
        <img src="mlcmeltdown\src\components\logo.svg" alt="Login Icon" />
      </div>
      <form className="login-form">
        <input type="text" placeholder="Student ID" />
        <input type="password" placeholder="Password" />
        <Link to='/Home-Page'>
            <button type="submit">Log in</button>
        </Link>
      </form>
      <div className="signup-link">
        Don’t have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
