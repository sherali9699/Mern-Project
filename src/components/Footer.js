import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <ul className="d-flex justify-content-center">
          <li>
            <a>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid ">
            <ul className="footer-content d-flex justify-content-center">
                <li><h4>music@habib.edu.pk,</h4></li>
                <li style={{margin_top: 1 + 'rem'}}><h5>Habib University | Powered by HUIT</h5></li>
            </ul>
      </div>
    </footer>
  );
}

export default Footer;
