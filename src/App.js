import "./App.css";
import "./Responsive-App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Home from "./components/Home";
import About from "./components/About";
import Events from './components/Events';
import Student_work from "./components/Student_work";
import Eve_Inner from "./components/Events_Inner";
import Contact from "./components/Contact";
import AcademicOff from "./components/AcademicOff";
import Room from "./components/MusicRoom";
import Khurshid from "./components/khurshid";
import Intizaar from "./components/Intiizaar";
import Islam from "./components/Islamuddin";
import Sajjid from "./components/Sajjid";
import Shehroz from "./components/Shehroz";
import Zohaib from "./components/Zohaib";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/students-work" element={<Student_work />}></Route>
        <Route path="/event-inner" element={<Eve_Inner/>}></Route>
        <Route path="/music-room" element={<Room/>}></Route>
        <Route path="/contact-us" element={<Contact/>}></Route>
        <Route path="/academics" element={<AcademicOff/>}></Route>
        <Route path="/khurshid-hussain" element={<Khurshid/>}></Route>
        <Route path="/intizaar-hussain" element={<Intizaar/>}></Route>
        <Route path="/islamuddin-meer" element={<Islam/>}></Route>
        <Route path="/zohaib-hussain" element={<Zohaib/>}></Route>
        <Route path="/shehroz-hussain" element={<Shehroz/>}></Route>
        <Route path="/sajid-hussain" element={<Sajjid/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
