import React from "react";

// importing componets
import Navbar from "./Navbar";
import Footer from "./Footer";

import im1 from "../images/event_inner/Rectangle 5.png";
import im2 from "../images/event_inner/events page.png";
import im3 from "../images/event_inner/events page (1).png";
import im4 from "../images/event_inner/events page (2).png";
import im5 from "../images/event_inner/events page (3).png";
import im6 from "../images/event_inner/events page (4).png";
import im7 from "../images/event_inner/events page (5).png";

function Eve_Inner() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main_sec/>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="event-inner-header">
      <div className="event-inner-head-pic">
        <img src={im1} alt="image" className="event-inner-head-pic" />
      </div>
      <div className="container event-inner-header-content">
        <h2>Andaaz: The Dance Concert</h2>
        <h6>Date : 20/Nov/2018</h6>
      </div>
    </div>
  );
}

function Main_sec() {
  return (
    <div className="global-sec">
      <div className="container event-inner-main">
        <p>
          Weaving togather strands of classical art forms of the region, Andaaz
          concert was a spelbinding display of Magical Khatak, featuring Farah
          Yaisn Shaikh, a renowned performer, choreographer, instructor and
          Founder/Director for Noorani Dance, known for her evocative story
          telling, technical precision, delicacy and grace. Accompained by
          Shehroze Hussain, the prodigious son and deciple of Ustaad Sajid
          Hussain, and Yosuf Kerai, Habib University's in-huose-tabla-nawaz, a
          memorable performance was delivered.
        </p>
          <div className="row">
            <div className="col-md-4 col-sm-12 ">
            <img src={im2} alt="image" className="event-inner-main-pic" />
            </div>
            <div className="col-md-4 col-sm-12 ">
            <img src={im3} alt="image" className="event-inner-main-pic" />
            </div>
            <div className="col-md-4 col-sm-12">
            <img src={im4} alt="image" className="event-inner-main-pic" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12 ">
            <img src={im5} alt="image" className="event-inner-main-pic" />
            </div>
            <div className="col-md-4 col-sm-12 ">
            <img src={im6} alt="image" className="event-inner-main-pic" />
            </div>
            <div className="col-md-4 col-sm-12">
            <img src={im7} alt="image" className="event-inner-main-pic" />
            </div>
          </div>
          <div className="like-share-btns d-flex justify-content-center">
                <span className="event-inner-btn">Like</span>
                <span className="event-inner-btn">Share</span>
          </div>
        </div>
    </div>
  );
}

export default Eve_Inner;
