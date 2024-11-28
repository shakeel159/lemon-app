
import React from 'react';

const Main = ({ children }) => {
  return (  // <-- Add this return statement
    <div className="main-content">
      {children}  {/* This will display the content of each route */}
    </div>
  );
};

export default Main;