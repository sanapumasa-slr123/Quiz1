import React from 'react';
import '../styles/footer.css';
import { companyInfo, contactInfo } from '../data/content.js';

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3">About {companyInfo.shortName}</h6>
            <p className="small text-light">{companyInfo.description}</p>
            <p className="small text-light">
              <strong>Est.</strong> {companyInfo.established}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#home" className="text-light text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light text-decoration-none">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light text-decoration-none">Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <p className="small text-light mb-2">
              <strong>Address:</strong><br />
              {companyInfo.address}
            </p>
            <p className="small text-light mb-2">
              <strong>Phone:</strong> <a href={`tel:${companyInfo.phone}`} className="text-light text-decoration-none">{companyInfo.phone}</a>
            </p>
            <p className="small text-light">
              <strong>Email:</strong> <a href={`mailto:${companyInfo.email}`} className="text-light text-decoration-none">{companyInfo.email}</a>
            </p>
          </div>

          {/* Office Hours */}
          <div className="col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3">Office Hours</h6>
            <ul className="list-unstyled small text-light">
              {contactInfo.officeHours.map((item, index) => (
                <li key={index} className="mb-2">
                  <strong>{item.day}:</strong> {item.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="bg-secondary my-4" />

        {/* Bottom Section */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="small text-light mb-0">
              © 2024 {companyInfo.name}. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="small text-light mb-0">
              Built with React 19 | Responsive Design
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
