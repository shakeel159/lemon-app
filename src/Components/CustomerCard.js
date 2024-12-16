import React from 'react';
import './CustomerCard.css';

const Card = ({ Name, Rating, Review, imageUrl }) => {
  return (
    <div className="Customer-Cards">
      <div>
        <img className='Card-Img-profile' src={imageUrl || "https://via.placeholder.com/300x200"} alt="Temporary placeholder"></img>
      </div>
      <div>
        <h1 className='Name'>{Name}</h1>
        <p  className='rate'>{Rating + "⭐"}</p>
        <p  className='pi'>{Review}</p>
      </div>
    </div>
  );
};

export default Card;