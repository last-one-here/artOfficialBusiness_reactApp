import React from 'react';
import './Footer.css'; // We will create this CSS file next

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} [Your Name/Brand Here]. All Rights Reserved.</p>
      <p>Website by [Your Name/Brand Here] - Powered by Your Creativity!</p>
      {/* Optional: Add social media links here */}
      {/* <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div> */}
    </footer>
  );
};

export default Footer;

