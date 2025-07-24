import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="foot">
      <div className="faicons">
        <Link className="fai">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#ffffff", height: "25px" }}
          />
        </Link>
        <Link className="fai">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ffffff", height: "25px" }}
          />
        </Link>
        <Link className="fai">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#ffffff", height: "25px" }}
          />
        </Link>
      </div>
      <div className="footnav">
        <Link className="fol" to="/">
          Home
        </Link>
        <Link className="fol" to="/about">
          About
        </Link>
        <Link className="fol" to="/products">
          Products
        </Link>
        <Link className="fol" to="/contact">
          Contact Us
        </Link>
      </div>
      <div className="copyright">
        <h4>&copy; 2025 -<span style={{color:"red",fontSize:"15px"}}>The Spicy Meal.</span> All Rights Reserved.</h4>
      </div>
    </div>
  );
}

export default Footer;
