import React from 'react';
import './User.css';

const User = props => {
    return (    
        <li key={props.id} className="user-item">
        <img src={props.img} className="user-img" alt={props.name} />
        <div className="user-info">
            <h2>{props.roomNumber}</h2>
            <h3>{props.startTime} years old </h3>
            <h3 className="user-content">Major: {props.roomVolume}</h3>
        </div>
        </li>
    )
}

export default User;
