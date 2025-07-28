'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            We are a technology company at the forefront of AI, robotics, machine learning, IoT, and space exploration, committed to pushing the boundaries of what&apos;s possible in the digital age.
          </p>
        </div>
        
        <div className="services-grid">
          {/* AI & Machine Learning Card */}
          <div className="service-card">
            <div className="service-image-container">
              <Image
                src="/images/AI.png"
                alt="AI & Machine Learning"
                width={200}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">AI & Machine Learning</h3>
              <p className="service-description">
                Advanced artificial intelligence and machine learning solutions that transform businesses through intelligent automation, predictive analytics, and cognitive computing.
              </p>
              <Link href="/services/ai-machine-learning" className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>

          {/* Robotics Card */}
          <div className="service-card">
            <div className="service-image-container">
              <Image
                src="/images/robotics.png"
                alt="Robotics"
                width={300}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">Robotics</h3>
              <p className="service-description">
                Cutting-edge robotics solutions for industrial automation, autonomous systems, and intelligent machines that enhance productivity and safety.
              </p>
              <Link href="/services/robotics" className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>

          {/* IoT Solutions Card */}
          <div className="service-card">
            <div className="service-image-container">
              <Image
                src="/images/IoT.png"
                alt="IoT Solutions"
                width={300}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">IoT Solutions</h3>
              <p className="service-description">
                Comprehensive Internet of Things solutions that connect devices, collect data, and enable smart decision-making across various industries.
              </p>
              <Link href="/services/iot-solutions" className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>

          {/* Space Research Card */}
          <div className="service-card">
            <div className="service-image-container">
              <Image
                src="/images/space1.png"
                alt="Space Research"
                width={300}
                height={200}
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">Space Research</h3>
              <p className="service-description">
                Innovative space technology research and development, including satellite systems, space exploration tools, and aerospace engineering solutions.
              </p>
              <Link href="/services/space-research" className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 