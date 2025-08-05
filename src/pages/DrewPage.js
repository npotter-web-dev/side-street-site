import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import DrewSwiper from "../components/DrewSwiper";

const DrewPage = () => {
  return (
    <div className="page-container">
      <div className="drew-page">
        <div className="drew-gallery">
          <DrewSwiper />
        </div>
        <div className="drew-header">
          <h1>In Loving Memory of Andrew Canepa</h1>
          <h2>Forever in Our Hearts.</h2>
        </div>
        <div className="drew-info">
          <p>
            Andrew Canepa was a beloved member of our community, known for his kindness, humor, and
            passion for life. His spirit lives on in the hearts of all who knew him.
          </p>
        </div>
        <div className="support-links">
          <a
            className=""
            href="https://eastwind.printavo.com/merch/ssc-andrew"
            target="_blank"
            rel="noopener noreferrer"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default DrewPage;
