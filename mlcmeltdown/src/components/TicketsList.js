import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ticket from './Ticket'; 
import EditView from './EditView';

const UsersList = () => {
  const [tickets, setTickets] = useState([]); // Initialize tickets state
  const [ticketId, setId] = useState("");
  // var ticketId;
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

  const getTicket = async (id) => {
    try {
      const response = await axios.get(`http://localhost:12739/tickets/${id}`);
      console.log(response.data);
      return response.data; // This will return the data of the single ticket
    } catch (error) {
      console.error('Error fetching the ticket data:', error);
    }
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`http://localhost:12739/tickets/${id}`); 
      setTickets(tickets.filter(ticket => ticket._id !== id));
    } catch (error) {
      console.error('Error deleting the ticket:', error);
    }
  };
  const storeId = (id) => {
    setId(ticketId);
    console.log("ticket has been updated: " + ticketId);
  }
  
  return (
    <div>
      <ul>
        {tickets.map((ticket) => (
          <Ticket
            key={ticket._id}
            roomNum={ticket.roomNum}
            peopleNum={ticket.peopleNum}
            startTime={ticket.startTime}
            endTime={ticket.endTime}
            roomVolume={ticket.roomVolume}
            onDelete={() => deleteTicket(ticket._id)}
            onEdit={()=> getTicket(ticket._id)}
          />
        ))}
      </ul>
      <EditView ticketId={ticketId} />
    </div>
    
  );
};

export default UsersList;
