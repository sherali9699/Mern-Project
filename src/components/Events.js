import React from "react";

// component
import Navbar from "./Navbar";
import Footer from "./Footer";

import sl1 from "../images/home/Rectangle 5.png";
import sl2 from "../images/home/events Card02.png";
import sl3 from "../images/home/events Card03.png";

function Events() {
  return (<div> 
    <Navbar/>
    <Event/>
    <Footer/>
  </div>);
}

function Event() {
  return (
    <div className="global-sec" style={{marginTop:'8rem'}}>
      <div className="home-about-content">
        <h2>Events</h2>
      </div>
      <div className="container">
        <div className="Event-images ">
          <div className="Event-image">
            <img src={sl1} alt="image" className="img-fluid" />
          </div>
          <div className="Event-image">
            <img src={sl2} alt="image" className="img-fluid" />
          </div>
          <div className="Event-image ">
            <img src={sl3} alt="image" className="img-fluid" />
          </div>
        </div>
        <div className="Event-images ">
          <div className="Event-image">
            <img src={sl3} alt="image" className="img-fluid" />
          </div>
          <div className="Event-image">
            <img src={sl2} alt="image" className="img-fluid" />
          </div>
          <div className="Event-image ">
            <img src={sl1} alt="image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;