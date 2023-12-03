import React from 'react';
import './Ticket.css';
import logo from './logo.jpg'
import { Link } from 'react-router-dom';
// import ticketId from './TicketsList.js'

const Ticket = props => {
    const id = props.key;
    
    return (
        <li className="reservation-card">
            <div>
                <h2>Room Number: {props.roomNum}</h2>
                <h3>People: {props.peopleNum}</h3>
                <h3>Start Time: {props.startTime}</h3>
                <h3>End Time: {props.endTime}</h3>
                <h3>Room Volume: {props.roomVolume}</h3>
            </div>
            <div>
                <img src={logo} alt={'logo'} />
            </div>
            <Link to={`/EditView/${id}`}>
                <button onClick={props.onEdit}>Edit</button>
            </Link>
            <button onClick={props.onDelete}>Delete</button>
        </li>
    )
}

export default Ticket;
