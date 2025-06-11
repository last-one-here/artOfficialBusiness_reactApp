import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // We will create this CSS file next

const HomePage = () => {
  return (
    <div className="page-content home-page">
      <section className="hero-section">
        {/* Placeholder for hero background image - to be set in CSS or inline style */}
        {/* <img src="/images/placeholder-hero.jpg" alt="Hero background placeholder" style={{ display: 'none' }} /> */}
        <h1>Transforming Spaces with Bold Art</h1>
        <p>Your Vision, Magnified. Specializing in large-scale murals, custom paintings, and unique art experiences that bring your ideas to life.</p>
        <Link to="/portfolio" className="cta-button">Explore My Murals</Link>
      </section>

      <section className="intro-section">
        <h2>Welcome to My Creative World</h2>
        <p>
          I am passionate about creating art that makes an impact. From towering murals that redefine cityscapes to intricate animal portraits and lively caricatures, 
          I thrive on pushing artistic boundaries. My goal is to inject fun and vibrancy into every project, turning ordinary spaces into extraordinary experiences. 
          Let's collaborate and make something amazing!
        </p>
      </section>

      <section className="featured-work-section">
        <h2>Featured Work</h2>
        <div className="portfolio-grid home-featured-grid">
          {/* Item 1 */}
          <div className="portfolio-item">
            <Link to="/portfolio#murals"> {/* Link to specific section if possible */}
              <img src="/images/placeholder-mural1.jpg" alt="Featured Mural 1 Placeholder" />
              <div className="portfolio-item-info">
                <h3>Large-Scale Murals</h3>
                <p>Dynamic designs for businesses and residences.</p>
              </div>
            </Link>
          </div>
          {/* Item 2 */}
          <div className="portfolio-item">
            <Link to="/portfolio#portraits">
              <img src="/images/placeholder-portrait1.jpg" alt="Featured Animal Portrait Placeholder" />
              <div className="portfolio-item-info">
                <h3>Animal Portraits</h3>
                <p>Capturing the spirit of your beloved pets.</p>
              </div>
            </Link>
          </div>
          {/* Item 3 */}
          <div className="portfolio-item">
            <Link to="/services#custom-painting">
              <img src="/images/placeholder-custom-paint1.jpg" alt="Featured Custom Painting Placeholder" />
              <div className="portfolio-item-info">
                <h3>Custom Paintings</h3>
                <p>Unique artwork for any space or occasion.</p>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/portfolio" className="cta-button view-all-cta">View All Portfolio</Link>
      </section>

      {/* Optional Testimonial Section - Uncomment and populate if needed */}
      {/*
      <section className="testimonial-section">
        <h2>What Clients Say</h2>
        <div className="testimonial-item">
          <p>"[Client Testimonial Here]" - <strong>[Client Name]</strong></p>
        </div>
      </section>
      */}

      <section className="secondary-cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss your ideas and how I can bring your artistic vision to life.</p>
        <Link to="/contact" className="cta-button">Get a Free Quote</Link>
      </section>
    </div>
  );
};

export default HomePage;

