'use client'

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Enhanced Header */}
        <div className="about-header">
          <h2 className="about-title">
            Pioneering the Future of <span className="orange-text">Technology</span>
          </h2>
          <p className="about-description">
            We are a technology company at the forefront of AI, robotics, machine learning, IoT, and space exploration, committed to pushing the boundaries of innovation and creating solutions that transform industries.
          </p>
        </div>

        {/* Enhanced About Content */}
        <div className="about-content">
          {/* Stats Section */}
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Core Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>

          {/* Mission & Vision Enhanced */}
          <div className="about-section-block">
            <h3 className="about-subtitle">
              <span className="subtitle-icon">🎯</span>
              Mission & Vision
            </h3>
            <div className="mission-vision-grid">
              <div className="mission-card enhanced-card">
                <div className="card-icon">🚀</div>
                <h4 className="card-title">Our Mission</h4>
                <p className="card-text">
                  To develop and deploy cutting-edge technologies that solve real-world challenges, enhance human capabilities, and create sustainable solutions for the future.
                </p>
              </div>
              <div className="vision-card enhanced-card">
                <div className="card-icon">🌟</div>
                <h4 className="card-title">Our Vision</h4>
                <p className="card-text">
                  To be the global leader in innovative technology solutions, pioneering breakthroughs in AI, robotics, and space exploration that transform industries worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Innovation Points */}
          <div className="about-section-block">
            <h3 className="about-subtitle">
              <span className="subtitle-icon">⚡</span>
              What Makes Us Different
            </h3>
            <div className="different-points">
              <div className="point-item enhanced-point">
                <div className="point-icon">💡</div>
                <h4 className="point-title">Innovation-Driven</h4>
                <p className="point-text">
                  We don&apos;t just follow trends; we create them. Our team constantly pushes boundaries, developing breakthrough technologies that set new industry standards.
                </p>
              </div>
              <div className="point-item enhanced-point">
                <div className="point-icon">🔮</div>
                <h4 className="point-title">Futuristic Approach</h4>
                <p className="point-text">
                  We think decades ahead, designing solutions that anticipate future needs. Our forward-thinking approach ensures lasting relevance and impact.
                </p>
              </div>
              <div className="point-item enhanced-point">
                <div className="point-icon">🌍</div>
                <h4 className="point-title">Real-World Impact</h4>
                <p className="point-text">
                  Every innovation solves real problems and makes tangible differences. We focus on practical applications that deliver measurable results.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
} 