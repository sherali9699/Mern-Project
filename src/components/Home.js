import React from "react";

// for slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './CardSlider.css'; // Your custom CSS for additional styling

//importing componenets
import Navbar from "./Navbar";
import Footer from "./Footer";

//importing images
import home_about01 from "../images/home/home about01.png";
import home_about02 from "../images/home/home about02.png";
import home_about03 from "../images/home/home about03.png";
import home_about06 from "../images/home/home about08.png";
import home_about07 from "../images/home/home about07.png";
import home_about08 from "../images/home/home about06.png";
// slider images
import sl1 from "../images/home/Rectangle 5.png";
import sl2 from "../images/home/events Card02.png";
import sl3 from "../images/home/events Card03.png";

function Home() {
  return (
    <div>
      <Navbar />
      <First_sec />
      <Home_about />
      <Home_Academic />
      <Home_Music_Room />
      <Home_events />
      <Footer />
    </div>
  );
}

function First_sec() {
  return (
    <div className="global-sec">
      <div className="container-fluid">
        <div className="home-video-sec">{/* */}</div>
        <div className="vid-cont-btn">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

function Home_about() {
  return (
    <div className="global-sec">
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

function Home_Academic() {
  return (
    <div className="global-sec">
      <div className="container">
        <div className="home-about-content">
          <h2>Academic Offerings</h2>
          <div className="row">
            <div className="col-8 mx-auto">
              <p>
                Embark on a journey of musical exploration with and academic
                inquiry with our diverse array of courses. From diving into the
                intracacies of south asian musical generes to exploring the
                musical landscape anywhere, our courses blend theory with
                practice to offer immersive learning expereinces. Led by
                esteemed instructors and rooted in interdeciplinary approaches,
                our courses aim to cultivate a profound understanding and
                appreciation of musical culture and historical significance.
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
        </div>
      </div>
    </div>
  );
}

function Home_Music_Room() {
  return (
    <div className="global-sec">
      <div className="container">
        <div className="home-about-content">
          <h2>Khawaja Mashooqullah Music Room</h2>
          <span className="prime-btn" style={{ marginTop: "1.5rem" }}>
            Explore
          </span>
        </div>
        <div className="home-about-images ">
          <div className="home-about-image">
            <img src={home_about06} alt="image" className="img-fluid" />
          </div>
          <div className="home-about-image">
            <img src={home_about07} alt="image" className="img-fluid" />
          </div>
          <div className="home-about-image">
            <img src={home_about08} alt="image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Home_events() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to show 3 slides
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="global-sec">
      <div className="container">
        <div className="home-about-content">
          <h2>Events</h2>
          <div className="row">
            <div className="col-8 mx-auto">
              <p>
                Take a glimpus into our annual events, ranging from soulful
                Khayal concerts to melodies of Gazal kay Rang and captivating
                folk music progrme. As a highlight, our music room orchestra
                culminates the academic year by serenading the graduating at the
                award nights, creating the moments of celeberation and
                appreciation.
              </p>
            </div>
          </div>
          <span className="prime-btn">Explore</span>
        </div>
        <div className="card-slider">
          <Slider {...settings}>
            <span className="home-event-pic"><img src={sl1} alt="image" className="img-fluid card" /></span>
            <span className="home-event-pic"><img src={sl2} alt="image" className="img-fluid card" /></span>
            <span className="home-event-pic"><img src={sl3} alt="image" className="img-fluid card" /></span>  
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
