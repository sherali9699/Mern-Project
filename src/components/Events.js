import React from "react";
import { useNavigate } from "react-router-dom";

// component
import Navbar from "./Navbar";
import Footer from "./Footer";

import sl1 from "../images/home/Rectangle 5.png";
import sl2 from "../images/home/events Card02.png";
import sl3 from "../images/home/events Card03.png";


function Events() {
  return (
    <div>
      <Navbar />
      <Event />
      <Footer />
    </div>
  );
}

function Event() {
  const navigate =useNavigate();
  const HandleClick =()=>{
    navigate('/event-inner')
  }

  return (
    <div className="global-sec" style={{ marginTop: "8rem" }}>
      <div className="home-about-content">
        <h2>Events</h2>
      </div>
      <div className="container">
        <div className="Event-images ">
          <div className="Event-image" onClick={HandleClick}>
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={sl1}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Andaaz: The dance Concert</h5>
                  <p>dated: 30/Nov/2018</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Event-image" onClick={HandleClick}>
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={sl2}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Drum Circle: Welcoming Spring</h5>
                  <p>Dated: 17/Jan/2019</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Event-image " onClick={HandleClick}>
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={sl3}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Raag Time</h5>
                  <p>05/Mar/2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Event-images " onClick={HandleClick}>
          <div className="Event-image">
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={sl3}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Raag Time</h5>
                  <p>05/Mar/2019</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Event-image" onClick={HandleClick}>
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={sl1}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Andaaz: The Dance Concert</h5>
                  <p>30/Nov/2018</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Event-image " onClick={HandleClick}>
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={sl2}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Drum Circle: The Welcoming Spring</h5>
                  <p>17/Jan/2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
