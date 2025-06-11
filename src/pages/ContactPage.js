import React, { useState } from 'react';
import './ContactPage.css'; // We will create this CSS file next

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check for URL query parameters to prefill subject
  React.useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const subjectFromQuery = queryParams.get('subject');
    if (subjectFromQuery) {
      setFormData(prevData => ({ ...prevData, subject: subjectFromQuery }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (can be expanded)
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    // Here you would typically send the form data to a backend or email service.
    // For this template, we'll just simulate a submission.
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form after a short delay (optional)
    setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="page-content contact-page">
      <header className="page-header">
        <h1>Get In Touch</h1>
        <p>I'm excited to hear about your project ideas or answer any questions you may have. Let's create something amazing together!</p>
      </header>

      <div className="contact-container">
        <div className="contact-form-section">
          {isSubmitted ? (
            <div className="submission-success">
              <h3>Thank You!</h3>
              <p>Your message has been received. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" required></textarea>
              </div>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          )}
        </div>

        <div className="contact-info-section">
          <h3>Contact Information</h3>
          <p>Feel free to reach out directly if you prefer:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a> (Replace with your actual email)</li>
            <li><strong>Phone:</strong> (555) 123-4567 (Optional - Replace or remove)</li>
          </ul>
          <p>I typically respond to inquiries within 24-48 hours.</p>
          
          {/* Optional: Social Media Links */}
          {/*
          <h3>Follow My Work</h3>
          <div className="social-links-contact">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

