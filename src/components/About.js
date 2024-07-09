import React from "react";

// importing components
import Navbar from "./Navbar";
import Footer from "./Footer";

// importing images
import home_about01 from "../images/home/home about01.png";
import home_about02 from "../images/home/home about02.png";
import home_about03 from "../images/home/home about03.png";
import keraiPic from "../images/about/Ellipse 1.png";
import vec from "../images/about/Vector.png";
import vec2 from "../images/about/Vector (1).png";

function About() {
  return (
    <div>
      <Navbar />
      <About_about />
      <Message />
      <Footer />
    </div>
  );
}

function About_about() {
  return (
    <div className="global-sec" style={{ marginTop: 7 + "rem" }}>
      <div className="container">
        <div className="home-about-content">
          <h2>About</h2>
          <div className="row">
            <div className="col-8 mx-auto">
              <p>
                Experience the fusion of culture and education at the center for
                South Asian Music at Habib University. Our music room provide
                immersive learning opportunities, complemented by the courses
                that culminate in the south asian music minor. Dive into the
                historical, Mathematical, and performance dimensions, as we
                strive to revive cultural heritage and nurture interdeciplinary
                understanding.
              </p>
            </div>
          </div>
          <span className="prime-btn">Explore</span>
        </div>
        <div className="home-about-images ">
          <div className="home-about-image">
            <img src={home_about01} alt="image" className="img-fluid" />
          </div>
          <div className="home-about-image">
            <img src={home_about02} alt="image" className="img-fluid" />
          </div>
          <div className="home-about-image ">
            <img src={home_about03} alt="image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="global-sec" >
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto main-mess-box">
            <div className="row mess-head">
              <h2>Founding Director's Message</h2>
              <h3>Yosuf Kerai</h3>
            </div>
            <div className="row mess-mini">
              <div className="col-2">
                <img src={vec} alt="image" className="img-fluid" />
              </div>
              <div className="col-8">
                <p style={{ paddingBottom: "7rem" }}>
                  “The vast and complex repertoire of techniques and modes that
                  constitute both the melodic and rhythmic universes of South
                  Asian music render this art form as one of the greatest
                  achievements of this region. It makes for not only an
                  extremely robust and rich musical inheritance for the people
                  of South Asia, but its evolution embodies the trends of
                  modernization colonial South Asia experienced. However, the
                  systemic erasure of South Asian musical heritage in Pakistan
                  has pronounced the need for institutional recognition and
                  facilitation of students to engage with this music that is
                  integral to South Asian aesthetics and identity.”
                </p>
              </div>
              <div className="col-2">
                <img src={vec2} alt="image" className="img-fluid" />
              </div>
            </div>
            <div className="keraiPic">
              <img src={keraiPic} alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
