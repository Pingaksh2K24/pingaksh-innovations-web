'use client'

import Image from 'next/image'

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">About Pingaksh Innovations


        {/* Enhanced Portfolio Grid */}
        <div className="portfolio-grid">
          {/* FasalSaathi Robo */}
          <div className="portfolio-item enhanced-portfolio">
            <div className="portfolio-image-container">
              <div className="portfolio-overlay">
                <div className="project-status">Active Project</div>
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
              <div className="project-category">🌾 Agriculture Tech</div>
              <h3 className="portfolio-item-title">FasalSaathi Robo</h3>
              <p className="portfolio-item-description">
                Revolutionary agricultural spraying robot that automates crop protection with precision targeting, reducing chemical waste by 40% while increasing efficiency.
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
                <div className="project-status">In Development</div>
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
              <div className="project-category">🤖 Precision Robotics</div>
              <h3 className="portfolio-item-title">WeedBlaster Pro</h3>
              <p className="portfolio-item-description">
                AI-powered precision weed control robot with advanced computer vision that eliminates weeds without harming crops, revolutionizing sustainable farming.
              </p>
              <div className="portfolio-features">
                <span className="feature-tag">Robotics</span>
                <span className="feature-tag">Computer Vision</span>
                <span className="feature-tag">AI Targeting</span>
                <span className="feature-tag">Precision</span>
              </div>
              <div className="project-stats">
                <div className="stat-item">
                  <span className="stat-value">99%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">60%</span>
                  <span className="stat-label">Cost Savings</span>
                </div>
              </div>
            </div>
          </div>

          {/* KrishiGarud */}
          <div className="portfolio-item enhanced-portfolio">
            <div className="portfolio-image-container">
              <div className="portfolio-overlay">
                <div className="project-status">Prototype Ready</div>
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
              <div className="project-category">🚁 Drone Technology</div>
              <h3 className="portfolio-item-title">KrishiGarud</h3>
              <p className="portfolio-item-description">
                Advanced agricultural drone with smart navigation and precision spraying capabilities, inspired by the mythical Garud for speed and accuracy in modern farming.
              </p>
              <div className="portfolio-features">
                <span className="feature-tag">Drone Tech</span>
                <span className="feature-tag">Smart Navigation</span>
                <span className="feature-tag">GPS Mapping</span>
                <span className="feature-tag">Eco-Friendly</span>
              </div>
              <div className="project-stats">
                <div className="stat-item">
                  <span className="stat-value">5x</span>
                  <span className="stat-label">Coverage</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">80%</span>
                  <span className="stat-label">Time Saved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 