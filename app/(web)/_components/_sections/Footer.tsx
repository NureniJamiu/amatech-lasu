import React from "react";
import Link from "next/link";
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const links = [
    { title: "Sponsorship", slug: "sponsorship" },
    {
      title: "Admission requirement",
      slug: "/academics/admission-requirement",
    },
    { title: "All courses", slug: "/academics/all-offered-courses" },
    { title: "Contact us", slug: "contact-us" },
    { title: "Excos", slug: "/students/executive-members" },
  ];
  return (
    <footer className="relative flex justify-center items-center bg-[#252525] text-[#999999] text-sm px-8 py-3">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col md:flex-row mx-auto justify-between items-center gap-4">
            {links.map((_, index) => (
              <Link href={_.slug} key={index} className="hover:text-white">
                {_.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 my-8 md:my-0">
          <Link href="#" className="hover:text-white">
            <Facebook />
          </Link>
          <Link href="#" className="hover:text-white">
            <Twitter />
          </Link>
          <Link href="#" className="hover:text-white">
            <Instagram />
          </Link>
          <Link href="#" className="hover:text-white">
            <Linkedin />
          </Link>
        </div>
        <div className="mx-auto text-center">
          © 2022 - Association of Management Technology Students, LASU
        </div>
      </div>
      <Link
        href="#nav"
        className="absolute right-5 md:right-12 bottom-80 md:bottom-24 w-12 h-12 flex justify-center items-center bg-gray-300 text-gray-700 rounded-full text-4xl animate-bounce"
      >
        <ArrowUp />
      </Link>
    </footer>
  );
};

export default Footer;
