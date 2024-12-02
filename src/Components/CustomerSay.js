import React from 'react';
import CustomerCard from './CustomerCard.js';

const CustomerSay = () => {
  return (
    <div className="Customer-Component">
      <CustomerCard
      Name={"Joey"}
      Rating={4.0}
      Review={"Could not complain about the service or the food, would definitily recomend and come again soon"}
      imageUrl="https://via.placeholder.com/300x200"
      />
      <CustomerCard
      Name={"Joey"}
      Rating={4.0}
      Review={"Could not complain about the service or the food, would definitily recomend and come again soon"}
      imageUrl="https://via.placeholder.com/300x200"
      />
      <CustomerCard
      Name={"Joey"}
      Rating={4.0}
      Review={"Could not complain about the service or the food, would definitily recomend and come again soon"}
      imageUrl="https://via.placeholder.com/300x200"
      />
    </div>
  );
};

export default CustomerSay;