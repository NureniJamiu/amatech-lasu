"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const LecturerSwiper = ({ lecturers }: any) => {
    return (
        <div>
            <div className="text-center mb-8">
                <h2 className="text-3xl">
                    Our <span className="text-[#227e5f] font-semibold">Lecturers</span>
                </h2>
                <span className="italic">Meet the Lecturers of the department</span>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            // className="mySwiper"
            >
                {lecturers.map((lecturer: any, index: number) => (
                    <SwiperSlide className="" key={index}>
                        <div className="group relative w-full h-full opacity-100 transition-opacity duration-500 rounded-lg">
                            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-20 rounded-lg"></div>
                            <Image
                                src={lecturer?.image}
                                alt={lecturer?.name}
                                width={500}
                                height={500}
                                className="object-cover w-full aspect-square rounded-lg"
                            />
                            <div className="group-hover:hidden absolute bottom-0 left-0 w-full p-4 text-white text-center">
                                <h2 className="text-2xl font-bold">{lecturer?.name}</h2>
                            </div>
                            <div className=" hidden group-hover:inline-block absolute bottom-0 left-0 w-full h-48 p-3 text-white bg-black opacity-60 overflow-hidden">
                                <p
                                    className="text-white line-clamp-5"
                                    dangerouslySetInnerHTML={{ __html: lecturer?.bio }}
                                ></p>
                                <div
                                    // href="#"
                                    className="float-right mt-3 italic text-sm cursor-pointer text-blue-400"
                                >
                                    Read more&gt;&gt;&gt;
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default LecturerSwiper;
