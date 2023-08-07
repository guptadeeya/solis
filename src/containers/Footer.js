import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css"; // Import the CSS file for custom styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
//import logo from "./logo.png"; // Replace with the path to your logo image

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        {/* <img src={logo} alt="Logo" /> */}
        <h3>Website Name</h3>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      <p>Contact us at: example@example.com</p>
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  );
};

export default Footer;


