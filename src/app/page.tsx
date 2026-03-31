import { Hero, Services, WhyUs, HowItWorks, Pricing, Testimonials, About, Contact } from '@/sections'
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <>
      <Analytics />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}
