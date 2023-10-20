import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'

import Image from "next/image";
const HeroSection = () => {
  return (
    <div className='text-center'>
      <div className='pt-5 px-5'>
        <span className='italic'>Inspiring Excellence, Shaping the Future</span>
        <h2 className='text-[25px] md:w-[700px] mx-auto md:text-4xl lg:text-5xl font-bold leading-snug mt-10'>Welcome to the Department of Management Technology</h2>
        <p className='md:w-[550px] mx-auto my-3'>Our commitment to excellence, coupled with a focus on the dynamic field of Project Management, ensures that our students are well-prepared to navigate the challenges and opportunities of the modern business landscape.</p>

        <div className='md:w-[500px] mx-auto flex items-center justify-center gap-2 mt-12'>
          <Button className='border-2 border-green-500 text-green-700 px-8 rounded hover:text-white hover:bg-green-600'>Visit LMS<MoveRight /></Button>
          <Button className="btn-gradient rounded">Administrator</Button>
        </div>
      </div>

      <div className='relative h-64'>
        <Image src="/background.png" alt='amatech logo' fill className='object-fill' />
      </div>

    </div>
  )
}

export default HeroSection