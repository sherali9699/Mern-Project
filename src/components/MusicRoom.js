import React from "react";

//importing component
import Navbar from "./Navbar";
import Footer from "./Footer";

//importing images
import pic1 from "..//images/Music-Room/m2.png";
import pic2 from "..//images/Music-Room/m1.png";
import inst1 from '..//images/Music-Room/Intezar hussain.png';
import inst2 from '..//images/Music-Room/Islamuddin.png';
import inst3 from '..//images/Music-Room/Shehroze Hussain.png';
import inst4 from '..//images/Music-Room/Zohaib Hussain.png';
import late1 from '..//images/Music-Room/Late- profile01.png'
import late2 from '..//images/Music-Room/Late- profile02.png'
 

function Room() {
  return (
    <div>
      <Navbar />
      <Inner1 />
      <Teachers/>
      <Teachers_late/>
      <Footer />
    </div>
  );
}

function Inner1() {
  return (
    <div className="global-sec" style={{marginTop: '6rem'}}>
      <div className="container">
        <div className="home-about-content">
          <h1>Khuwaja Mashooqullah Music Room</h1>
          <div className="row">
            <div className="col-8 mx-auto">
              <p>
              Khwaja Mashooqullah Music Room was established through a generous donation from the Mashooqullah Family to support Habib University's musical initiatives. This space offers experiential musical education to students, staff, and faculty at Habib University. Featuring dedicated rooms for Sitar, Violin, Tabla, and Vocal lessons, the Music Room provides instruction to over a hundred community members under the guidance of skilled musical maestros. This facility is a testament to Habib's commitment to reviving forgotten histories and abandoned legacies, embracing the spirit of South Asia, and reintroducing the inhabitants of this region to their cultural and aesthetic heritage.
              </p>
            </div>
          </div>
        </div>
        <div className="home-about-images ">
          <div className="home-about-image">
            <img src={pic1} alt="image" className="img-fluid" />
          </div>
          <div className="home-about-image">
            <img src={pic2} alt="image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Teachers() {
    return (
      <div className="global-sec">
        <div className="container">
          <div className="home-about-content">
            <h2 style={{ marginBottom: "3rem" }}>instructors</h2>
          </div>
          <div className="home-about-images ">
          <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={inst1}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Intezar Hussain</h5>
                  <p>
                    Voval Instructor
                  </p>
                </div>
              </div>
            </div>
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={inst2}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Islamuddin Meer</h5>
                  <p>Violin Instructor</p>
                </div>
              </div>
            </div>
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={inst3}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Shehroz Hussain</h5>
                  <p>
                   Sitar Instructor
                  </p>
                </div>
              </div>
            </div>
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={inst4}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Zohaib Hussain</h5>
                  <p>
                   Tabla Instructor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  function Teachers_late() {
    return (
      <div className="global-sec">
        <div className="container">
          <div className="home-about-content">
            <h2 style={{ marginBottom: "3rem" }}>Remembring the Great Ustads</h2>
          </div>
          <div className="home-about-images ">
          <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={late1}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Ustad Khurshid Hussain</h5>
                  <p>
                    Tabla Instructor
                  </p>
                </div>
              </div>
            </div>
            <div class="parent-card-pic">
              <div class="child-card-pic">
                <div class="character-pic">
                  <img
                    src={late2}
                    alt="Ustaad Shahid Hamid"
                    class="image-fluid"
                  />
                </div>
                <div class="global-overlay">
                  <h5>Ustad Sajid Hussain</h5>
                  <p>Sitar Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Room;
