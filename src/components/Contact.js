import React from "react";

// importing components
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Middle />
      <Footer />
    </div>
  );
}

function Middle() {
  return (
    <div className="global-sec">
      <div className="container contact-page">
        <h2>Contact Us</h2>
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="contact-common ">
              <h3>Center for south Asian Music</h3>
              <p>music@habib.edu.pk</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="contact-common">
              <h3>Yosuf Kerai - Founding Director</h3>
              <p>Yosuf.kerai@sse.habib.edu.pk</p>
              <p>021 111 042 424 (Ext: 5239)</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="contact-common">
              <h3>Chandu lal - Music Room Manager</h3>
              <p>Chandu.lal@habib.edu.pk</p>
              <p>021 111 042 424 (Ext: 4595)</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="contact-common ">
              <h3>Syed Muhammad Kumail Ali Jaffry</h3>
              <h3>- Coordinator</h3>
              <p>kumail.jaffry@habib.edu.pk</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="contact-common">
              <h3>Marya DurkhanWalla - Student Coordinator</h3>
              <p>md07585@st.habib.edu.pk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
