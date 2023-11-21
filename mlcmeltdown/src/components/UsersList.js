import React from "react";
import Card from './Card';
import User from './User';
import './UsersList.css';
import './User.css';

const UsersList = (props) => {
    return (
        <Card className = "users">
            <ul>
                {props.users.map((user) => (
                    <User
                        key = {user.id}
                        roomNumber = {user.enteredRoomNum}
                        people = {user.enteredPeople}
                        age = {user.age}
                        major = {user.major}
                    />
                ))}
            </ul>
        </Card>
    )
}
export default UsersList