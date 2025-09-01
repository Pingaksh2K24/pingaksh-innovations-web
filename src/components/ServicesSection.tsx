'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">
            Transforming Ideas into <span className="orange-text">Reality</span>
          </h2>
          <p className="section-description">
            We deliver cutting-edge technology solutions across AI, robotics, IoT, and space exploration, pushing the boundaries of innovation to create tomorrow&apos;s solutions today.
          </p>
        </div>
        
        <div className="services-grid">
          {/* AI & Machine Learning Card */}
          <div className="service-card enhanced-service">
            <div className="service-image-container">
              <Image
                src="/images/AI.png"
                alt="AI & Machine Learning"
                width={200}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">AI & Machine Learning</h3>
              <p className="service-description">
                Advanced artificial intelligence and machine learning solutions that transform businesses through intelligent automation and predictive analytics.
              </p>
              <div className="service-features">
                <span className="feature-tag">Neural Networks</span>
                <span className="feature-tag">Deep Learning</span>
                <span className="feature-tag">Computer Vision</span>
              </div>
              <Link href="/services/ai-machine-learning" className="enhanced-btn">
                Explore AI Solutions
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Robotics Card */}
          <div className="service-card enhanced-service">
            <div className="service-image-container">
              <Image
                src="/images/robotics.png"
                alt="Robotics"
                width={300}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">Robotics</h3>
              <p className="service-description">
                Cutting-edge robotics solutions for industrial automation, autonomous systems, and intelligent machines that enhance productivity and safety.
              </p>
              <div className="service-features">
                <span className="feature-tag">Automation</span>
                <span className="feature-tag">Autonomous Systems</span>
                <span className="feature-tag">Industrial Robots</span>
              </div>
              <Link href="/services/robotics" className="enhanced-btn">
                Discover Robotics
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* IoT Solutions Card */}
          <div className="service-card enhanced-service">
            <div className="service-image-container">
              <Image
                src="/images/IoT.png"
                alt="IoT Solutions"
                width={300}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">IoT Solutions</h3>
              <p className="service-description">
                Comprehensive Internet of Things solutions that connect devices, collect data, and enable smart decision-making across various industries.
              </p>
              <div className="service-features">
                <span className="feature-tag">Smart Devices</span>
                <span className="feature-tag">Data Analytics</span>
                <span className="feature-tag">Cloud Integration</span>
              </div>
              <Link href="/services/iot-solutions" className="enhanced-btn">
                Explore IoT
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Space Research Card */}
          <div className="service-card enhanced-service">
            <div className="service-image-container">
              <Image
                src="/images/space1.png"
                alt="Space Research"
                width={300}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">Space Research</h3>
              <p className="service-description">
                Innovative space technology research and development, including satellite systems, space exploration tools, and aerospace engineering solutions.
              </p>
              <div className="service-features">
                <span className="feature-tag">Satellites</span>
                <span className="feature-tag">Space Tech</span>
                <span className="feature-tag">Aerospace</span>
              </div>
              <Link href="/services/space-research" className="enhanced-btn">
                Launch Into Space
                <span className="btn-arrow">🚀</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 