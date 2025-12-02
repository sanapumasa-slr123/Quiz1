import React from 'react';
import '../styles/testimonials.css';

function TestimonialsSection({ testimonials }) {
  return (
    <section className="testimonials-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">What Our Customers Say</h2>
          <p className="lead text-muted">Real feedback from residents and businesses we serve</p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6 col-lg-4">
              <div className="testimonial-card h-100 p-4 bg-white border">
                <div className="mb-3">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text mb-3 fst-italic">
                  "{testimonial.message}"
                </p>
                <div className="testimonial-author">
                  <p className="fw-bold mb-0">{testimonial.name}</p>
                  <p className="text-muted small">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
