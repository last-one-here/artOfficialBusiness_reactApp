import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MuralPortfolioPage from './pages/MuralPortfolioPage'; // Updated import
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

// Placeholder for CustomCommissionsPage - create this file if not already done
const CustomCommissionsPage = () => (
  <div className="page-content">
    <header className="page-header">
      <h1>Custom Commissions Portfolio</h1>
      <p>Explore unique, high-end custom painting projects and artistic installations.</p>
    </header>
    <div className="portfolio-grid">
      {/* Add placeholder items or map through actual commission data */}
      <div className="portfolio-item">
        <img src="/images/placeholder-custom-commission1.jpg" alt="Custom Commission Placeholder 1" />
        <div className="portfolio-item-info">
          <h3>Project Title 1</h3>
          <p>Brief description of the custom commission.</p>
        </div>
      </div>
      <div className="portfolio-item">
        <img src="/images/placeholder-custom-commission2.jpg" alt="Custom Commission Placeholder 2" />
        <div className="portfolio-item-info">
          <h3>Project Title 2</h3>
          <p>Brief description of the custom commission.</p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-content-container"> {/* Optional: A wrapper for all page content if needed for global padding/margin */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Updated route for mural portfolio */}
            <Route path="/mural-portfolio" element={<MuralPortfolioPage />} /> 
            {/* Added route for custom commissions portfolio */}
            <Route path="/custom-commissions" element={<CustomCommissionsPage />} /> 
            <Route path="/process-services" element={<ServicesPage />} /> {/* Updated path based on blueprint */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/journal" element={<JournalPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

