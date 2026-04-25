import { Hero, Services, WhyUs, HowItWorks, Pricing, Testimonials, About, Contact } from '@/sections'
import { Analytics } from '@vercel/analytics/next'
import { HomeFaqJsonLd } from '@/components/JsonLd'

export default function Home() {
  return (
    <>
      <HomeFaqJsonLd />
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
