'use client'

import '../contact.css'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

export default function Contact() {
  return (
    <div className="contact-page">
      
      <main className="contact-main">
        <div className="contact-container">
          {/* Main Content Area - Contact Info and Business Hours */}
          <div className="contact-main-content">
            {/* Left Section - Contact Info */}
            <div className="contact-left-section">
              {/* Page Header */}
              <div className="contact-header">
                <h1 className="contact-title">Contact Us</h1>
                <div className="contact-divider"></div>
                <p className="contact-subtitle">
                  Ready to start your next innovation project? Get in touch with us today!
                </p>
              </div>
              
              {/* Contact Information Cards */}
              <div className="contact-info-section">
                <div className="contact-cards">
                  <div className="contact-card">
                    <div className="contact-icon"><MdEmail /></div>
                    <h3>Email</h3>
                    <p>pingakshinnovations24@gmail.com</p>
                    <a href="mailto:pingakshinnovations24@gmail.com" className="contact-link">
                      Send Email
                    </a>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-icon"><MdPhone /></div>
                    <h3>Phone</h3>
                    <p>+91-9834828054</p>
                    <a href="tel:+919834828054" className="contact-link">
                      Call Now
                    </a>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-icon"><MdLocationOn /></div>
                    <h3>Address</h3>
                    <p>Near Government Polytechnic, Vithhal Nagar Khamgaon, District Buldhana, Maharashtra, 443404</p>
                    <a href="https://maps.google.com/?q=Government+Polytechnic+Khamgaon+Buldhana+Maharashtra" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="contact-link">
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours Section */}
            <div className="business-hours-section">
              <h2 className="section-title">Business Hours</h2>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">10:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
            </div>

            {/* Send us a Message Section */}
            <div className="contact-form-section">
              <h2 className="section-title">Send us a Message</h2>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Enter your full name"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Enter your email address"
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required>
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">Project Discussion</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
} 