
import React from 'react';
import './Reservation.css';
import { Link, useLocation } from 'react-router-dom';

const Reservation = () => {
  const location = useLocation(); // Get the current route location

  // Determine where the button should navigate
  const navigateTo = location.pathname === '/reservation' ? '/payment' : '/reservation';
  return (
    <Link to={navigateTo}>
      <button className='article-button'> Reserve a Table</button>
    </Link>
  );
};

export default Reservation;