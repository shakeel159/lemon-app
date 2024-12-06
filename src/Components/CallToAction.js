import React from 'react';
import './CallToAction.css';
import ReservationPage from "./ReservationBtn.js";
import ChicagoText from './Chicago.js';
import ChicagoImg from '../img/ChicagoResturant.jpg';

const CallToAction = () => {
  const chicagoStore = {};
  return (
    <div className="CallToAction-Container">
      <div className='CallToAction-Body-container'>
        <h1 className="CallToAction-title" id='Name'>Little Lemon</h1>
        <h1 className='CallToAction-title' id='Location'>Chicago</h1>
        <p className="CallToAction-text"><ChicagoText></ChicagoText></p>
        <ReservationPage />
      </div>
      <div className='CallToAction-Img-Container'>
        <img className='CallToAction-image' img src={ChicagoImg} alt="Temporary placeholder"></img>
      </div>
      </div>
  );
};

export default CallToAction;