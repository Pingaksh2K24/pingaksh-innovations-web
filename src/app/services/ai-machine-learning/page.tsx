import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import '@/app/services/ai-machine-learning/ai-machine-learning.css'

export default function AIMachineLearningPage() {
  return (
    <>
      <Header />
      <main className="service-detail-page">
        <div className="service-detail-container">
          <div className="service-detail-header">
            <Link href="/#services" className="back-link">
              ← Back to Services
            </Link>
            <h1 className="service-detail-title">AI & Machine Learning</h1>
            <p className="service-detail-subtitle">
              Advanced artificial intelligence and machine learning solutions that transform businesses through intelligent automation, predictive analytics, and cognitive computing.
            </p>
          </div>

          <div className="service-detail-content">
            <div className="service-detail-section">
              <h2>What We Offer</h2>
              <div className="service-features">
                <div className="feature-card">
                  <h3>Machine Learning Models</h3>
                  <p>Custom ML models for predictive analytics, pattern recognition, and data-driven decision making.</p>
                </div>
                <div className="feature-card">
                  <h3>Natural Language Processing</h3>
                  <p>Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.</p>
                </div>
                <div className="feature-card">
                  <h3>Computer Vision</h3>
                  <p>Image and video analysis solutions for object detection, facial recognition, and visual data processing.</p>
                </div>
                <div className="feature-card">
                  <h3>Deep Learning</h3>
                  <p>Neural network architectures for complex problem-solving and advanced AI applications.</p>
                </div>
              </div>
            </div>

            <div className="service-detail-section">
              <h2>Our Approach</h2>
              <p>
                At Pingaksh Innovations, we believe in creating AI solutions that are not just technologically advanced, 
                but also practical and scalable. Our team of experts works closely with clients to understand their unique 
                challenges and develop tailored AI solutions that drive real business value.
              </p>
              <p>
                We leverage cutting-edge technologies and frameworks to build robust, efficient, and ethical AI systems 
                that can handle complex tasks and provide actionable insights.
              </p>
            </div>

            <div className="service-detail-section">
              <h2>Industries We Serve</h2>
              <ul className="industry-list">
                <li>Healthcare & Medical Diagnostics</li>
                <li>Financial Services & Risk Management</li>
                <li>Manufacturing & Quality Control</li>
                <li>Retail & E-commerce</li>
                <li>Transportation & Logistics</li>
                <li>Education & Learning Platforms</li>
              </ul>
            </div>

            <div className="service-detail-section">
              <h2>Why Choose Our AI Solutions?</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h4>Scalable Architecture</h4>
                  <p>Built to grow with your business needs</p>
                </div>
                <div className="benefit-item">
                  <h4>Real-time Processing</h4>
                  <p>Instant insights and decision-making capabilities</p>
                </div>
                <div className="benefit-item">
                  <h4>Ethical AI</h4>
                  <p>Responsible and transparent AI development</p>
                </div>
                <div className="benefit-item">
                  <h4>Continuous Learning</h4>
                  <p>Models that improve over time with new data</p>
                </div>
              </div>
            </div>

            <div className="service-detail-section">
              <h2>Get Started</h2>
              <p>
                Ready to transform your business with AI? Contact us today to discuss your project requirements 
                and discover how our AI & Machine Learning solutions can help you achieve your goals.
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