'use client'

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Space Graphic */}
        <div className="space-graphic">
          <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
            {/* Planet (Saturn-like) */}
            <circle cx="100" cy="100" r="45" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" />
            {/* Planet rings */}
            <ellipse cx="100" cy="100" rx="70" ry="18" fill="none" stroke="#60A5FA" strokeWidth="3" opacity="0.7" />
            <ellipse cx="100" cy="100" rx="60" ry="12" fill="none" stroke="#93C5FD" strokeWidth="2" opacity="0.5" />
            
            {/* Satellite */}
            <g transform="translate(170, 90)">
              {/* Satellite body */}
              <rect x="-10" y="-5" width="20" height="10" fill="#E5E7EB" rx="2" />
              {/* Solar panels */}
              <rect x="-25" y="-3" width="15" height="6" fill="#60A5FA" rx="1" />
              <rect x="10" y="-3" width="15" height="6" fill="#60A5FA" rx="1" />
              {/* Antenna */}
              <line x1="0" y1="-5" x2="0" y2="-15" stroke="#E5E7EB" strokeWidth="2" />
              <circle cx="0" cy="-15" r="3" fill="#60A5FA" />
              {/* Orbit trail */}
              <path d="M-35 0 Q-17.5 -25 0 0 Q17.5 25 35 0" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
            </g>
          </svg>
        </div>
        
        {/* Contact Heading */}
        <div>
          <h2 className="contact-title">Contact Us</h2>
        </div>
      </div>
    </section>
  )
} 