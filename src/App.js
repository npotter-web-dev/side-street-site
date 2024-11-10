import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import ReviewsPage from "./pages/ReviewsPage";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
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
      </div>
    </Router>
  );
}

export default App;
