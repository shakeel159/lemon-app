import React from 'react';
import CustomerCard from './CustomerCard.js';
import tempProfil from '../img/ProfilPic.jpg';

const CustomerSay = () => {
  return (
    <div className="Customer-Component">
      <CustomerCard
      Name={"Jonny"}
      Rating={4.1}
      Review={"Could not complain about the service or the food, would definitily recomend and come again soon"}
      imageUrl={tempProfil}
      />
      <CustomerCard
      Name={"Jeoy"}
      Rating={4.9}
      Review={"fool Quality is alwyas great and consistant"}
      imageUrl={tempProfil}
      />
      <CustomerCard
      Name={"Joe"}
      Rating={3.8}
      Review={"Pretty large menu but the server were helpfull in assisting on what i would like best"}
      imageUrl={tempProfil}
      />
    </div>
  );
};

export default CustomerSay;