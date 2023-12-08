"use client"

import { useState, useEffect } from "react";

import Image from "next/image";
import comingSoon from "@/public/coming-soon.jpg"

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [timeLeft]);
    const seconds = timeLeft % 60;

    return <div className="relative flex items-center justify-center w-full h-full">
        <Image
            alt="coming soon"
            // width={500}
            // height={500}
            fill
            src={comingSoon}
            className="absolute top-0 left-0 w-full object-cover"
        />
        <div className="absolute bg-black top-0 left-0 right-0 w-full h-full bg-opacity-70"></div>

        <div className="absolute left-auto right-auto top-auto bottom-auto text-white text-center">
            <h2 className="text-8xl font-semibold">COMING SOON</h2>
            <p className="inline-block py-8 border-b">This site is currently under construction. Please check back later.</p>
            <div className=" text-5xl font-semibold my-8">
                <span className="mx-3">
                    14
                    <span className="text-base">D</span>
                </span>
                <span className="mx-3">
                    {String(hours).padStart(2, "0")}
                    <span className="text-base">H</span>
                </span>
                <span className="mx-3">
                    {String(minutes).padStart(2, "0")}
                    <span className="text-base">M</span>
                </span>
                <span className="mx-3">
                    {String(seconds).padStart(2, "0")}
                    <span className="text-base">S</span>
                </span>
            </div>
            {/* <p className="">Get notified</p> */}
        </div>
    </div>;
};

export default ComingSoon;
