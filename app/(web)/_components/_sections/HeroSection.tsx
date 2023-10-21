import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'

import Image from "next/image";

const textGradient = `bg-gradient-to-r from-[#81e410] via-green-700 to-[#81e410] text-transparent bg-clip-text`

const HeroSection = () => {
  return (
    <div className='text-center'>
      <div className='pt-5 px-5'>
        <span className='italic font-semibold'>Inspiring Excellence, Shaping the <span className='bg-gradient-to-t from-green-500 to-[#7fe509] px-2 py-1 rounded bg-opacity-80'>Future</span></span>
        <h2 className={`${textGradient} text-3xl md:w-[700px] mx-auto md:text-4xl lg:text-5xl font-bold leading-snug mt-10 bg-gradient-to-r py-3 '`}>Welcome to the Department of Management Technology</h2>
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