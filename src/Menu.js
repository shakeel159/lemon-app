import React from 'react';
import CallToAction from "./Components/CallToAction.js";
import foodMenu from './img/Menu.pdf'
import drinkOne from './img/DrinksMenuOne.pdf'
import drinktwo from './img/DrinksMenuTwo.pdf'
import drinkthree from './img/DrinksMenuFour.pdf'

const Menu = () => {
  return (
    <div className="Menu-page">
      <h1 className='PageTopic'>Menu</h1>
      <iframe src={foodMenu} width="100%" height="600px"></iframe>
      <iframe src={drinkOne} width="100%" height="600px"></iframe>
    </div>
  );
};

export default Menu;