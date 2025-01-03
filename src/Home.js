import React from 'react';
import CallToAction from "./Components/CallToAction.js";
import Specials from "./Components/Specials.js";
import CustomerSay from "./Components/CustomerSay.js";
import AboutStore from "./About.js";

const Home = () => {
  return (
    <div className="Home-page">
      <div>
        <CallToAction></CallToAction>
        <Specials></Specials>
        <CustomerSay></CustomerSay>
        <AboutStore></AboutStore>
      </div>
    </div>
  );
};

export default Home;

