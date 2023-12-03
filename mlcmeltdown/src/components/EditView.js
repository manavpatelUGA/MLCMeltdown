import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TicketsList from './TicketsList.js'
import Ticket from './Ticket.js'

const EditView = (props) => {
   const {ticketId} = props;
   const [editTicket, setTicket] = useState(null);
   var ticket;
  //  useEffect(() => {
  //   // Function to fetch tickets data
  //   const fetchTicket = async () => {
  //     try {
  //       console.log("ID: " + ticketId);
  //       const response = await axios.get(`http://localhost:12739/tickets/${ticketId}`); // Replace with your actual URL
  //       setTicket(ticket = response.data); // Update the state with the fetched data
  //       console.log("Ticket to be edited" + ticket);
  //     } catch (error) {
  //       console.error('There was an error fetching the ticket\'s data:', error);
  //     }
  //   };

  //   fetchTicket(); // Call the function to fetch data
  // }, []); // Empty dependency array means this effect runs once on mount
 

let {id} = useParams();
// console.log('THIS IS THE ID FUCK ' + id);
const getTicket = async (id) => {
  try {
    const response = await axios.get(`http://localhost:12739/tickets/${id}`);
    console.log(response.data);
    return response.data._id; // This will return the data of the single ticket
  } catch (error) {
    console.error('Error fetching the ticket data:', error);
  }
};
const tickets = getTicket(id);
  return (
    <div>
      
      hello world 
        
    </div>
  );
};

export default EditView;
