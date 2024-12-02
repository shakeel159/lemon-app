import React from 'react';
import Card from './Cards';
import './Specials.css';
const Specials = () => {
  return (
    <div className="Specials-Container">
      <div className='Specials-Title'>
        <h1>This Weeks Specials!</h1>
        <button className='Specials-Button'>View Our menu</button>
      </div>
      <div className='Specials-Body'>
        <Card 
          foodItem_Name="Spaghetti Bolognese"
          price={12.99}
          description="A classic Italian pasta dish with rich meat sauce."
          imageUrl="https://via.placeholder.com/300x200"
        />
        <Card 
          foodItem_Name="Spaghetti Bolognese"
          price={12.99}
          description="A classic Italian pasta dish with rich meat sauce."
          imageUrl="https://via.placeholder.com/300x200"
        />
        <Card 
          foodItem_Name="Spaghetti Bolognese"
          price={12.99}
          description="A classic Italian pasta dish with rich meat sauce."
          imageUrl="https://via.placeholder.com/300x200"
        />
      </div>
    </div>
  );
};

export default Specials;