import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import CopyEmail from "../utils/CopyEmail";
import social from "../data/socialMedia";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="site-footer">
        <h1>Side Street Cafe</h1>
        <div className="footer-top">
          <div className="footer-column col1">
            <p>996 Lawrence Drive #103</p>
            <p>Newbury Park, CA</p>
            <p>(805) 499-9323</p>
          </div>
          <div className="footer-column col2">
            <ul className="footer-navigation">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              {/* Add other menu items here */}
              <li>
                <Link to="/menu" className="link">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/specials" className="link">
                  Specials
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="link">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column col3">
            <ul className="social-buttons">
              <li>
                <a href={social.yelp} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-yelp" className="social-icons yelp" />
                </a>
              </li>
              <li>
                <a href={social.google} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-google" className="social-icons google" />
                </a>
              </li>
              <li>
                <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-facebook-f" className="social-icons facebook" />
                </a>
              </li>
              <li>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-instagram" className="social-icons instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <label className="copyright">
          © 2025 Side Street Cafe, Newbury Park. All rights reserved. Website design by Nathan
          Potter.
        </label>
      </div>
    </div>
  );
};
export default Footer;
