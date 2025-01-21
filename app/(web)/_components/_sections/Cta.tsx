import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 h-28 md:h-auto md:py-4 bg-[#227e5f] text-gray-200 px-8">
      <Link
        href="#"
        className="border-[0.5px] border-gray-300 hover:border-white px-2 py-1 rounded-lg transition-all duration-100 ease-in-out uppercase cursor-pointer hover:scale-105 font-bold"
      >
        Read
      </Link>
      <Link href="#" className="text-center">
        <span className="hidden md:inline-flex">Documentary: </span>The History
        of Project Management in LASU
      </Link>
    </section>
  );
};

export default CTA;
