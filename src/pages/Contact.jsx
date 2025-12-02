import React, { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import { companyInfo, contactInfo } from '../data/content.js';
import '../styles/pages.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <>
      <HeroSection
        title="Get In Touch"
        subtitle="We're Here to Help"
        description="Have questions or need assistance? Contact us through any of our available channels."
      />

      {/* Contact Information */}
      <section className="contact-info-section py-5">
        <div className="container">
          <div className="row g-4 mb-5">
            {/* Main Address */}
            <div className="col-md-6 col-lg-4">
              <div className="contact-card p-4 border">
                <h5 className="fw-bold mb-3">📍 Main Office</h5>
                <p className="text-muted">
                  {companyInfo.name}<br />
                  {companyInfo.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-6 col-lg-4">
              <div className="contact-card p-4 border">
                <h5 className="fw-bold mb-3">📞 Phone</h5>
                <p className="text-muted">
                  <a href={`tel:${companyInfo.phone}`} className="text-decoration-none text-dark">
                    {companyInfo.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-6 col-lg-4">
              <div className="contact-card p-4 border">
                <h5 className="fw-bold mb-3">✉️ Email</h5>
                <p className="text-muted">
                  <a href={`mailto:${companyInfo.email}`} className="text-decoration-none text-dark">
                    {companyInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="row">
            <div className="col-md-6">
              <h4 className="fw-bold mb-4">Office Hours</h4>
              <div className="office-hours p-4 border">
                {contactInfo.officeHours.map((item, index) => (
                  <div key={index} className="mb-3 pb-3 border-bottom">
                    <p className="fw-bold mb-1">{item.day}</p>
                    <p className="text-muted mb-0">{item.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Messaging Platforms */}
            <div className="col-md-6">
              <h4 className="fw-bold mb-4">Messaging Platforms</h4>
              <div className="messaging-platforms p-4 border">
                {contactInfo.messagingPlatforms.map((platform, index) => (
                  <div key={index} className="mb-3 pb-3 border-bottom">
                    <p className="fw-bold mb-1">{platform.name}</p>
                    <p className="text-muted mb-0">{platform.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-4 text-center">Send us a Message</h2>
              
              {submitted && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>Thank You!</strong> Your message has been received. We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Placeholder */}
      <section className="map-section py-5">
        <div className="container">
          <h2 className="display-6 fw-bold mb-4 text-center">Our Location</h2>
          <div className="row">
            <div className="col-12">
              <div className="map-placeholder border" style={{ minHeight: '400px', backgroundColor: '#e9ecef' }}>
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="text-center">
                    <p className="text-muted mb-2">📍 Interactive Map</p>
                    <p className="text-muted">
                      Mabalacat City Water District - Ground Reservoir,<br />
                      Pampanga 2301
                    </p>
                    <a href="https://maps.google.com/?q=Mabalacat+City+Water+District+Ground+Reservoir+Pampanga" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-3">
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
