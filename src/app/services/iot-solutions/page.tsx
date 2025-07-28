import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import '@/app/services/iot-solutions/iot-solutions.css'

export default function IoTSolutionsPage() {
  return (
    <>
      <Header />
      <main className="service-detail-page">
        <div className="service-detail-container">
          <div className="service-detail-header">
            <Link href="/#services" className="back-link">
              ← Back to Services
            </Link>
            <h1 className="service-detail-title">IoT Solutions</h1>
            <p className="service-detail-subtitle">
              Comprehensive Internet of Things solutions that connect devices, collect data, and enable smart decision-making across various industries.
            </p>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-section">
              <h2>What We Offer</h2>
              <div className="service-features">
                <div className="feature-card">
                  <h3>Smart Device Integration</h3>
                  <p>Seamless integration of sensors, actuators, and smart devices for comprehensive IoT ecosystems.</p>
                </div>
                <div className="feature-card">
                  <h3>Data Analytics & Insights</h3>
                  <p>Advanced analytics platforms for processing IoT data and generating actionable business insights.</p>
                </div>
                <div className="feature-card">
                  <h3>Cloud Infrastructure</h3>
                  <p>Scalable cloud solutions for IoT data storage, processing, and real-time monitoring.</p>
                </div>
                <div className="feature-card">
                  <h3>Security & Privacy</h3>
                  <p>Robust security protocols and privacy protection for IoT networks and data transmission.</p>
                </div>
              </div>
            </div>

            <div className="service-detail-section">
              <h2>Our Approach</h2>
              <p>
                We design IoT solutions that create meaningful connections between devices, systems, and people. 
                Our approach focuses on creating intelligent networks that not only collect data but also 
                provide valuable insights that drive business decisions and operational efficiency.
              </p>
              <p>
                From smart cities to industrial automation, our IoT expertise enables organizations to 
                harness the power of connected technology for improved performance and innovation.
              </p>
            </div>

            <div className="service-detail-section">
              <h2>Industries We Serve</h2>
              <ul className="industry-list">
                <li>Smart Cities & Infrastructure</li>
                <li>Industrial IoT (IIoT)</li>
                <li>Healthcare & Medical Devices</li>
                <li>Agriculture & Smart Farming</li>
                <li>Energy & Utilities</li>
                <li>Transportation & Logistics</li>
              </ul>
            </div>

            <div className="service-detail-section">
              <h2>Why Choose Our IoT Solutions?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h4>Real-time Monitoring</h4>
                  <p>Live data collection and monitoring for instant decision-making</p>
                </div>
                <div className="benefit-item">
                  <h4>Scalable Architecture</h4>
                  <p>Flexible systems that grow with your business needs</p>
                </div>
                <div className="benefit-item">
                  <h4>Energy Efficiency</h4>
                  <p>Optimized power consumption and resource management</p>
                </div>
                <div className="benefit-item">
                  <h4>Predictive Maintenance</h4>
                  <p>AI-powered maintenance scheduling to prevent downtime</p>
                </div>
              </div>
            </div>

            <div className="service-detail-section">
              <h2>Get Started</h2>
              <p>
                Ready to connect your world with IoT? Contact us today to discuss your connectivity needs 
                and discover how our IoT solutions can transform your operations and create new opportunities.
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