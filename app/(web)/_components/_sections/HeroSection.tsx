"use client"

import Image from "next/image";
import React, { useRef, useState, MutableRefObject } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const textGradient = `bg-gradient-to-r from-[#81e410] via-green-700 to-[#81e410] text-transparent bg-clip-text`

const HeroSection = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    progressCircle?.current?.style?.setProperty('--progress', String(1 - progress));

    progressContent.current && (progressContent.current.textContent = `${Math.ceil(time / 1000)}s`);

  };

  return (
    <section className="h-[calc(100vh-80px)]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-500 h-500">
            <Image
              src="/hero1.jpg"
              alt=""
              width="500"
              height="500"
              className="object-contain object-left-bottom"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white">
              <div className="mt-20">
                <h1 className="text-3xl md:w-[800px] mx-auto md:text-4xl lg:text-5xl font-semibold text-white py-3 lg:leading-snug">
                  Welcome to the Department of Management Technology
                </h1>
                <p className='md:w-[600px] mx-auto my-3'>Dedicated to excellence in Project Management, we nurture students to conquer challenges and seize opportunities in the modern business landscape.</p>
                <div className='flex items-center justify-center gap-2 mt-12'>
                  <Button className='border-2 border-white text-white px-10 rounded'>Contact Us</Button>
                  <Button className="bg-white text-black rounded px-10">Get Involved</Button>
                </div>
              </div>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-500 h-500">
            <Image
              src="/hero5.jpg"
              alt=""
              width="500"
              height="500"
              className="object-contain object-left-top"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white">
              <div className="mt-20">
                <h1 className="text-3xl md:w-[800px] mx-auto md:text-4xl lg:text-5xl font-semibold text-white py-3 lg:leading-snug">
                  Navigating the Future of Project Management
                </h1>
                <p className='md:w-[600px] mx-auto my-3'>Dedicated to excellence in Project Management, we nurture students to conquer challenges and seize opportunities in the modern business landscape.</p>
                <div className='flex items-center justify-center gap-2 mt-12'>
                  <Button className='border-2 border-white text-white px-10 rounded'>Contact Us</Button>
                  <Button className="bg-white text-black rounded px-10">Get Involved</Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-500 h-500">
            <Image
              src="/hero2.jpg"
              alt=""
              width="500"
              height="500"
              className="object-contain object-left-top"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white">
              <div className="mt-20">
                <h1 className="text-3xl md:w-[800px] mx-auto md:text-4xl lg:text-5xl font-semibold text-white py-3 lg:leading-snug">
                  Transforming Visions into Project Realities
                </h1>
                <p className='md:w-[600px] mx-auto my-3'>Dedicated to excellence in Project Management, we nurture students to conquer challenges and seize opportunities in the modern business landscape.</p>
                <div className='flex items-center justify-center gap-2 mt-12'>
                  <Button className='border-2 border-white text-white px-10 rounded'>Contact Us</Button>
                  <Button className="bg-white text-black rounded px-10">Get Involved</Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  )
}

export default HeroSection