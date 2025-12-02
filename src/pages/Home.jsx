import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import {
  heroContent,
  services,
  operationalHighlights,
  testimonials,
  companyInfo
} from '../data/content.js';
import '../styles/pages.css';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        description={heroContent.description}
      />

      {/* Services Section */}
      <FeaturesSection
        title="Our Key Services"
        subtitle="Comprehensive water solutions for your community"
        items={services}
      />

      {/* Operational Highlights */}
      <section className="highlights-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">By The Numbers</h2>
            <p className="lead text-muted">Our operational capacity and reach</p>
          </div>
          <div className="row g-4">
            {operationalHighlights.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-3">
                <div className="highlight-card text-center p-4 bg-white border">
                  <div className="metric display-4 fw-bold text-primary mb-2">
                    {item.metric}
                  </div>
                  <p className="text-muted small mb-2">{item.metricLabel}</p>
                  <h6 className="fw-bold mb-2">{item.title}</h6>
                  <p className="small text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Call to Action */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Experience Better Water Service?</h2>
          <p className="lead mb-4">
            Join thousands of satisfied customers across Mabalacat City who trust {companyInfo.shortName}
          </p>
          <Link to="/contact" className="btn btn-light btn-lg">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
