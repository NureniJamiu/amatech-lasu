import HeroSection from './_components/_sections/HeroSection'
import CTA from './_components/_sections/Cta'
import DynamicSection from './_components/_sections/DynamicSection'
import LatestNews from './_components/_sections/LatestNews'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CTA />
      <DynamicSection />
      <LatestNews />
    </main>
  )
}
