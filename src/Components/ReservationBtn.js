
import React from 'react';
import './ReservationBtn.css';
import { Link, useLocation } from 'react-router-dom';

const Reservation = () => {
  // Determine where the button should navigate
  const navigateTo ='/reservation';
  return (
    <Link to={navigateTo}>
      <button className='article-button'> Reserve a Table</button>
    </Link>
  );
};

export default Reservation;