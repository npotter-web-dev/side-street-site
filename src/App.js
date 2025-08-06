import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import SpecialsPage from "./pages/SpecialsPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import DrewPage from "./pages/DrewPage";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // Check if app is loading for the Loading Spinner
  const [loading, setLoading] = useState(true);

  // Simulate data loading with useEffect
  useEffect(() => {
    // Simulate an API call or resource loading
    setTimeout(() => {
      setLoading(false); // Once the data is loaded, set loading to false
    }, 3000); // Simulate a 3-second load time (you can adjust the time)
  }, []);

  const sayings = [
    "Just flipping your pancakes...",
    "Gathering the ingredients...",
    "Brewing your coffee...",
    "Whipping up a fresh batter...",
    "Whisking up something special...",
    "Making sure everything is sunny-side up...",
  ];

  // Randomly select a saying
  const loadingMessage = sayings[Math.floor(Math.random() * sayings.length)];

  return (
    <Router>
      <div className="container">
        {loading ? (
          // Display spinner while loading
          <div className="spinner-container">
            <FadeLoader size={50} color={"#36d7b7"} loading={loading} />
            <p className="loading-message">{loadingMessage}</p>
          </div>
        ) : (
          <div className="app">
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/specials" element={<SpecialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/drew" element={<DrewPage />} />
            </Routes>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
