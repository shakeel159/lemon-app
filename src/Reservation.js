import React, { useState } from "react";
import './Reservation.css';

const Reservation = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [availableTimes, setAvailableTimes] = useState([
        "10:00", "10:30", "11:00", "12:00", "12:30", 
        "1:00", "1:30", "3:00", "3:30", "4:30"
    ]);

    const handleSubmit = (e) => {
        e.preventDefualt();// default form submission behavior (which typically refreshes the page) is prevented by calling e.preventDefault().
    };

    return(
        <div className="Reservation_Menu">
        <h1 className="Page_Context">Reserve A Table</h1>
        <div className="Body">
        <form onSubmit={handleSubmit}>
            <div className="Form_Component">
                <label htmlFor="date_for_reservation">Date of reservation</label><br></br>
                <input 
                    type='date' 
                    id="date_for_reservation"
                    value={date}
                    onChange={e => setDate(e.target.value)}>
                </input>
            </div>
            <div className="Form_Component">
                <label htmlFor="Time_of_reservation">Time of reservation</label><br></br>
                <select 
                id="res-time "
                value={time}
                onChange={(e) => setTime(e.target.value)}>
                <option value="">Select a time</option> {/* Placeholder option */}
                    {availableTimes.map((slot, index) => (
                        <option key={index} value={slot}>
                        {slot}
                    </option>
                ))}
            </select>
            </div>
            <div className="Form_Component">
                <label htmlFor="Number_of_Guest">Number of Guest</label><br></br>
                <input 
                    type='Number' 
                    id="Number_of_Guest"
                    value={guests}
                    onChange={e => setGuests(e.target.value)}>   
                </input>
            </div>
            <div className="Form_Component">
            <label htmlFor="Occasion_of_reservation">Occasion</label><br></br>
            <select id="dropdown">
                <option value="none">none</option>
                <option value="Birthday">Birthday</option>
                <option value="Meeting">Meeting</option>
                <option value="Party">Party</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            </div>
            <div className="Form_Component">
                <button className="SubmitBtn" disabled={!(date && time && guests)}>Submit</button>
            </div>
        </form>
        </div>
    </div>
    )
};

export default Reservation;