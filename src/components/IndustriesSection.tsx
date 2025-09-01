'use client'

import Image from 'next/image'

export default function IndustriesSection() {
  return (
    <section id="industries" className="industries-section">
      <div className="industries-container">

        {/* Enhanced Industries Grid */}
        <div className="industries-grid">
          {/* Education & Research */}
          <div className="industry-item enhanced-industry">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <div className="icon-emoji">🎓</div>
              </div>
            </div>
            <div className="industry-content">
              <h3 className="industry-title">Education & Research</h3>
              <p className="industry-description">
                Empowering educational institutions with AI-driven learning platforms, data analytics, and innovative research tools that transform learning experiences.
              </p>
              <div className="industry-features">
                <span className="feature-tag">AI Learning</span>
                <span className="feature-tag">Data Analytics</span>
                <span className="feature-tag">Research Tools</span>
              </div>
            </div>
          </div>

          {/* Aerospace */}
          <div className="industry-item enhanced-industry">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <div className="icon-emoji">🚀</div>
              </div>
            </div>
            <div className="industry-content">
              <h3 className="industry-title">Aerospace</h3>
              <p className="industry-description">
                Advancing aerospace technology with satellite systems, space exploration solutions, and cutting-edge aviation innovations.
              </p>
              <div className="industry-features">
                <span className="feature-tag">Satellites</span>
                <span className="feature-tag">Space Tech</span>
                <span className="feature-tag">Aviation</span>
              </div>
            </div>
          </div>

          {/* Smart Agriculture */}
          <div className="industry-item enhanced-industry">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <div className="icon-emoji">🌾</div>
              </div>
            </div>
            <div className="industry-content">
              <h3 className="industry-title">Smart Agriculture</h3>
              <p className="industry-description">
                Revolutionizing agriculture with smart farming solutions, precision agriculture, and autonomous agricultural robotics for sustainable farming.
              </p>
              <div className="industry-features">
                <span className="feature-tag">Smart Farming</span>
                <span className="feature-tag">Precision Tech</span>
                <span className="feature-tag">Robotics</span>
              </div>
            </div>
          </div>

          {/* Industrial Automation */}
          <div className="industry-item enhanced-industry">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <div className="icon-emoji">🏭</div>
              </div>
            </div>
            <div className="industry-content">
              <h3 className="industry-title">Industrial Automation</h3>
              <p className="industry-description">
                Transforming manufacturing with intelligent automation systems, IoT integration, and smart factory solutions for Industry 4.0.
              </p>
              <div className="industry-features">
                <span className="feature-tag">Automation</span>
                <span className="feature-tag">IoT Integration</span>
                <span className="feature-tag">Smart Factory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 