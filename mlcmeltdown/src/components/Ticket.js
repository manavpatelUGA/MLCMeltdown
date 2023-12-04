// import React from 'react';
// import './Ticket.css';
// import logo from './logo.jpg'
// import { Link } from 'react-router-dom';
// // import ticketId from './TicketsList.js'

// const Ticket = props => {
//     const id = props.getId;
//     return (
//         <li className="reservation-card">
//             <div>
//                 <h2>Room Number: {props.roomNum}</h2>
//                 <h3>People: {props.peopleNum}</h3>
//                 <h3>Start Time: {props.startTime}</h3>
//                 <h3>End Time: {props.endTime}</h3>
//                 <h3>Room Volume: {props.roomVolume}</h3>
//             </div>
//             <div>
//                 <img src={logo} alt={'logo'} />
//             </div>
//             <Link to={`/EditView/${id}`}>
//                 <button onClick={props.onEdit}>Edit</button>
//             </Link>
//             <button onClick={props.onDelete}>Delete</button>
//         </li>
//     )
// }

// export default Ticket;
import React from 'react';
import './Ticket.css';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

const Ticket = (props) => {
  const id = props.getId;
  const roomVolumeImage =
    props.roomVolume === 'quiet'
      ? 'https://static.vecteezy.com/system/resources/previews/026/306/667/non_2x/low-volume-circle-icon-lower-down-music-stereo-radio-megaphone-round-symbol-adjust-audio-speaker-sign-black-and-white-graphic-clipart-cricut-vector.jpg'
      : 'https://static.vecteezy.com/system/resources/previews/026/306/716/non_2x/max-volume-circle-icon-loud-speaker-increase-up-sound-round-symbol-maximum-audio-stereo-sign-black-and-white-graphic-illustration-clipart-vector.jpg';

  return (
    <li className="reservation-card">
      <div>
        <h2>Room Number: {props.roomNum}</h2>
        <h3>People: {props.peopleNum}</h3>
        <h3>Start Time: {props.startTime}</h3>
        <h3>End Time: {props.endTime}</h3>
        <h3>
          Room Volume: 
          {/* {props.roomVolume === 'quiet' ? 'Quiet' : 'Loud'} */}
          <img src={roomVolumeImage} alt={`${props.roomVolume} volume`} />
        </h3>
      </div>
      <div>
        <img src={logo} alt={'logo'} />
      </div>
      <Link to={`/EditView/${id}`}>
        <button onClick={props.onEdit}>Edit</button>
      </Link>
      <button onClick={props.onDelete}>Delete</button>
    </li>
  );
};

export default Ticket;
