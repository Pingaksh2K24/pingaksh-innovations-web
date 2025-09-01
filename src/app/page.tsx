import { HeroSection, AboutSection, ServicesSection, PortfolioSection, IndustriesSection, ContactSection } from '@/components'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <IndustriesSection />
      <div className="bottom-sections">
        {/* <ContactSection /> */}
      </div>
    </main>
  )
}
