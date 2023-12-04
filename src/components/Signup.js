import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
import UserContext from '../context/UserContext';
import axios from 'axios';

const Signup = () => {
  const [ugaID, setUgaID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setUserData } = useContext(UserContext);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Perform signup logic here, e.g., send data to the server
    try {
      const newUser = { ugaID, password, confirmPassword };

      await axios.post("http://localhost:12739/users/signup", newUser);
      const loginRes = await axios.post("http://localhost:12739/users/login", {
        ugaID,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      setLoading(false);
      navigate('/Home-Page'); //NOTE: may be subject to change
    } catch (err) {
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    }
    // Reset the form state
    setUgaID('');
    setPassword('');
    setConfirmPassword('');
    setPasswordsMatch(true);
  }

  // Check if all input fields are filled and passwords match + check if athenticated and authorized
  const isSubmitDisabled = !ugaID || !password || !confirmPassword || !passwordsMatch;
  const finalSubmitIsDisabled = isSubmitDisabled || loading;

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <div className="icon-container">
        <img src={logo} alt="Login Icon" style={{ height: '100px', width: '100px' }} />
      </div>
      {error && <alert variant="danger">{error}</alert>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student ID"
          value={ugaID}
          onChange={(e) => setUgaID(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
        <button type="submit" disabled={finalSubmitIsDisabled} style={{ backgroundColor: finalSubmitIsDisabled ? 'grey' : '#BA0C2F' }}>
            Sign Up
          </button>
      </form>
    </div>
  );
};

export default Signup;
