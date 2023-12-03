import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import TicketsList from './TicketsList.js'

const EditView = (props) => {
   const {ticketId} = props;
   const [editTicket, setTicket] = useState(null);
   var ticket;
   useEffect(() => {
    // Function to fetch tickets data
    const fetchTicket = async () => {
      try {
        console.log("ID: " + ticketId);
        const response = await axios.get(`http://localhost:12739/tickets/${ticketId}`); // Replace with your actual URL
        setTicket(ticket = response.data); // Update the state with the fetched data
        console.log("Ticket to be edited" + ticket);
      } catch (error) {
        console.error('There was an error fetching the ticket\'s data:', error);
      }
    };

    fetchTicket(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once on mount
 


  return (
    <div>
    
    </div>
  );
};

export default EditView;
