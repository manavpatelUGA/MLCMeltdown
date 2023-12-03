import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TicketsList from './TicketsList.js'
import Ticket from './Ticket.js'
import { Link } from 'react-router-dom';


const EditView = (props) => {
   const {ticketId} = props;
  //  const [editTicket, setTicket] = useState(null);
   
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
const ticket = getTicket(id);
console.log(ticket);
// const [editTicket, setEditTicket] = useState({
//   // Initialize the state with the fields you want to edit
//   roomNum: ticket.roomNum,
//   peopleNum: ticket.peopleNum,
//   startTime: ticket.startTime,
//   endTime: ticket.endTime,
//   roomVolume: ticket.roomVolume
// });

const [enteredRoomNum, setRoomNum] = useState('');
    const [enteredPeople, setPeople] = useState('');
    const [enteredStartTime, setStartTime] = useState('');
    const [enteredEndTime, setEndTime] = useState('');
    var roomVolume = '';

    const roomNumChangeHandler = (event) => {
        setRoomNum(event.target.value);
    };
    const peopleChangeHandler = (event) => {
        setPeople(event.target.value);
    };
    const startTimeChangeHandler = (event) => {
        setStartTime(event.target.value);
    };
    const endTimeChangeHandler = (event) => {
        setEndTime(event.target.value);
    };

    const roomVolumeHandler = (event) => {
        roomVolume = event.target.value;
    };
    useEffect(() => {
      const fetchTicket = async () => {
        try {
          const response = await axios.get(`http://localhost:12739/tickets/${id}`);
          const ticketData = response.data;
  
         
  
          // Set the form input values
          setRoomNum(ticketData.roomNum);
          setPeople(ticketData.peopleNum);
          setStartTime(ticketData.startTime);
          setEndTime(ticketData.endTime);
          // setRoomVolume(ticketData.roomVolume);
        } catch (error) {
          console.error('Error fetching the ticket data:', error);
        }
      };
  
      fetchTicket();
    }, [id]);

const submitHandler = (event) => {
  event.preventDefault();

  const reservationDetails = {
      roomNum: enteredRoomNum,
      peopleNum: enteredPeople,
      startTime: enteredStartTime,
      endTime: enteredEndTime,
      roomVolume: roomVolume
  };

  axios.put(`http://localhost:12739/tickets/${id}`, reservationDetails)
  .then((res) => {
      // Reset the form fields
      setRoomNum('');
      setPeople('');
      setStartTime('');
      setEndTime('');
      document.getElementById('quiet').checked = false;
      document.getElementById('loud').checked = false; 
  })
  .catch((err) => {
      console.log('error in TicketForm post');
  });

};

  return (
    <div>
            <header className='formHeader'>
                Change a reservation
            </header>
        <form onSubmit={submitHandler}>
            <div className='new-ticket_controls'>
                <div className='new-ticket_control'>
                    <label>Room #: </label>
                    <input
                        type='text'
                        required
                        value={enteredRoomNum}
                        onChange={roomNumChangeHandler}
                    />
                </div>
                <div className='new-ticket_control'>
                    <label># of People in Room: </label>
                    <input
                        type='number'
                        required
                        min='1'
                        step='1'
                        value={enteredPeople}
                        onChange={peopleChangeHandler}
                    />
                </div>
                <div className='new-ticket_control'>
                    <label>Start Time: </label>
                    <input
                        type='time'
                        required
                        value={enteredStartTime}
                        onChange={startTimeChangeHandler}
                    />
                </div>
                <div className='new-ticket_control'>
                    <label>End Time: </label>
                    <input
                        type='time'
                        required
                        value={enteredEndTime}
                        onChange={endTimeChangeHandler}
                    />
                </div>
            </div>
            <div onChange={roomVolumeHandler} className='volumeRadios'>
                
                    <input type='radio' name='roomVolume' id='quiet' value='quiet'/>
                    <label for='quiet'>
                        <img src='https://static.vecteezy.com/system/resources/previews/026/306/667/non_2x/low-volume-circle-icon-lower-down-music-stereo-radio-megaphone-round-symbol-adjust-audio-speaker-sign-black-and-white-graphic-clipart-cricut-vector.jpg' alt=''/>
                    </label>
                    
                    
                    <input type='radio' name='roomVolume' id='loud' value='loud'/>
                    <label for='loud'>
                        <img src='https://static.vecteezy.com/system/resources/previews/026/306/716/non_2x/max-volume-circle-icon-loud-speaker-increase-up-sound-round-symbol-maximum-audio-stereo-sign-black-and-white-graphic-illustration-clipart-vector.jpg' alt=''/>
                    </label>
                    
                </div>
            <div className='new-ticket_actions'>
                <div className='new-ticket_cancel'>
                    <Link to='/Home-Page'>
                        <button>Cancel</button>
                    </Link>
                </div>
                <div className='new-ticket_confirm'>
                  
                    <button type='submit'>Confirm</button>
                  
                </div>
            </div>
        </form>
        </div>
  );
};

export default EditView;
