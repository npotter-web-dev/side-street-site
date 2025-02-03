import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import React, { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundPosition = `50% ${-(scrollPosition / 2)}px`;
      document.querySelector(".contact-container").style.backgroundPosition = backgroundPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-row">
        <div className="contact-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13200.752931409592!2d-118.929348!3d34.1926667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e83097bf7e226f%3A0x74efb6209b14f06a!2sSide%20Street%20Cafe!5e0!3m2!1sen!2sus!4v1718419932583!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-right">
          <h1>We'd Love to See You Soon!</h1>
          <p>996 Lawrence Drive #103 | Newbury Park, CA 91320</p>
          <p>Monday - Friday : 6:30am - 2:00pm</p>
          <p>Saturday & Sunday : 7:00am - 2:00pm</p>
          <p>SideStreetCafe2002@gmail.com</p>
          <p>(805) 499-9323</p>
          <ul className="social-buttons">
            <li>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-facebook-f" className="social-icons facebook" />
              </a>
            </li>
            <li>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-youtube" className="social-icons youtube" />
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
    </div>
  );
};

export default ContactPage;
