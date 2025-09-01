import Link from 'next/link'
import '@/app/services/space-research/space-research.css'

export default function SpaceResearchPage() {
  return (
    <>
      <main className="service-detail-page">
        <div className="service-detail-container">
          <div className="service-detail-header">
            <Link href="/#services" className="back-link">
              ← Back to Services
            </Link>
            <h1 className="service-detail-title">Space Research</h1>
            <p className="service-detail-subtitle">
              Innovative space technology research and development, including satellite systems, space exploration tools, and aerospace engineering solutions.
            </p>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-section">
              <h2>What We Offer</h2>
              <div className="service-features">
                <div className="feature-card">
                  <h3>Satellite Systems</h3>
                  <p>Design and development of advanced satellite systems for communication, navigation, and Earth observation.</p>
                </div>
                <div className="feature-card">
                  <h3>Space Exploration Tools</h3>
                  <p>Innovative instruments and technologies for planetary exploration and deep space missions.</p>
                </div>
                <div className="feature-card">
                  <h3>Aerospace Engineering</h3>
                  <p>Advanced aerospace solutions including propulsion systems, materials science, and structural design.</p>
                </div>
                <div className="feature-card">
                  <h3>Space Data Analytics</h3>
                  <p>Processing and analysis of space data for scientific research and commercial applications.</p>
                </div>
              </div>
            </div>

            <div className="service-detail-section">
              <h2>Our Approach</h2>
              <p>
                We push the boundaries of space technology through innovative research and development. 
                Our team combines cutting-edge engineering with scientific expertise to create solutions 
                that advance our understanding of space and enable new possibilities for exploration.
              </p>
              <p>
                From small satellite missions to advanced propulsion systems, we work on projects that 
                contribute to the future of space exploration and commercial space applications.
              </p>
            </div>

            <div className="service-detail-section">
              <h2>Industries We Serve</h2>
              <ul className="industry-list">
                <li>Satellite Communications</li>
                <li>Earth Observation & Remote Sensing</li>
                <li>Space Tourism & Commercial Space</li>
                <li>Scientific Research Institutions</li>
                <li>Defense & Security</li>
                <li>Space Mining & Resources</li>
              </ul>
            </div>

            <div className="service-detail-section">
              <h2>Why Choose Our Space Research?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h4>Cutting-edge Technology</h4>
                  <p>Latest advancements in space technology and engineering</p>
                </div>
                <div className="benefit-item">
                  <h4>Multi-disciplinary Expertise</h4>
                  <p>Combined knowledge from various scientific and engineering fields</p>
                </div>
                <div className="benefit-item">
                  <h4>Innovation Focus</h4>
                  <p>Pioneering solutions for next-generation space missions</p>
                </div>
                <div className="benefit-item">
                  <h4>Global Collaboration</h4>
                  <p>Partnerships with international space agencies and research institutions</p>
                </div>
              </div>
            </div>

            <div className="service-detail-section">
              <h2>Get Started</h2>
              <p>
                Ready to reach for the stars? Contact us today to discuss your space research needs 
                and discover how our expertise can help you achieve your space exploration goals.
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
    </>
  )
} 