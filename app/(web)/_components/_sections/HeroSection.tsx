"use client";

import Image from "next/image";
import React, { useRef, MutableRefObject } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";

const textGradient = `bg-gradient-to-r from-[#81e410] via-green-700 to-[#81e410] text-transparent bg-clip-text`;

const HeroSection = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    progressCircle?.current?.style?.setProperty(
      "--progress",
      String(1 - progress)
    );

    progressContent.current &&
      (progressContent.current.textContent = `${Math.ceil(time / 1000)}s`);
  };

  const swiperContent = [
    {
      mainText: "Welcome to The Department of Management Technology.",
      bodyText:
        "Dedicated to excellence in Project Management, we nurture students to conquer challenges and seize opportunities in the modern business landscape.",
      backgroundImage: "/hero1.jpg",
    },
    {
      mainText: "Navigating the Future of Project Management",
      bodyText:
        "Dedicated to excellence in Project Management, we nurture students to conquer challenges and seize opportunities in the modern business landscape.",
      backgroundImage: "/hero5.jpg",
    },
    {
      mainText: "Transforming Visions into Project Realities",
      bodyText:
        "Dedicated to excellence in Project Management, we nurture students to conquer challenges and seize opportunities in the modern business landscape.",
      backgroundImage: "/hero2.jpg",
    },
  ];

  return (
    <section className="h-[calc(100vh-123px)]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {swiperContent.map((content, index) => (
          <SwiperSlide key={content.mainText}>
            <div className="relative w-full h-full">
              <Image
                src={content.backgroundImage}
                alt=""
                width="500"
                height="500"
                className={`object-contain ${
                  index == 1 ? "object-top" : "object-center"
                }`}
              />
              <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white">
                <div>
                  <h1 className="text-4xl md:text-3xl md:w-[800px] mx-auto lg:text-5xl font-semibold text-white py-3 lg:leading-snug">
                    {content.mainText}
                  </h1>
                  <p className="md:w-[600px] mx-auto my-3">
                    {content.bodyText}
                  </p>
                  <div className="grid md:flex items-center justify-center gap-2 mt-12">
                    <Button className="border-2 border-white text-white px-10 rounded">
                      Contact Us
                    </Button>
                    <Button className="bg-white text-black rounded px-10 hover:bg-neutral-200">
                      Get Involved
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSection;
