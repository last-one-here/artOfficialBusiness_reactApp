import React from 'react';
import './AboutPage.css'; // We will create this CSS file next

const AboutPage = () => {
  return (
    <div className="page-content about-page">
      <header className="page-header">
        <h1>About Me</h1>
        <p>The Artist Behind the Creations</p>
      </header>

      <section className="about-content">
        <div className="about-image-container">
          {/* User will replace this with their photo */}
          <img src="/images/placeholder-profile.jpg" alt="Artist placeholder" className="about-profile-image" />
        </div>
        <div className="about-text-container">
          <h2>Hello, I'm [Your Name Here]!</h2>
          <p>
            Ever since I could hold a crayon, I've been fascinated by the power of art to transform, inspire, and bring joy. 
            Life can be dreary, but I believe in making new stuff and having fun while doing it! That's why I love what I do.
          </p>
          <p>
            I specialize in large-scale murals – the bigger the wall, the better the challenge! My experience also extends to 
            custom business and residential paintings, heartfelt animal portraits, and I'm a trained caricature artist, always ready 
            to capture a smile. I thrive on diversity and I'm always excited to keep pushing the boundaries of what's possible with paint, 
            Posca markers, rollers, sprayers, and any medium that helps bring a vision to life.
          </p>
          <h3>My Artistic Philosophy</h3>
          <p>
            My approach is simple: be bold, be creative, and collaborate closely with my clients. I'm not afraid to see what works and to truly "send it" when it comes to design. 
            For me, art is a partnership. Your ideas and vision are the starting point, and my skill and passion are the tools to make them a tangible reality. 
            I'm hungry as a shark to take on new projects and create something unforgettable for you.
          </p>
          <h3>Let's Create Together!</h3>
          <p>
            Whether you're looking to make a statement with a massive mural, add a unique touch to your home, or capture a special memory in a portrait, 
            I'm here to help. Let's chat about your ideas!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

