import React from "react";

// component
import Navbar from "./Navbar";
import Footer from "./Footer";

import im1 from "../images/stdent_work/eventsCard.png";
import im2 from "../images/stdent_work/eventsCard02.png";
import im3 from "../images/stdent_work/eventsCard03.png";
import im4 from "../images/stdent_work/eventsCard(1).png";
import im5 from "../images/stdent_work/eventsCard02(1).png";
import im6 from "../images/stdent_work/eventsCard03(1).png";


function Student_work() {
  return (<div> 
    <Navbar/>
    <Work/>
    <Footer/>
  </div>);
}

function Work() {
  return (
    <div className="global-sec" style={{marginTop:'8rem'}}>
      <div className="home-about-content">
        <h2>Students Work</h2>
      </div>
      <div className="container">
        <div className="Event-images ">
          <div className="Event-image">
            <img src={im1} alt="image" className="img-fluid" />
          </div>
          <div className="Event-image">
            <img src={im2} alt="image" className="img-fluid" />
          </div>
          <div className="Event-image ">
            <img src={im3} alt="image" className="img-fluid" />
          </div>
        </div>
        <div className="Event-images ">
          <div className="Event-image">
            <img src={im4} alt="image" className="img-fluid" />
          </div>
          <div className="Event-image">
            <img src={im5} alt="image" className="img-fluid" />
          </div>
          <div className="Event-image ">
            <img src={im6} alt="image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student_work;