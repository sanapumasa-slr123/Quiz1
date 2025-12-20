import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import { aboutContent, companyInfo } from '../data/content.js';
import { getTeamMembers } from '../services/api.js';
import '../styles/pages.css';

function About() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const response = await getTeamMembers();
        // Handle both paginated and direct array responses
        const data = response.data.results || response.data;
        setTeamMembers(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching team members:', err);
        setError('Failed to load team members');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);
  return (
    <>
      <HeroSection
        title="About Mabalacat City Water District"
        subtitle="Our Mission, Vision, and Commitment to Excellence"
      />

      {/* Background Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-4">Our Story</h2>
              <p className="lead mb-3">{aboutContent.background}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose */}
      <section className="mvp-section py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Purpose */}
            <div className="col-md-6 col-lg-4">
              <div className="mvp-card h-100 p-4 bg-white border">
                <h4 className="fw-bold mb-3">🎯 Purpose</h4>
                <p className="text-muted">{aboutContent.purpose}</p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-md-6 col-lg-4">
              <div className="mvp-card h-100 p-4 bg-white border">
                <h4 className="fw-bold mb-3">🌱 Mission</h4>
                <p className="text-muted">{aboutContent.mission}</p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-md-6 col-lg-4">
              <div className="mvp-card h-100 p-4 bg-white border">
                <h4 className="fw-bold mb-3">🌄 Vision</h4>
                <p className="text-muted">{aboutContent.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section py-5">
        <div className="container">
          <h2 className="display-6 fw-bold mb-5 text-center">Our Core Values</h2>
          <div className="row g-4">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="value-card p-4 border">
                  <h5 className="fw-bold mb-3">⭐ {value.title}</h5>
                  <p className="text-muted">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team-section py-5 bg-light">
        <div className="container">
          <h2 className="display-6 fw-bold mb-5 text-center">Leadership Team</h2>
          {loading && (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Loading team members...</p>
            </div>
          )}
          {error && (
            <div className="alert alert-warning" role="alert">
              {error}
            </div>
          )}
          {!loading && !error && (
            <div className="row g-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-md-6 col-lg-3">
                  <div className="team-card text-center p-4 bg-white border">
                    <img
                      src={member.image_url}
                      alt={member.name}
                      className="img-fluid mb-3 team-image"
                      style={{ 
                        width: '100px', 
                        height: '100px', 
                        objectFit: 'cover', 
                        borderRadius: '8px',
                        backgroundColor: '#f8f9fa'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="team-image-fallback" 
                      style={{ 
                        width: '100px', 
                        height: '100px', 
                        margin: '0 auto', 
                        backgroundColor: '#0066cc', 
                        color: 'white', 
                        display: 'none', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: '24px', 
                        fontWeight: 'bold', 
                        marginBottom: '1rem',
                        borderRadius: '8px'
                      }}
                    >
                      {member.name.split(' ').map(word => word[0]).join('')}
                    </div>
                    <h6 className="fw-bold mb-2">{member.name}</h6>
                    <p className="text-muted small">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default About;
