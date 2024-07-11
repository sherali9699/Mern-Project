import { useNavigate, Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

// for slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//for video
import videoThumbnail from "../videos/video-thumbnail.png"; // Poster image
import sampleVideo from "../videos/music-video.mp4"; // Video file

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
//for academic off
import pic1 from '../images/Academic_off/m2.png';
import pic2 from '../images/Academic_off/m1.png';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      if (isMuted) {
        videoRef.current.muted = true;
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handleVideoEnd = () => {
      console.log("Video ended");
      setIsPlaying(true);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      console.log("Video paused and currentTime reset");
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  useEffect(() => {
    console.log("isPlaying:", isPlaying);
    console.log("isMuted:", isMuted);
  }, [isPlaying, isMuted]);

  return (
    <div className="global-sec">
      <div className="video-container">
        <video
          ref={videoRef}
          src={sampleVideo}
          poster={videoThumbnail}
          controls={false}
          muted={isMuted}
        />
        <div className="controls">
          <button onClick={togglePlayPause}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
          <button onClick={toggleMute}>
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Home_about() {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/about");
  };

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
          <Link className="linker" to="/about">
            <span className="prime-btn">Explore</span>
          </Link>
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
          <Link className="linker" to="/academics">
            <span className="prime-btn">Explore</span>
          </Link>
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

function Home_Music_Room() {
  return (
    <div className="global-sec">
      <div className="container">
        <div className="home-about-content">
          <h2>Khawaja Mashooqullah Music Room</h2>
          <Link className="linker" to='/music-room'>
          <span className="prime-btn" style={{ marginTop: "1.5rem" }}>
            Explore
          </span>
          </Link>
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
  const navigate = useNavigate();

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
          <Link className="linker" to="/events">
            <span className="prime-btn">Explore</span>
          </Link>
        </div>
        <div className="card-slider">
          <Slider {...settings}>
            <span className="home-event-pic">
              <div class="parent-teacher-pic">
                <div class="child-teacher-pic">
                  <div class="ustaad-pic">
                    <img
                      src={sl1}
                      alt="Ustaad Shahid Hamid"
                      class="image-fluid"
                    />
                  </div>
                  <div class="overlay">
                    <h5>Ustaad Shahid Hamid.</h5>
                    <p>
                      Visiting Associate Professor of Practice, Comparative
                      Humanities
                    </p>
                  </div>
                </div>
              </div>
            </span>
            <span className="home-event-pic">
              <div class="parent-teacher-pic">
                <div class="child-teacher-pic">
                  <div class="ustaad-pic">
                    <img
                      src={sl2}
                      alt="Ustaad Shahid Hamid"
                      class="image-fluid"
                    />
                  </div>
                  <div class="overlay">
                    <h5>Ustaad Shahid Hamid.</h5>
                    <p>
                      Visiting Associate Professor of Practice, Comparative
                      Humanities
                    </p>
                  </div>
                </div>
              </div>
            </span>
            <span className="home-event-pic">
              <div class="parent-teacher-pic">
                <div class="child-teacher-pic">
                  <div class="ustaad-pic">
                    <img
                      src={sl3}
                      alt="Ustaad Shahid Hamid"
                      class="image-fluid"
                    />
                  </div>
                  <div class="overlay">
                    <h5>Ustaad Shahid Hamid.</h5>
                    <p>
                      Visiting Associate Professor of Practice, Comparative
                      Humanities
                    </p>
                  </div>
                </div>
              </div>
            </span>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
