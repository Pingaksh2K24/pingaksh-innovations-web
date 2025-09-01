'use client'

import Image from 'next/image'
import { MdAgriculture, MdPrecisionManufacturing, MdFlightTakeoff } from 'react-icons/md'

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {/* Enhanced Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            Showcasing Our <span className="orange-text">Products</span>
          </h2>
          <p className="portfolio-description">
            Explore our groundbreaking agricultural technology products that demonstrate our expertise in transforming farming through innovative robotics and AI solutions.
          </p>
        </div>

        {/* Enhanced Portfolio Grid */}
        <div className="portfolio-grid">
          {/* FasalSaathi Robo */}
          <div className="portfolio-item enhanced-portfolio">
            <div className="portfolio-image-container">
              <div className="portfolio-overlay">
                <div className="project-status">In Development</div>
              </div>
              <Image
                src="/images/spray1.png"
                alt="FasalSaathi Robo"
                width={400}
                height={300}
                className="portfolio-image"
              />
            </div>
            <div className="portfolio-content">
              <div className="project-category"><MdAgriculture /> Agriculture Tech</div>
              <h3 className="portfolio-item-title">FasalSaathi Robo</h3>
              <p className="portfolio-item-description">
                Smart agricultural spraying robot designed for precision crop protection. Features autonomous navigation, AI-powered targeting system, and eco-friendly chemical application that reduces waste while maximizing crop yield.
              </p>
              <div className="portfolio-features">
                <span className="feature-tag">AI & ML</span>
                <span className="feature-tag">IoT</span>
                <span className="feature-tag">Robotics</span>
                <span className="feature-tag">Agriculture</span>
              </div>
              <div className="project-stats">
                <div className="stat-item">
                  <span className="stat-value">40%</span>
                  <span className="stat-label">Less Chemicals</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">3x</span>
                  <span className="stat-label">Faster</span>
                </div>
              </div>
            </div>
          </div>

          {/* WeedBlaster Pro */}
          <div className="portfolio-item enhanced-portfolio">
            <div className="portfolio-image-container">
              <div className="portfolio-overlay">
                <div className="project-status">In Design</div>
              </div>
              <Image
                src="/images/spray2.png"
                alt="WeedBlaster Pro"
                width={400}
                height={300}
                className="portfolio-image"
              />
            </div>
            <div className="portfolio-content">
              <div className="project-category"><MdPrecisionManufacturing /> Precision Robotics</div>
              <h3 className="portfolio-item-title">WeedBlaster Pro</h3>
              <p className="portfolio-item-description">
                Advanced weed elimination robot equipped with computer vision and machine learning algorithms. Identifies and targets weeds with surgical precision while protecting crops, reducing herbicide usage by up to 90%.
              </p>
              <div className="portfolio-features">
                <span className="feature-tag">Robotics</span>
                <span className="feature-tag">Computer Vision</span>
                <span className="feature-tag">AI Targeting</span>
                <span className="feature-tag">Precision</span>
              </div>
              <div className="project-stats">
                <div className="stat-item">
                  <span className="stat-value">90%</span>
                  <span className="stat-label">Less Herbicide</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">95%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
              </div>
            </div>
          </div>

          {/* KrishiGarud */}
          <div className="portfolio-item enhanced-portfolio">
            <div className="portfolio-image-container">
              <div className="portfolio-overlay">
                <div className="project-status">In Design</div>
              </div>
              <Image
                src="/images/spray3.png"
                alt="KrishiGarud"
                width={400}
                height={300}
                className="portfolio-image"
              />
            </div>
            <div className="portfolio-content">
              <div className="project-category"><MdFlightTakeoff /> Drone Technology</div>
              <h3 className="portfolio-item-title">KrishiGarud</h3>
              <p className="portfolio-item-description">
                High-performance agricultural drone with GPS-guided navigation and variable-rate spraying technology. Covers large areas efficiently with real-time monitoring, weather adaptation, and precision application control.
              </p>
              <div className="portfolio-features">
                <span className="feature-tag">Drone Tech</span>
                <span className="feature-tag">Smart Navigation</span>
                <span className="feature-tag">GPS Mapping</span>
                <span className="feature-tag">Eco-Friendly</span>
              </div>
              <div className="project-stats">
                <div className="stat-item">
                  <span className="stat-value">10x</span>
                  <span className="stat-label">Faster Coverage</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">24/7</span>
                  <span className="stat-label">Operation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 