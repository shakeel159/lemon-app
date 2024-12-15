import React, { useState } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import './Reservation.css';

const Reservation = ({ availableTimes, updateTimes }) => {
    const [name, setName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [comments, setComments] = useState("");

    const navigate = useNavigate(); // For programmatic navigation

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Validate required fields
        if (name && lName && tel && date && time && guests) {
            alert("Reservation successfully submitted!");
            navigate("/reservation/confirmation", {
                state: {
                    name,
                    lName,
                    email,
                    tel,
                    date,
                    time,
                    guests,
                    comments
                }
            });
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <div className="Reservation_Menu">
            <h1 className="Page_Context">Reserve A Table</h1>
            <div className="Body">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="Form_Component">
                            <label htmlFor="name_for_reservation">Name for reservation</label><br />
                            <input
                                type="name"
                                id="name_for_reservation"
                                aria-label="Name for reservation"
                                value={name}
                                placeholder="First Name"
                                required
                                minLength={2}
                                maxLength={50}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="Form_Component">
                            <label htmlFor="lName">Last Name</label> <br></br>
                            <input
                                type="text"
                                id="lName"
                                 aria-label="Last Name for reservation"
                                placeholder="Last Name"
                                minLength={2}
                                maxLength={50}
                                value={lName}
                                required
                                onChange={(e) => setLName(e.target.value)}
                            ></input>
                        </div>
                        <div className="Form_Component">
                            <label htmlFor="email">Email</label> <br></br>
                            <input
                                type="email"
                                id="email"
                                 aria-label="Email for reservation"
                                placeholder="Email"
                                value={email}
                                required
                                minLength={4}
                                maxLength={200}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="Form_Component">
                            <label htmlFor="date_for_reservation">Date of reservation</label><br />
                            <input
                                type="date"
                                id="date_for_reservation"
                                aria-label="Select reservation date"
                                value={date}
                                required
                                onChange={e => setDate(e.target.value)} // Update local date state
                            />
                        </div>
                        <div className="Form_Component">
                            <label htmlFor="phonenum">Phone Number</label> <br></br>
                            <input
                                type="tel"
                                id="phonenum"
                                 aria-label="Phone Number for reservation"
                                placeholder="(xxx)-xxx-xxxx"
                                value={tel}
                                required
                                minLength={10}
                                maxLength={25}
                                onChange={(e) => setTel(e.target.value)}
                            ></input>
                        </div>
                        <div className="Form_Component">
                            <label htmlFor="res-time">Time of reservation</label><br />
                            <select
                                id="res-time"
                                aria-label="Select reservation time"
                                value={time}
                                required
                                onChange={(e) => setTime(e.target.value)}
                            >
                                <option value="">Select a time</option>
                                {availableTimes.map((slot, index) => {
                                return (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                                );
                            })}
                            </select>
                        </div>
                        <div className="Form_Component">
                            <label htmlFor="Number_of_Guest">Number of Guests</label><br />
                            <input
                                type="number"
                                id="Number_of_Guest"
                                min="1"
                                aria-label="Enter number of guests"
                                value={guests}
                                onChange={e => setGuests(e.target.value)}
                                required
                            />
                        </div>
                        <div className="Form_Component">
                            <label htmlFor="dropdown">Occasion</label><br />
                            <select id="dropdown" aria-label="Select occasion from dropdown">
                                <option value="none">None</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Meeting">Meeting</option>
                                <option value="Party">Party</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>
                        <div className="Form_Component">
                            <label htmlFor="comments">Additional Comments</label> <br></br>
                            <textarea
                                id="comments"
                                aria-label="comments for use here"
                                rows={8}
                                cols={50}
                                placeholder="Additional Comments"
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="Form_Component">
                            <button type="submit" className="SubmitBtn">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Reservation;