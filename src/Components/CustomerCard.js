import React from 'react';
import './CustomerCard.css';

const Card = ({ Name, Rating, Review, imageUrl }) => {
  return (
    <div className="Customer-Cards">
      <div>
        <img className='Card-Img' src={imageUrl || "https://via.placeholder.com/300x200"} alt="Temporary placeholder"></img>
        <h1 className='Name'>{Name}</h1>
      </div>
      <div>
        <p>{Rating}</p>
        <p>{Review}</p>
      </div>
    </div>
  );
};

export default Card;