import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import ReviewsPage from "./pages/ReviewsPage";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

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

  const spinnerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Center the spinner vertically and horizontally
    backgroundColor: "#f3f3f3", // Optional: background color while loading
  };

  return (
    <Router>
      <div className="container">
        {loading ? (
          // Display spinner while loading
          <div className="spinner-container" style={spinnerContainerStyle}>
            <ClipLoader size={50} color={"#36d7b7"} loading={loading} />
          </div>
        ) : (
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
            </Routes>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
