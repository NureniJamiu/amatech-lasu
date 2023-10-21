"use client";

import { useState } from "react";
// import axios from "axios";

import { UserButton, useUser } from "@clerk/nextjs";

import SideNav from "./_components/SideNav";
import DashboardMobileMenu from "./_components/DashboardMobileMenu";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const { user } = useUser();

  const [selectedNavItem, setSelectedNavItem] = useState("default");


  return (
    <section className="h-screen">

      <div className="flex h-full">

        {/* SIDE NAV  */}

        <div className="hidden lg:block">
          <SideNav />
        </div>

        {/* MOBILE MENU  */}

        <div className="relative flex-1 bg-gray-100 h-screen">
          <div className="absolute px-3 py-12 top-0 left-0 w-full h-2/3 bg-green-700">
            <div className="absolute top-6 left-10 w-8 h-8 shadow-2xl flex items-center justify-center bg-green-100 rounded lg:hidden">
              <DashboardMobileMenu />
            </div>
            {/* TOP NAVBAR  */}
            <div className="flex justify-between items-center px-8 w-full mt-6 lg:mt-0">
              <span className="text-gray-200 uppercase font-semibold">
                Welcome aboard, <br></br>
                <span className="text-3xl font-bold">
                  comrade {user?.firstName}
                </span>
              </span>
              <div className="flex items-center gap-4">
                <form className="hidden md:block">
                  <input
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search..."
                    className="w-60 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 shadow-md"
                    required
                  />
                </form>
                <div>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </div>

            <div className="mt-20 bg-gray-100 h-[calc(100vh-173px)] rounded-t-3xl p-5 overflow-scroll">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
