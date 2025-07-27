'use client'

import '../team.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Team() {
  return (
    <div className="team-page">
      <Header />
      
      <main className="team-main">
        <div className="team-container">
          {/* Page Header */}
          <div className="team-header">
            <h1 className="team-title">Our Team</h1>
            <div className="team-divider"></div>
            <p className="team-subtitle">
              Meet the passionate innovators behind Pingaksh Innovations. Our team combines expertise in AI, robotics, and cutting-edge technology to drive innovation forward.
            </p>
          </div>
          
          {/* Team Members */}
          <div className="team-members">
            <div className="team-member">
              <div className="member-image">
                <div className="member-avatar">PS</div>
              </div>
              <div className="member-info">
                <h2 className="member-name">Prasad Sapkal</h2>
                <p className="member-role">Founder & Lead Innovator</p>
                <p className="member-description">
                  Prasad is the visionary founder of Pingaksh Innovations, bringing over 8 years of experience in AI and robotics. 
                  With a deep passion for cutting-edge technology, he leads our research initiatives in machine learning and space exploration. 
                  His expertise spans from developing intelligent systems to creating innovative solutions that bridge the gap between 
                  theoretical research and practical applications.
                </p>
                <div className="member-expertise">
                  <span className="expertise-tag">Artificial Intelligence</span>
                  <span className="expertise-tag">Robotics</span>
                  <span className="expertise-tag">Machine Learning</span>
                  <span className="expertise-tag">Space Research</span>
                </div>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <div className="member-avatar">AU</div>
              </div>
              <div className="member-info">
                <h2 className="member-name">Anil Umarkar</h2>
                <p className="member-role">Technical Director & IoT Specialist</p>
                <p className="member-description">
                  Anil is our technical powerhouse, specializing in IoT systems and digital transformation. 
                  With extensive experience in developing connected solutions, he drives our IoT initiatives 
                  and ensures seamless integration of smart technologies. His innovative approach to problem-solving 
                  and deep understanding of emerging technologies makes him instrumental in delivering cutting-edge solutions.
                </p>
                <div className="member-expertise">
                  <span className="expertise-tag">IoT Systems</span>
                  <span className="expertise-tag">Digital Transformation</span>
                  <span className="expertise-tag">Smart Technologies</span>
                  <span className="expertise-tag">System Integration</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Values */}
          <div className="team-values">
            <h2 className="values-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🚀</div>
                <h3>Innovation First</h3>
                <p>We push boundaries and explore new frontiers in technology to create solutions that matter.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>We believe in the power of teamwork and partnerships to achieve extraordinary results.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h3>Excellence</h3>
                <p>We strive for excellence in everything we do, from research to implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 