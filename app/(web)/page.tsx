import Image from 'next/image'
import HeroSection from './_components/_sections/HeroSection'
import CTA from './_components/_sections/Cta'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CTA />
    </main>
  )
}
