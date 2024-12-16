
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import HomePage from "./Home.js";
import ContactPage from "./Contact.js";
import AboutPage from "./About.js";
import MenuPage from "./Menu.js";
import ReservationPage from "./Reservation.js";
import Confirmation from './Components/confirmedBooking.js';
import React, { useState, useRef, useReducer, useEffect } from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

const API = `https://raw.githubusercontent.com/courseraap/capstone/main/api.js`;
// Define a reducer function
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

function App() {
  const initializeTimes  = () => {
    return ["10:00", "10:30", "11:00", "12:00", "12:30", "1:00", "1:30", "3:00", "3:30", "4:30"];
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            // Assuming the API returns times
            dispatch({ type: 'SET_TIMES', payload: data.times });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);
  return(
    <div className="app-container">
      <Header />
      <div className="nav">
        <Nav/>
      </div>
      <div className="main-container">
        <div className="main">
          <Main>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/reservation" element={<ReservationPage availableTimes={availableTimes} dispatch={dispatch}/>} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/reservation/confirmation" element={<Confirmation />} />
            </Routes>
          </Main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;