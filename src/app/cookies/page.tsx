'use client'

import '../legal.css'
import LegalNav from '../../components/LegalNav'

export default function CookiePolicy() {
  return (
    <div className="legal-page">
      <LegalNav />
      <div className="legal-container">
        <h1 className="legal-title">Cookie Policy</h1>
        <p className="legal-date">Last updated: January 2025</p>
        
        <div className="legal-content">
          <section className="legal-section">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences, 
              analyzing how you use our site, and personalizing content.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Types of Cookies We Use</h2>
            <h3>3.1 Session Cookies</h3>
            <p>
              These cookies are temporary and are deleted when you close your browser. They help 
              maintain your session while you navigate through our website.
            </p>

            <h3>3.2 Persistent Cookies</h3>
            <p>
              These cookies remain on your device for a set period or until you delete them. 
              They help us remember your preferences for future visits.
            </p>

            <h3>3.3 Third-Party Cookies</h3>
            <p>
              Some cookies are placed by third-party services that appear on our pages, such as 
              analytics providers or social media platforms.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Specific Cookies We Use</h2>
            <ul>
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Next.js:</strong> For website functionality and performance</li>
              <li><strong>Custom Cookies:</strong> To remember your preferences and settings</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Managing Your Cookie Preferences</h2>
            <p>You can control and manage cookies in several ways:</p>
            <ul>
              <li>Browser settings: Most browsers allow you to block or delete cookies</li>
              <li>Browser extensions: Install extensions to manage cookie preferences</li>
              <li>Device settings: Manage cookies through your device&apos;s privacy settings</li>
              <li>Third-party opt-outs: Use tools provided by advertising networks</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Impact of Disabling Cookies</h2>
            <p>
              If you choose to disable cookies, some features of our website may not function 
              properly. This could affect your browsing experience and the services we can provide.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our 
              practices or for other operational, legal, or regulatory reasons. We will notify 
              you of any material changes by posting the updated policy on this page.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> pingakshinnovations24@gmail.com</p>
              <p><strong>Phone:</strong> +91-9834828054</p>
              <p><strong>Address:</strong> Near Government Polytechnic, Vithhal Nagar Khamgaon, District Buldhana, Maharashtra, 443404</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 