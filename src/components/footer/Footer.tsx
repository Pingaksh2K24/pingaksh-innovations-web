'use client'

import './Footer.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      {/* Alien Spaceship Animation */}
      <div className="alien-spaceship-container">
        <Image
          src="/images/ship.png"
          alt="Alien Spaceship"
          width={180}
          height={108}
          className="alien-spaceship"
        />
      </div>



      {/* Star Elements */}
      <div className="footer-stars">
        <div className="footer-star"></div>
        <div className="footer-star"></div>
        <div className="footer-star"></div>
        <div className="footer-star"></div>
        <div className="footer-star"></div>
        <div className="footer-star"></div>
        <div className="footer-star"></div>
        <div className="footer-star"></div>
      </div>

      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-company">
          <div className="footer-logo-section">
            <Image
              src="/images/logo.png"
              alt="Pingaksh Innovations Logo"
              width={40}
              height={40}
              className="footer-logo"
            />
            <div className="footer-company-text">
              <h3 className="footer-company-name">PINGAKSH INNOVATIONS</h3>
              <p className="footer-company-tagline">Advancing technologies in AI, robotics, and space research</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <div className="footer-section">
            <h4 className="footer-section-title">About</h4>
            <ul className="footer-link-list">
              <li><a href="/our-story" className="footer-link">Our Story</a></li>
              <li><a href="/team" className="footer-link">Team</a></li>
              <li><a href="#about" className="footer-link">Mission</a></li>
              <li><a href="#about" className="footer-link">Vision</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-link-list">
              <li><Link href="/services/ai-machine-learning" className="footer-link">AI & Machine Learning</Link></li>
              <li><Link href="/services/robotics" className="footer-link">Robotics</Link></li>
              <li><Link href="/services/iot-solutions" className="footer-link">IoT Solutions</Link></li>
              <li><Link href="/services/space-research" className="footer-link">Space Research</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Contact</h4>
            <ul className="footer-link-list">
              <li><a href="mailto:pingakshinnovations24@gmail.com" className="footer-link">pingakshinnovations24@gmail.com</a></li>
              <li><a href="tel:+919834828054" className="footer-link">+91-9834828054</a></li>
              <li className="footer-link">Near Government Polytechnic, Vithhal Nagar Khamgaon, District Buldhana, Maharashtra, 443404</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Pingaksh Innovations. All rights reserved.
          </div>

          <div className="footer-legal">
            <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
            <a href="/terms" className="footer-legal-link">Terms of Service</a>
            <a href="/cookies" className="footer-legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
} 