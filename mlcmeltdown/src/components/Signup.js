// import React, { useState } from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';
// import logo from './logo.jpg';

// const Signup = () => {
//   const [studentID, setStudentID] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordsMatch, setPasswordsMatch] = useState(true);

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     // Check if passwords match when the password field changes
//     setPasswordsMatch(e.target.value === confirmPassword);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     // Check if passwords match when the confirm password field changes
//     setPasswordsMatch(e.target.value === password);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform signup logic here, e.g., send data to the server

//     // Reset the form state
//     setStudentID('');
//     setPassword('');
//     setConfirmPassword('');
//     setPasswordsMatch(true);
//   };

//   return (
//     <div className="login-container">
//       <h1>Sign Up</h1>
//       <div className="icon-container">
//         <img src={logo} alt="Login Icon" style={{ height: '100px', width: '100px' }} />
//       </div>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Student ID"
//           value={studentID}
//           onChange={(e) => setStudentID(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={handleConfirmPasswordChange}
//         />
//         {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
//         <Link to='/Home-Page'>
//             <button type="submit">Log in</button>
//         </Link>
//         {/* <button type="submit">Sign Up</button> */}
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

const Signup = () => {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, e.g., send data to the server
    // Reset the form state
    setStudentID('');
    setPassword('');
    setConfirmPassword('');
    setPasswordsMatch(true);
  };

  // Check if all input fields are filled and passwords match
  const isSubmitDisabled = !studentID || !password || !confirmPassword || !passwordsMatch;

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <div className="icon-container">
        <img src={logo} alt="Login Icon" style={{ height: '100px', width: '100px' }} />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
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
        <Link to='/'>
        <button type="submit" disabled={isSubmitDisabled} style={{ backgroundColor: isSubmitDisabled ? 'grey' : 'red' }}>
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
