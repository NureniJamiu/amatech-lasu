import { Button } from '@/components/ui/button'
import { ArrowBigRight, MoveRight } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='text-center '>
      <div className='py-5'>
        <h2 className='w-[500px] mx-auto text-4xl font-bold leading-snug '>Welcome to the Department of <span className='bg-green-500 rounded'>Management</span> Technology </h2>
        <p className='w-[550px] mx-auto my-3'>At the heart of innovation and leadership, the Department of Management Technology is dedicated to fostering an environment of knowledge, growth, and achievement.</p>
        <div className='w-[500px] mx-auto flex items-center justify-center gap-2 '>
          <Button className='border-2 border-green-500 text-green-700 px-8 rounded hover:text-white hover:bg-green-600'>Visit LMS<MoveRight /></Button>
          <Button className="btn-gradient rounded">Administrator</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection