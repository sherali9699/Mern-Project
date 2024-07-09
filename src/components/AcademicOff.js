import React, { useState } from "react";

// importing components
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tab from "./Tab";

// importing teachers
import im1 from "../images/Academic_off/profile01.png";
import im2 from "../images/Academic_off/Profile03.png";
import im3 from "../images/Academic_off/Profle04.png";

function AcademicOff() {
  return (
    <div>
      <Navbar />
      <Academic_Main />
      <Teachers />
      <Footer />
    </div>
  );
}

function Academic_Main() {
  const [activeIndex, setActiveIndex] = useState(null);
  const tabData = [
    {
      title: "Music of South Asia: Style and Structures",
      content:
        "This course will introduce students to the rudiments of South Asian music; its melodic and rhythmic bases and the various existing styles of performance. From understanding structural differences between genres such as folk, ghazal, thumri and khayal to recognizing stylistic differences between gharanas, this course will be an immersion into a musical realm that is largely unfamiliar to young listeners. With a mandatory practice component through the Khanqah Nimatollahi Music Room, audio-visual resources, and readings to provide context, the course will serve as a foundation for pursuing more advanced studies in music.",
    },
    {
      title: "Music and Mathematics",
      content:
        "This course explores the connections between music and mathematics, including the mathematical basis of musical scales, rhythms, and structures.",
    },
    {
      title: "Rythm and Rapport",
      content:
        "An in-depth study of Western classical music from the Renaissance to the 20th century, focusing on key composers and their works.",
    },
    {
      title: "Sound and Subjectivity: Listening to other",
      content:
        "This course teaches the fundamentals of jazz improvisation, including scales, chord progressions, and improvisation techniques.",
    },
    {
      title: "Hamari Meraas: History and Discourse of South Asian Music",
      content:
        "Explore the history of rock music, from its origins in the 1950s to the present day, including key artists, albums, and cultural impact.",
    },
    {
      title: "Musicking: Antropology of music",
      content:
        "Learn the basics of electronic music production, including beat making, sound design, and mixing techniques using modern software.",
    },
    {
      title: "Breathing Bansuri",
      content:
        "A survey of various folk music traditions from around the world, focusing on their cultural significance and unique musical characteristics.",
    },
    {
      title: "Gazal Gayeki: A cultural lagecy of South Asia",
      content:
        "An exploration of the history of opera, including major composers, famous operas, and the art of opera performance.",
    },
    {
      title: "Thumri ki kahani: Romance in Raag Form",
      content:
        "Learn the art of composing music for film, including the study of film scores, orchestration, and the role of music in storytelling.",
    },
    {
      title: "Khayal Gayeki: The Aesthetics and Evolution of a Vocal Form",
      content:
        "Learn the art of composing music for film, including the study of film scores, orchestration, and the role of music in storytelling.",
    },
  ];

  const toggleContent = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(null); // Close any currently open tab first
      setTimeout(() => {
        setActiveIndex(index); // Open the new tab after a delay
      }, 300); // Adjust the delay to match your CSS transition duration
    }
  };

  return (
    <div className="global-sec">
      <div className="container" style={{ marginTop: "7rem" }}>
        <div className="d-flex justify-content-center mb-5">
          <h2>Academic Offerings</h2>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            {tabData.map((tab, index) => (
              <Tab
                key={index}
                title={tab.title}
                content={tab.content}
                isVisible={activeIndex === index}
                toggleContent={() => toggleContent(index)}
              />
            ))}
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
          <h2 style={{ marginBottom: "4rem" }}>Teaching Community</h2>
        </div>
        <div className="home-about-images ">
          <div className="home-about-image">
            <img src={im1} alt="image" className="img-fluid teacher-pic" />
          </div>
          <div className="home-about-image">
            <img src={im2} alt="image" className="img-fluid teacher-pic" />
          </div>
          <div class="teacher-pic-container">
            <img
              src={im3}
              alt="Ustad Shahid Hamid"
              class="teacher-pic image-fluid"
            />
            <div class="overlay">
              <h5>Ustaad Shahid Hamid.</h5>
              <p>Visiting Associate Professor of Practice, Comparative Humanaties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicOff;
