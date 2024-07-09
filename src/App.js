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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/student-work" element={<Student_work />}></Route>
        <Route path="/event-inner" element={<Eve_Inner/>}></Route>
        <Route path="/contact-us" element={<Contact/>}></Route>
        <Route path="/academics" element={<AcademicOff/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
