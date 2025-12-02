import React from 'react';
import '../styles/hero.css';

function HeroSection({ title, subtitle, description, backgroundImage = null }) {
  return (
    <section
      className="hero-section py-5 py-md-6"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="hero-overlay"></div>
      <div className="container position-relative z-1">
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-8">
            <h1 className="hero-title display-3 fw-bold mb-3 text-white">
              {title}
            </h1>
            {subtitle && (
              <h2 className="hero-subtitle h3 mb-4 text-light">
                {subtitle}
              </h2>
            )}
            {description && (
              <p className="hero-description lead text-white mb-4">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
