import { Header, HeroSection, AboutSection, ServicesSection, PortfolioSection, IndustriesSection, ContactSection, Footer } from '@/components'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <IndustriesSection />
      <div className="bottom-sections">
        {/* <ContactSection /> */}
      </div>
      <Footer />
    </main>
  )
}
