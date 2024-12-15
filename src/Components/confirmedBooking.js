import React from "react";
import { useLocation } from "react-router-dom";
import './confirmBooking.css';

const Confirmation = () => {
    const { state } = useLocation(); // Access the passed data

    if (!state) {
        return <h1>No reservation data available</h1>;
    }

    const { name, lName, email, tel, date, time, guests, comments } = state;

    return (
        <div className=" Confirmation-box">
            <h1 className="Heading">Reservation Confirmation</h1>
            <p>Name: <span id="response">{name} {lName}</span></p>
            <p>Email: <span id="response">{email}</span></p>
            <p>Phone: <span id="response">{tel}</span></p>
            <p>Date: <span id="response">{date}</span></p>
            <p>Time: <span id="response">{time}</span></p>
            <p>Guests: <span id="response">{guests}</span></p>
            <p>Comments:</p>
            <p>{comments}</p>
        </div>
    );
};

export default Confirmation;