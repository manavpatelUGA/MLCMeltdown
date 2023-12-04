import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import TicketsList from './TicketsList';
import axios from 'axios';
import logo from './logo.jpg';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#BA0C2F',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    borderBottomLeftRadius: '10px', // Rounded bottom-left corner
    borderBottomRightRadius: '10px', // Rounded bottom-right corner
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '50px', // Adjust the width of your logo as needed
    height: 'auto',
    marginLeft: '10px', // Adjust the margin to position the logo
  };

  return (
    <header style={headerStyle}>
      <h1>MLC Meltdown</h1>
      <img src={logo} alt="Logo" style={logoStyle} />
    </header>
  );
};
const HomePage = () => {
    // Initialize state with an empty array
    const [ticketList, setTicketList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:12739/tickets')
        .then((res) => {
            setTicketList(res.data);
        })
        .catch((err) => {
            console.log('error in TicketForm get');
        });
    }, []);

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
     
      const Footer = () => (
        <footer className="footer">
          <Link to="/">
            <button className="sign-out">Sign Out</button>
          </Link>
        </footer>
      );
    return (
      <div>
        <Header/>
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
      </div>
      <TicketsList tickets={ticketList} style={{width: '100px'}} />
      <footer>
          <Link to="/">
            <button>Sign out</button>
          </Link>
        </footer>
      </div>
    );
  }
  export default HomePage;

  

