import React from 'react';
import Card from './Cards';
import './Specials.css';
import { Link } from 'react-router-dom';
import ShrimpPasta from '../img/ShrimpPasta.jpg';
import Pizza from '../img/PizzaMag.jpg';
import Calimari from '../img/CalemariDish.jpg';
const Specials = () => {
  return (
    <div className="Specials-Container">
      <div className='Specials-Title'>
        <h1>This Weeks Specials!</h1>
        <Link to="./menu">
          <button className='Specials-Button'>View Our menu</button>
        </Link>
      </div>
      <div className='Specials-Body'>
        <Card 
          foodItem_Name="Spaghetti Bolognese"
          price={12.99}
          description="A classic Italian pasta dish with rich meat sauce."
          imageUrl={ShrimpPasta}
        />
        <Card 
          foodItem_Name="Spaghetti Bolognese"
          price={12.99}
          description="A classic Italian pasta dish with rich meat sauce."
          imageUrl={Pizza}
        />
        <Card 
          foodItem_Name="Spaghetti Bolognese"
          price={12.99}
          description="A classic Italian pasta dish with rich meat sauce."
          imageUrl={Calimari}
        />
      </div>
    </div>
  );
};

export default Specials;