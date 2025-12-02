import React from 'react';
import '../styles/features.css';

function FeaturesSection({ title, items, subtitle = null }) {
  return (
    <section className="features-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">{title}</h2>
          {subtitle && <p className="lead text-muted">{subtitle}</p>}
        </div>
        <div className="row g-4">
          {items.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-3">
              <div className="feature-card h-100 p-4 border">
                <div className="feature-icon mb-3" style={{ fontSize: '2.5rem' }}>
                  {item.icon}
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted small">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
