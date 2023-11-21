import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const Floor = ({ number, children }) => (
        <div className="floor">
          <h2>Floor {number}</h2>
          {children}
        </div>
      );
      
      const Room = ({ number }) => {
        const [isReserved, setIsReserved] = React.useState(false);
      
        const handleReserve = () => {
          setIsReserved(true);
        };
      
        return (
          <div className={`room ${isReserved ? 'reserved' : ''}`}>
            <span>Room {number}</span>
            <Link to='/create-ticket'>
            <button onClick={handleReserve} disabled={isReserved}>
              {isReserved ? 'Reserved' : 'Reserve'}
            </button>
            </Link>

          </div>
        );
      };
      
      const SignOutButton = () => {
        // Logic for signing out...
        return (
          <Link to = '/'> 
          <button className="sign-out">Sign Out</button>
          </Link>
        );
      };
    return (
      <div className="app">
        {/* <Header title="MLC Meltdown" /> */}

        <Floor number="1">
          <Room number="124" />
          <Room number="125" />
        </Floor>
        <Floor number="2">
          <Room number="224" />
          <Room number="225" />
        </Floor>
        <Floor number="3">
          <Room number="324" />
          <Room number="325" />
        </Floor>
        <Floor number="4">
          <Room number="424" />
          <Room number="425" />
        </Floor>
        <SignOutButton />
      </div>
    );
  }
  export default HomePage;
//   function Floor({ number, children }) {
//     return (
//       <div className="floor">
//         <h2>Floor {number}</h2>
//         {children}
//       </div>
//     );
//   }
  
//   function Room({ number }) {
//     const [isReserved, setIsReserved] = React.useState(false);
  
//     function handleReserve() {
//       setIsReserved(true);
//       // Additional logic to handle reservation...
//     }
  
//     return (
//       <div className={`room ${isReserved ? 'reserved' : ''}`}>
//         <span>Room {number}</span>
//         <button onClick={handleReserve} disabled={isReserved}>
//           {isReserved ? 'Reserved' : 'Reserve'}
//         </button>
//       </div>
//     );
//   }
  
//   function SignOutButton() {
//     // Logic for signing out...
//     return (
//       <button className="sign-out">Sign Out</button>
//     );
//   }
  

