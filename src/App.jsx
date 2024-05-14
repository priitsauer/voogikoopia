import "./style.css";
import React from "react";
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero";
import ContStop from './Components/ContStopper';
import Accordion from './Components/Content';
import TestimonialCarousel from "./Components/Carousell";
import Mobile from "./Components/Mobileview";
import Offer from "./Components/Offer";
import Picturless from "./Components/Picturless";
import Footer from "./Components/Footer";
//import ParallaxImages from "./Components/Paralax";
import Assistance from "./Components/Assistance";

  
const App = () => {
  return (
    <div id="app">
          <Navbar/>
          <Hero/>
          <Accordion/>
          <ContStop/>
          <TestimonialCarousel/>
          <Mobile/>
          
          <Offer/>
          <Assistance/>
          <Picturless/>
          <Footer/>
    </div>
  );
};

export default App;


