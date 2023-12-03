import React from "react";
import Ticket from './Ticket';
import './TicketsList.css';
import './Ticket.css';
import './Button.css';

const UsersList = (props) => {
    return (
            <ul>
                {props.tickets.map((ticket) => (
                    <Ticket
                        roomNum = {ticket.roomNum}
                        peopleNum = {ticket.peopleNum}
                        startTime = {ticket.startTime}
                        endTime = {ticket.endTime}
                        roomVolume = {ticket.roomVolume}
                    />
                ))}
                
            </ul>
            
    )
}
export default UsersList