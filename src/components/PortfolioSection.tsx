'use client'

import Image from 'next/image'

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">Portfolio</h2>
          <p className="portfolio-description">
            Explore our innovative projects, prototypes, and research collaborations that showcase our expertise in cutting-edge technology solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {/* FasalSaathi Robo */}
          <div className="portfolio-item">
            <div className="portfolio-image-container">
              <Image
                src="/images/spray1.png"
                alt="FasalSaathi Robo"
                width={400}
                height={300}
                className="portfolio-image"
              />
            </div>
            <div className="portfolio-content">
              <h3 className="portfolio-item-title">FasalSaathi Robo</h3>
              <p className="portfolio-item-description">
                An innovative agricultural initiative focused on automating crop protection through advanced spraying systems. It aims to improve efficiency, reduce chemical wastage, and ensure precise herbicide or pesticide application with minimal human effort. By integrating robotics and smart technology, this project enhances farm productivity while being eco-friendly and cost-effective.
              </p>
              <div className="portfolio-features">
                <span className="feature-tag">AI & ML</span>
                <span className="feature-tag">IoT</span>
                <span className="feature-tag">Drones</span>
                <span className="feature-tag">Agriculture</span>
              </div>
            </div>
          </div>

          {/* WeedBlaster Pro */}
          <div className="portfolio-item">
            <div className="portfolio-image-container">
              <Image
                src="/images/spray2.png"
                alt="WeedBlaster Pro"
                width={400}
                height={300}
                className="portfolio-image"
              />
            </div>
                          <div className="portfolio-content">
                <h3 className="portfolio-item-title">WeedBlaster Pro</h3>
                <p className="portfolio-item-description">
                  WeedBlaster Pro – A cutting-edge herbicide spraying robot designed for precision weed control in agricultural fields. It uses advanced sensors and AI-powered targeting to eliminate weeds without harming crops, reducing chemical usage and improving productivity. Built for farmers seeking efficiency, eco-friendliness, and cost savings.
                </p>
              <div className="portfolio-features">
                <span className="feature-tag">Robotics</span>
                <span className="feature-tag">Computer Vision</span>
                <span className="feature-tag">Manufacturing</span>
                <span className="feature-tag">Precision</span>
              </div>
            </div>
          </div>

          {/* KrishiGarud */}
          <div className="portfolio-item">
            <div className="portfolio-image-container">
              <Image
                src="/images/spray3.png"
                alt="KrishiGarud"
                width={400}
                height={300}
                className="portfolio-image"
              />
            </div>
                          <div className="portfolio-content">
                <h3 className="portfolio-item-title">KrishiGarud</h3>
                <p className="portfolio-item-description">
                  KrishiGarud is an advanced agricultural spraying drone designed to revolutionize modern farming. Inspired by the speed and precision of the mythical bird Garud, it ensures accurate herbicide, pesticide, or fertilizer spraying across fields. With smart navigation, reduced chemical wastage, and eco-friendly operations, KrishiGarud empowers farmers to achieve higher crop yields with minimal effort.
                </p>
              <div className="portfolio-features">
                <span className="feature-tag">Space Tech</span>
                <span className="feature-tag">Satellites</span>
                <span className="feature-tag">Research</span>
                <span className="feature-tag">Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 