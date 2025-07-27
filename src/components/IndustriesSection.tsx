'use client'

import Image from 'next/image'

export default function IndustriesSection() {
  return (
    <section id="industries" className="industries-section">
      <div className="industries-container">
        {/* Header */}
        <div className="industries-header">
          <h2 className="industries-title">Industries We Serve</h2>
          <p className="industries-description">
            We deliver cutting-edge technology solutions across diverse sectors, driving innovation and digital transformation.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="industries-grid">
          {/* Education & Research */}
          <div className="industry-item">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
                               <div className="industry-content">
                     <h3 className="industry-title">Education & Research</h3>
                     <p className="industry-description">
                       Empowering educational institutions and research organizations with AI-driven learning platforms, data analytics, and innovative research tools.
                     </p>
                   </div>
          </div>

          {/* Aerospace */}
          <div className="industry-item">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17M2 12L12 17L22 12" fill="currentColor"/>
                </svg>
              </div>
            </div>
                               <div className="industry-content">
                     <h3 className="industry-title">Aerospace</h3>
                     <p className="industry-description">
                       Advancing aerospace technology with satellite systems, space exploration solutions, and cutting-edge aviation innovations.
                     </p>
                   </div>
          </div>

          {/* Farming */}
          <div className="industry-item">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
                               <div className="industry-content">
                     <h3 className="industry-title">Farming</h3>
                     <p className="industry-description">
                       Revolutionizing agriculture with smart farming solutions, precision agriculture, and autonomous agricultural robotics.
                     </p>
                   </div>
          </div>

          {/* Industrial Automation */}
          <div className="industry-item">
            <div className="industry-icon-container">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 6A6 6 0 0 0 6 12A6 6 0 0 0 12 18A6 6 0 0 0 18 12A6 6 0 0 0 12 6M12 8A4 4 0 0 1 16 12A4 4 0 0 1 12 16A4 4 0 0 1 8 12A4 4 0 0 1 12 8Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
                               <div className="industry-content">
                     <h3 className="industry-title">Industrial Automation</h3>
                     <p className="industry-description">
                       Transforming manufacturing with intelligent automation systems, IoT integration, and smart factory solutions.
                     </p>
                   </div>
          </div>
        </div>
      </div>
    </section>
  )
} 