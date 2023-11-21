import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TicketForm.css';
import UsersList from './UsersList';

const TicketForm = (props) => {
    // Initialize state with an empty array or with existing user data
    const [usersList, setUsersList] = useState([]);

    // Function to add a new user to the usersList
    const addUserHandler = (reservationDetails) => {
        setUsersList((prevUsersList) => {
            return [reservationDetails, ...prevUsersList];
        });
    };    
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
    
    const submitHandler = (event) => {
        event.preventDefault();
    
        const reservationDetails = {
            roomNum: enteredRoomNum,
            people: enteredPeople,
            startTime: enteredStartTime,
            endTime: enteredEndTime,
            roomVolume: roomVolume
        };
    
        addUserHandler(reservationDetails);
    
        // Reset the form fields
        setRoomNum('');
        setPeople('');
        setStartTime('');
        setEndTime('');
        // No need to reset roomVolume since it's not part of the state
    };
    
    const ReservationCard = ({ reservation }) => (
        <div className="reservation-card">
            <div>
                <p>Room Number: {reservation.roomNum}</p>
                <p>People: {reservation.people}</p>
                <p>Start Time: {reservation.startTime}</p>
                <p>End Time: {reservation.endTime}</p>
            </div>
        </div>
    );
    
    const UsersList = ({ users }) => (
        <section>
            {users.map((reservation, index) => (
                <ReservationCard key={index} reservation={reservation} />
            ))}
        </section>
    );
    

    // const submitHandler = (event) => {
    //     event.preventDefault();

    //     const ticketInfo = {
  
    //         roomNum: enteredRoomNum,
    //         people: enteredPeople,
    //         startTime: enteredStartTime,
    //         endTime: enteredEndTime,
    //         roomVolume: roomVolume
      

    //     }

    //     //console.log(ticketInfo);
    //     setRoomNum('');
    //     setPeople('');
    //     setStartTime('');
    //     setEndTime('');
    //     document.getElementById('quiet').checked = false;
    //     document.getElementById('loud').checked = false;
    // };

    return (
        <div>
            <header className='formHeader'>
                Reserve a Room
            </header>
        <form onSubmit={submitHandler}>
            <div className='new-ticket_controls'>
                <div className='new-ticket_control'>
                    <label>Room #: </label>
                    <input
                        type='text'
                        value={enteredRoomNum}
                        onChange={roomNumChangeHandler}
                    />
                </div>
                <div className='new-ticket_control'>
                    <label># of People in Room: </label>
                    <input
                        type='number'
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
                        value={enteredStartTime}
                        onChange={startTimeChangeHandler}
                    />
                </div>
                <div className='new-ticket_control'>
                    <label>End Time: </label>
                    <input
                        type='time'
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
        <UsersList users={usersList} />
        </div>
    );
};

export default TicketForm;