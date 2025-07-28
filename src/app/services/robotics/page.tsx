import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import '@/app/services/robotics/robotics.css'

export default function RoboticsPage() {
  return (
    <>
      <Header />
      <main className="service-detail-page">
        <div className="service-detail-container">
          <div className="service-detail-header">
            <Link href="/#services" className="back-link">
              ← Back to Services
            </Link>
            <h1 className="service-detail-title">Robotics</h1>
            <p className="service-detail-subtitle">
              Cutting-edge robotics solutions for industrial automation, autonomous systems, and intelligent machines that enhance productivity and safety.
            </p>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-section">
              <h2>What We Offer</h2>
              <div className="service-features">
                <div className="feature-card">
                  <h3>Industrial Automation</h3>
                  <p>Advanced robotic systems for manufacturing, assembly, and production line optimization.</p>
                </div>
                <div className="feature-card">
                  <h3>Autonomous Systems</h3>
                  <p>Self-navigating robots and drones for various applications and environments.</p>
                </div>
                <div className="feature-card">
                  <h3>Collaborative Robots</h3>
                  <p>Safe human-robot collaboration systems for enhanced workplace efficiency.</p>
                </div>
                <div className="feature-card">
                  <h3>Robotic Process Automation</h3>
                  <p>Software robots for automating repetitive tasks and business processes.</p>
                </div>
              </div>
            </div>

            <div className="service-detail-section">
              <h2>Our Approach</h2>
              <p>
                Our robotics solutions combine cutting-edge hardware with intelligent software to create 
                systems that are not only efficient but also safe and adaptable. We focus on creating 
                robots that can work alongside humans, enhancing productivity while maintaining safety standards.
              </p>
              <p>
                From industrial applications to research and development, our robotics expertise spans 
                across various domains, ensuring we can deliver solutions tailored to your specific needs.
              </p>
            </div>

            <div className="service-detail-section">
              <h2>Industries We Serve</h2>
              <ul className="industry-list">
                <li>Manufacturing & Production</li>
                <li>Healthcare & Medical Robotics</li>
                <li>Agriculture & Farming</li>
                <li>Logistics & Warehousing</li>
                <li>Construction & Infrastructure</li>
                <li>Research & Development</li>
              </ul>
            </div>

            <div className="service-detail-section">
              <h2>Why Choose Our Robotics Solutions?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h4>Safety First</h4>
                  <p>Built-in safety protocols and human-robot collaboration features</p>
                </div>
                <div className="benefit-item">
                  <h4>Scalable Systems</h4>
                  <p>Modular designs that can grow with your operational needs</p>
                </div>
                <div className="benefit-item">
                  <h4>24/7 Operation</h4>
                  <p>Robots that work continuously without fatigue or breaks</p>
                </div>
                <div className="benefit-item">
                  <h4>Precision & Accuracy</h4>
                  <p>High-precision operations with consistent quality output</p>
                </div>
              </div>
            </div>

            <div className="service-detail-section">
              <h2>Get Started</h2>
              <p>
                Ready to revolutionize your operations with robotics? Contact us today to discuss your 
                automation needs and discover how our robotics solutions can transform your business.
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="cta-button primary">
                  Contact Us
                </Link>
                <Link href="/#services" className="cta-button secondary">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 