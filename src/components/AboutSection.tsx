'use client'

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Heading and Description */}
        <div className="about-header">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            We are a technology company at the forefront of AI, robotics, machine learning, IoT, and space exploration, committed to pushing the boundaries.
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">
          {/* Brief Intro */}
          <div className="about-section-block">
            <h3 className="about-subtitle">Brief Intro of Pingaksh Innovation</h3>
            <p className="about-text">
              Pingaksh Innovation is a cutting-edge technology company founded with a vision to revolutionize the digital landscape through innovative solutions. We specialize in artificial intelligence, robotics, machine learning, IoT, and space exploration technologies, creating solutions that bridge the gap between imagination and reality.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="about-section-block">
            <h3 className="about-subtitle">Mission & Vision</h3>
            <div className="mission-vision-grid">
              <div className="mission-card">
                <h4 className="card-title">Our Mission</h4>
                <p className="card-text">
                  To develop and deploy cutting-edge technologies that solve real-world challenges, enhance human capabilities, and create sustainable solutions for the future. We strive to make advanced technology accessible and beneficial for all.
                </p>
              </div>
              <div className="vision-card">
                <h4 className="card-title">Our Vision</h4>
                <p className="card-text">
                  To be the global leader in innovative technology solutions, pioneering breakthroughs in AI, robotics, and space exploration that transform industries and improve lives worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Our Edge in Innovation */}
          <div className="about-section-block">
            <h3 className="about-subtitle">Our Edge in Innovation</h3>
            <div className="different-points">
              <div className="point-item">
                <h4 className="point-title">Innovation-Driven</h4>
                <p className="point-text">
                  We don&apos;t just follow trends; we create them. Our team of experts constantly pushes the boundaries of what&apos;s possible, developing breakthrough technologies that set new industry standards.
                </p>
              </div>
              <div className="point-item">
                <h4 className="point-title">Futuristic Approach</h4>
                <p className="point-text">
                  We think decades ahead, designing solutions that anticipate future needs and challenges. Our forward-thinking approach ensures our technologies remain relevant and impactful for years to come.
                </p>
              </div>
              <div className="point-item">
                <h4 className="point-title">Real-World Impact</h4>
                <p className="point-text">
                  Every innovation we create is designed to solve real problems and make a tangible difference in people&apos;s lives. We focus on practical applications that deliver measurable results and positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 