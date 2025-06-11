import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css'; // Ensure this CSS file is updated or created

const ServicesPage = () => {
  const services = [
    {
      id: 'large-scale-murals',
      title: 'Large-Scale Murals',
      description: 'Transform your business or residential space with breathtaking, large-scale murals. I specialize in designs that make a statement, whether it’s an expansive exterior wall or a feature interior piece. My process involves in-depth consultation, collaborative design (exploring concepts from foundational to highly complex, tailored to your vision and space), and meticulous execution using premium, durable materials, professional-grade paints, sprayers, and rollers.',
      imagePlaceholder: '/images/placeholder-service-mural.jpg',
      ctaText: 'Schedule a Mural Consultation',
      ctaLink: '/contact?subject=Mural%20Consultation%20Inquiry',
    },
    {
      id: 'unique-custom-paintings',
      title: 'Unique Custom Paintings & Art Installations',
      description: 'Beyond traditional murals, I offer bespoke custom painting services for significant artistic statements. This includes large-format canvas work, unique artistic treatments for unconventional surfaces (such as statement garage doors or feature architectural elements), and multi-panel installations. Each piece is a unique commission, designed to integrate seamlessly and elevate your environment.',
      imagePlaceholder: '/images/placeholder-service-custom-paint.jpg',
      ctaText: 'Discuss Your Custom Art Project',
      ctaLink: '/contact?subject=Custom%20Painting%20Project%20Inquiry',
    },
    // {
    //   id: 'other-high-end-commissions',
    //   title: 'Specialized Artistic Commissions',
    //   description: 'For unique, high-value artistic challenges that demand exceptional creativity and skill, I offer specialized commission services. If you have a visionary project that requires a dedicated artistic partner to bring it to fruition, let’s explore the possibilities. (Subtly hints at broader capabilities without diluting the main focus on murals and large paintings).',
    //   imagePlaceholder: '/images/placeholder-service-other.jpg',
    //   ctaText: 'Inquire About a Special Commission',
    //   ctaLink: '/contact?subject=Special%20Artistic%20Commission%20Inquiry',
    // },
  ];

  return (
    <div className="page-content services-page">
      <header className="page-header">
        <h1>Our Process & Signature Services</h1>
        <p>Dedicated to creating monumental art through a collaborative journey, focusing on large-scale murals and unique, high-end custom painting commissions.</p>
      </header>

      <div className="services-list">
        {services.map(service => (
          <section key={service.id} id={service.id} className="service-item">
            <div className="service-image-container">
              <img src={service.imagePlaceholder} alt={`${service.title} placeholder`} className="service-image" />
            </div>
            <div className="service-details">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.ctaLink} className="cta-button">{service.ctaText}</Link>
            </div>
          </section>
        ))}
      </div>

      <section className="process-overview-section">
        <h2>The Journey to Your Masterpiece</h2>
        <div className="process-steps">
          <div className="process-step">
            <h4>1. Discovery & Vision</h4>
            <p>We begin with an in-depth consultation to understand your vision, objectives, space, and desired impact. This collaborative session is key to aligning on the artistic direction.</p>
          </div>
          <div className="process-step">
            <h4>2. Concept & Design Development</h4>
            <p>Leveraging insights from our discovery phase, I develop initial concepts and digital mockups. We refine these together, ensuring the design perfectly captures your vision before any paint touches the surface.</p>
          </div>
          <div className="process-step">
            <h4>3. Meticulous Execution</h4>
            <p>With the design approved, I meticulously bring the artwork to life using premium materials and techniques, ensuring longevity and a stunning finish. For murals, this involves careful site preparation and execution.</p>
          </div>
          <div className="process-step">
            <h4>4. Unveiling & Impact</h4>
            <p>The final piece is unveiled. My goal is to not just meet, but exceed your expectations, delivering art that transforms your space and creates a lasting impression.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;

