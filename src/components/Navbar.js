import React from "react";

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="../images/home/logo.png" alt="logo" class="image-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span class="navbar-toggler-icon"></span> */}
              <i className="fas fa-stream navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto menu-navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#menu">
                    Academic Offerings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#offer">
                    Music Room
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#review">
                    Events
                  </a>
                </li>
                <li className="nav-item mt-3 mt-lg-0">
                  <a className="nav-link" href="#">
                    Students Work
                  </a>
                </li>
                <li className="nav-item mt-3 mt-lg-0">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
