import Link from "next/link";
import React from "react";

import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const SocialsBanner = () => {
  return (
    <section className="bg-gradient-to-l from-green-900 to-green-700 p-8 md:px-24 text-gray-200 h-96 md:h-80">
      <div className="flex flex-col justify-between gap-24 md:flex-row md:items-start max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="mb-8 text-2xl font-semibold">
            <p className="mb-3">
              Follow us on Social Media for news, updates and more...
            </p>
            <span>#WeAreMTech,</span> <br />
            <span>#WeAreMAD (Making A Difference)</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
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
        </div>
        <div className="border-b-[1px] border-gray-200 flex-1"></div>
      </div>
    </section>
  );
};

export default SocialsBanner;
