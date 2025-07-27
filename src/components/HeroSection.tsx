'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from './modal/Modal'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGetStarted = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <section className="hero-section">
      {/* Left side - Text content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Innovation in
          <span className="hero-title-large">AI & Robotics</span>
        </h1>

        <p className="hero-subtitle">
          At Pingaksh Innovation, we blend intelligence with imagination to build cutting-edge technologies that shape a smarter and interstellar tomorrow.
        </p>

        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      {/* Right side - Hero Image and Rocket Animation */}
      <div className="hero-image-container">
        <Image 
          src="/images/hero2.png" 
          alt="AI & Robotics Innovation" 
          width={500} 
          height={500} 
          className="hero-image"
          priority
        />
        
        {/* Rocket Launch Animation */}
        <div className="rocket-container">
          <svg className="rocket" viewBox="0 0 100 200" width="40" height="80">
            {/* Rocket Body - Silver metallic with gradient */}
            <defs>
              <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#E5E7EB", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#D1D5DB", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#9CA3AF", stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="noseCone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#F9FAFB", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#E5E7EB", stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Main Rocket Body */}
            <rect x="35" y="80" width="30" height="80" fill="url(#rocketBody)" stroke="#6B7280" strokeWidth="1" rx="3" />
            
            {/* Nose Cone - Pointed and streamlined */}
            <path 
              d="M50 80 L40 60 L60 60 Z" 
              fill="url(#noseCone)" 
              stroke="#6B7280" 
              strokeWidth="1"
            />
            
            {/* Horizontal Panel Lines */}
            <line x1="35" y1="95" x2="65" y2="95" stroke="#9CA3AF" strokeWidth="0.5" />
            <line x1="35" y1="110" x2="65" y2="110" stroke="#9CA3AF" strokeWidth="0.5" />
            <line x1="35" y1="125" x2="65" y2="125" stroke="#9CA3AF" strokeWidth="0.5" />
            <line x1="35" y1="140" x2="65" y2="140" stroke="#9CA3AF" strokeWidth="0.5" />
            
            {/* Single Circular Window */}
            <circle cx="50" cy="105" r="4" fill="#1E293B" stroke="#6B7280" strokeWidth="0.5" />
            <circle cx="50" cy="105" r="2" fill="#60A5FA" />
            
            {/* Three Triangular Fins */}
            <path d="M35 160 L25 180 L35 180 Z" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
            <path d="M50 160 L45 180 L55 180 Z" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
            <path d="M65 160 L75 180 L65 180 Z" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
            
            {/* Engine Nozzle */}
            <rect x="40" y="160" width="20" height="8" fill="#6B7280" stroke="#4B5563" strokeWidth="0.5" rx="2" />
            
            {/* Powerful Engine Flame */}
            <defs>
              <radialGradient id="flameCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor: "#FEF3C7", stopOpacity: 1}} />
                <stop offset="30%" style={{stopColor: "#F97316", stopOpacity: 1}} />
                <stop offset="70%" style={{stopColor: "#EA580C", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#DC2626", stopOpacity: 0.8}} />
              </radialGradient>
            </defs>
            
            {/* Main Flame */}
            <path 
              d="M40 168 L35 200 L50 220 L65 200 L60 168 Z" 
              fill="url(#flameCore)" 
              className="main-flame"
            />
            
            {/* Flame Core */}
            <path 
              d="M45 168 L42 190 L50 200 L58 190 L55 168 Z" 
              fill="#FEF3C7" 
              className="flame-core"
            />
            
            {/* Smoke Trail */}
            <circle cx="40" cy="210" r="3" fill="#6B7280" opacity="0.4" className="smoke-1" />
            <circle cx="50" cy="215" r="2" fill="#6B7280" opacity="0.3" className="smoke-2" />
            <circle cx="60" cy="210" r="3" fill="#6B7280" opacity="0.4" className="smoke-3" />
          </svg>
        </div>
        
        {/* Satellite Animation */}
        <div className="satellite-container">
          <svg className="satellite" viewBox="0 0 200 150" width="120" height="90">
            {/* Satellite Body - Complex multi-faceted structure */}
            <defs>
              <linearGradient id="satelliteBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#E5E7EB", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#D1D5DB", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#9CA3AF", stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="solarPanel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#1E40AF", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#3B82F6", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#60A5FA", stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="antennaDish" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#F9FAFB", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#E5E7EB", stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Main Satellite Body - Cylindrical and rectangular forms */}
            <rect x="60" y="50" width="80" height="30" fill="url(#satelliteBody)" stroke="#6B7280" strokeWidth="1" rx="5" />
            <rect x="70" y="45" width="60" height="40" fill="url(#satelliteBody)" stroke="#6B7280" strokeWidth="1" rx="3" />
            
            {/* Large Communication Dish Antenna */}
            <ellipse cx="40" cy="65" rx="25" ry="15" fill="url(#antennaDish)" stroke="#6B7280" strokeWidth="1" />
            <ellipse cx="40" cy="65" rx="20" ry="12" fill="none" stroke="#6B7280" strokeWidth="0.5" />
            
            {/* Bright Signal Beam from Antenna */}
            <defs>
              <radialGradient id="signalBeam" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor: "#FFFFFF", stopOpacity: 1}} />
                <stop offset="30%" style={{stopColor: "#60A5FA", stopOpacity: 0.8}} />
                <stop offset="70%" style={{stopColor: "#3B82F6", stopOpacity: 0.4}} />
                <stop offset="100%" style={{stopColor: "#1E40AF", stopOpacity: 0.1}} />
              </radialGradient>
            </defs>
            <path d="M15 65 L40 65 L35 55 L25 55 Z" fill="url(#signalBeam)" className="signal-beam" />
            
            {/* Four Large Solar Panels */}
            <rect x="20" y="60" width="25" height="15" fill="url(#solarPanel)" stroke="#1E40AF" strokeWidth="0.5" rx="1" />
            <rect x="155" y="60" width="25" height="15" fill="url(#solarPanel)" stroke="#1E40AF" strokeWidth="0.5" rx="1" />
            <rect x="20" y="75" width="25" height="15" fill="url(#solarPanel)" stroke="#1E40AF" strokeWidth="0.5" rx="1" />
            <rect x="155" y="75" width="25" height="15" fill="url(#solarPanel)" stroke="#1E40AF" strokeWidth="0.5" rx="1" />
            
            {/* Solar Panel Cell Details */}
            <line x1="32" y1="60" x2="32" y2="90" stroke="#1E40AF" strokeWidth="0.3" />
            <line x1="167" y1="60" x2="167" y2="90" stroke="#1E40AF" strokeWidth="0.3" />
            <line x1="20" y1="67" x2="45" y2="67" stroke="#1E40AF" strokeWidth="0.3" />
            <line x1="20" y1="82" x2="45" y2="82" stroke="#1E40AF" strokeWidth="0.3" />
            <line x1="155" y1="67" x2="180" y2="67" stroke="#1E40AF" strokeWidth="0.3" />
            <line x1="155" y1="82" x2="180" y2="82" stroke="#1E40AF" strokeWidth="0.3" />
            
            {/* Satellite Window */}
            <circle cx="100" cy="65" r="4" fill="#1E293B" stroke="#6B7280" strokeWidth="0.5" />
            <circle cx="100" cy="65" r="2" fill="#60A5FA" />
            
            {/* Technical Components and Antennas */}
            <rect x="75" y="55" width="4" height="8" fill="#9CA3AF" />
            <rect x="121" y="55" width="4" height="8" fill="#9CA3AF" />
            <line x1="85" y1="60" x2="95" y2="50" stroke="#6B7280" strokeWidth="1.5" />
            <line x1="105" y1="60" x2="115" y2="50" stroke="#6B7280" strokeWidth="1.5" />
            
            {/* Navigation Lights */}
            <circle cx="70" cy="55" r="2" fill="#FEF3C7" className="nav-light-1" />
            <circle cx="130" cy="55" r="2" fill="#FEF3C7" className="nav-light-2" />
            <circle cx="80" cy="75" r="1.5" fill="#60A5FA" className="nav-light-3" />
            <circle cx="120" cy="75" r="1.5" fill="#60A5FA" className="nav-light-4" />
            
            {/* Thrusters */}
            <rect x="60" y="70" width="3" height="6" fill="#6B7280" rx="1" />
            <rect x="137" y="70" width="3" height="6" fill="#6B7280" rx="1" />
            
            {/* Signal Waves from Antenna */}
            <circle cx="40" cy="65" r="35" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.2" className="signal-wave-1" />
            <circle cx="40" cy="65" r="45" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.15" className="signal-wave-2" />
            <circle cx="40" cy="65" r="55" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.1" className="signal-wave-3" />
          </svg>
        </div>
        

      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Service Coming Soon!"
        message="We're excited to announce that our comprehensive AI & Robotics services will be launching soon. Our team is working hard to bring you cutting-edge solutions."
        icon="🚀"
        details={[
          "Advanced AI-powered robotics solutions for industrial automation",
          "Custom machine learning models for predictive analytics",
          "IoT integration services for smart city infrastructure",
          "Space research and satellite technology development",
          "24/7 technical support and consultation services",
          "Training programs for AI and robotics implementation"
        ]}
      />
    </section>
  )
} 