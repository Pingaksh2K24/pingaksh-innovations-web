'use client'

import { MdSchool, MdRocket, MdAgriculture, MdPrecisionManufacturing } from 'react-icons/md'

export default function IndustriesSection() {
  return (
    <section id="industries" className="industries-section">
      <div className="industries-container">
        
        {/* Industries Header */}
        <div className="industries-header">
          <h2 className="industries-title">Industries We <span className="orange-text">Serve</span></h2>
          <p className="industries-description">
            Delivering cutting-edge technology solutions across diverse industries, 
            empowering businesses to achieve digital transformation and operational excellence.
          </p>
        </div>

        {/* Enhanced Industries Grid */}
        <div className="industries-grid">
          {/* Education & Research */}
          <div className="industry-item enhanced-industry">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <MdSchool className="industry-react-icon" />
              </div>
            </div>
            <div className="industry-content">
              <h3 className="industry-title">Education & Research</h3>
              <p className="industry-description">
                Empowering educational institutions with AI-driven learning platforms, advanced data analytics, virtual laboratories, and innovative research tools that transform learning experiences and accelerate academic discoveries.
              </p>
              <div className="industry-features">
                <span className="feature-tag">AI Learning Platforms</span>
                <span className="feature-tag">Research Analytics</span>
                <span className="feature-tag">Virtual Labs</span>
                <span className="feature-tag">Student Management</span>
              </div>
            </div>
          </div>

          {/* Aerospace */}
          <div className="industry-item enhanced-industry">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <MdRocket className="industry-react-icon" />
              </div>
            </div>
            <div className="industry-content">
              <h3 className="industry-title">Aerospace & Defense</h3>
              <p className="industry-description">
                Advancing aerospace technology with next-generation satellite systems, space exploration solutions, defense applications, and cutting-edge aviation innovations for the future of flight.
              </p>
              <div className="industry-features">
                <span className="feature-tag">Satellite Systems</span>
                <span className="feature-tag">Space Exploration</span>
                <span className="feature-tag">Defense Tech</span>
                <span className="feature-tag">Aviation Innovation</span>
              </div>
            </div>
          </div>

          {/* Smart Agriculture */}
          <div className="industry-item enhanced-industry">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <MdAgriculture className="industry-react-icon" />
              </div>
            </div>
            <div className="industry-content">
              <h3 className="industry-title">Smart Agriculture</h3>
              <p className="industry-description">
                Revolutionizing agriculture with AI-powered smart farming solutions, precision agriculture technologies, autonomous agricultural robotics, and sustainable farming practices for maximum yield optimization.
              </p>
              <div className="industry-features">
                <span className="feature-tag">Precision Farming</span>
                <span className="feature-tag">Crop Monitoring</span>
                <span className="feature-tag">Agricultural Drones</span>
                <span className="feature-tag">Soil Analysis</span>
              </div>
            </div>
          </div>

          {/* Industrial Automation */}
          <div className="industry-item enhanced-industry">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <MdPrecisionManufacturing className="industry-react-icon" />
              </div>
            </div>
            <div className="industry-content">
              <h3 className="industry-title">Industrial Automation</h3>
              <p className="industry-description">
                Transforming manufacturing with intelligent automation systems, advanced IoT integration, predictive maintenance, and comprehensive smart factory solutions for Industry 4.0 excellence.
              </p>
              <div className="industry-features">
                <span className="feature-tag">Smart Manufacturing</span>
                <span className="feature-tag">Predictive Maintenance</span>
                <span className="feature-tag">Quality Control</span>
                <span className="feature-tag">Process Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 