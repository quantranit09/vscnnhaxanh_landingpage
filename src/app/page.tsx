import dynamic from 'next/dynamic'
import { Hero } from '@/sections'
import { Analytics } from '@vercel/analytics/next'
import { HomeFaqJsonLd } from '@/components/JsonLd'

// Below-fold sections — defer to reduce initial JS bundle
const Services     = dynamic(() => import('@/sections/Services').then(m => ({ default: m.Services })))
const WhyUs        = dynamic(() => import('@/sections/WhyUs').then(m => ({ default: m.WhyUs })))
const HowItWorks   = dynamic(() => import('@/sections/HowItWorks').then(m => ({ default: m.HowItWorks })))
const Pricing      = dynamic(() => import('@/sections/Pricing').then(m => ({ default: m.Pricing })))
const Testimonials = dynamic(() => import('@/sections/Testimonials').then(m => ({ default: m.Testimonials })))
const About        = dynamic(() => import('@/sections/About').then(m => ({ default: m.About })))
const Contact      = dynamic(() => import('@/sections/Contact').then(m => ({ default: m.Contact })))

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
