import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import CopyEmail from "../utils/CopyEmail";
import social from "../data/socialMedia";
import logo from "../content/images/ss_sign3.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="site-header">
      {/* Mobile Menu Button */}
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <h3></h3> // "x" icon when mobile menu is open -- 9932 for the X icon, currently squished sandwich
        ) : (
          <h3>&#9776;</h3> // bars icon when mobile menu is closed
        )}
      </div>

      {/* Site Title */}
      <div className="header-container">
        <div className="header-contact lefter">
          <p>996 Lawrence Drive #103</p>
          <p>Newbury Park, CA</p>
        </div>
        <div className="header-logo">
          <img className="site-logo" src={logo} alt="The 6202 Band Logo" />
          <h2 className="header-subtitle">Where the Locals Eat!</h2>
        </div>

        <div className="header-contact right">
          <p>(805) 499-9323</p>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <h3>&#9886;</h3> {/* "x" icon to close the mobile menu */}
          </div>
          <ul className="navbar-options">
            <li>
              <Link to="/" className="link" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            {/* Add other menu items here */}
            <li>
              <Link to="/menu" className="link" onClick={toggleMobileMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/specials" className="link" onClick={toggleMobileMenu}>
                Specials
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="link" onClick={toggleMobileMenu}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="header-navigation">
        <ul className="navbar-options">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
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
      </nav>
    </div>
  );
};

export default Header;
