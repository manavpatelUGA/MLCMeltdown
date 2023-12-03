import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ticket from './Ticket'; // Assuming this is the path to your Ticket component

const UsersList = () => {
  const [tickets, setTickets] = useState([]); // Initialize tickets state

  useEffect(() => {
    // Function to fetch tickets data
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:12739/tickets'); // Replace with your actual URL
        setTickets(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('There was an error fetching the tickets data:', error);
      }
    };

    fetchTickets(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <ul>
      {tickets.map((ticket) => (
        <Ticket
          key={ticket._id}
          roomNum={ticket.roomNum}
          peopleNum={ticket.peopleNum}
          startTime={ticket.startTime}
          endTime={ticket.endTime}
          roomVolume={ticket.roomVolume || 'Not specified'}
        />
      ))}
    </ul>
  );
};

export default UsersList;
