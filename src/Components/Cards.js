import React from 'react';
import './Cards.css';

const Card = ({ foodItem_Name, price, description, imageUrl }) => {
  return (
    <div className="Specials-Cards">
      <img className='Card-Img' src={imageUrl || "https://via.placeholder.com/300x200"} alt="Temporary placeholder"></img>
      <div className='Card-Text'>
        <h1 className='FoodName'>{foodItem_Name}</h1>
        <p>${price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;