"use client";

import { SetStateAction, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// pages
// import Default from "@/components/dashboard/views/Default";
// import AllPosts from "@/components/dashboard/views/AllPosts";
// import Lecturer from "@/components/dashboard/views/Lecturer";
// import CreatePost from "@/components/dashboard/views/CreatePost";
// import Members from "@/components/dashboard/views/Members";

import { UserButton, useUser } from "@clerk/nextjs";
import {
  Edit,
  Home,
  LogOut,
  Newspaper,
  Presentation,
  Users,
} from "lucide-react";
import DashboardLandingPage from "./page";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  console.log(user);

  const router = useRouter();
  //   const user = useSelector((state) => state.user.value);

  const [selectedNavItem, setSelectedNavItem] = useState("default");
  const [activeItem, setActiveItem] = useState("Home");
  const data = [
    {
      name: "Home",
      icon: <Home />,
      elementRender: "default",
    },
    {
      name: "All Posts",
      icon: <Newspaper />,
      elementRender: "allPosts",
    },
    {
      name: "Lecturers",
      icon: <Presentation />,
      elementRender: "lecturers",
    },
    {
      name: "SRC Members",
      icon: <Users />,
      elementRender: "members",
    },
    // { name: "Create Post", slug: "#", icon: <MdEditOff /> },
  ];

  const handleNavItemClick = (
    navItem: SetStateAction<string>,
    activeNav: SetStateAction<string>
  ) => {
    setActiveItem(activeNav);
    setSelectedNavItem(navItem);
  };

  //   const handleLogout = async () => {
  //     try {
  //       await axios.get("/api/users/logout");
  //       router.push("/login");
  //       localStorage.removeItem("persist:root");
  //       setTimeout(() => {
  //         toast.success("Logout successful!", {
  //           duration: 1000,
  //         });
  //       }, 1000);
  //     } catch (error) {
  //       toast.error("Something went wrong! User not logged out.");
  //     }
  //   };

  return (
    <section className="h-screen">
      <div className="flex h-full">
        {/* SIDE NAV  */}
        <div className="hidden lg:flex flex-col justify-between w-52 h-full shadow-2xl shadow-slate-700">
          <div>
            <div className="pb-5 p-5">
              <Link href="/" className="flex items-center justify-between">
                <Image
                  src="/logo.jpg"
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </Link>
            </div>
            {data.map((_, index) => {
              let isActive = _.name == activeItem;
              let activeClass = isActive ? "text-green-700" : "text-gray-600";
              return (
                <div
                  className={`pl-6 py-2 hover:bg-green-400 border mx-2 my-1 rounded border-t ${activeClass}`}
                  key={index}
                  onClick={() => handleNavItemClick(_?.elementRender, _?.name)}
                >
                  <div className="flex items-center gap-3 cursor-pointer">
                    {_?.icon}
                    {_?.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 mx-2">
            <div
              className=" flex items-center justify-center gap-3 rounded text-gray-100 p-3 bg-green-600 border-2 border-green-700 font-semibold cursor-pointer"
            //   onClick={() => handleNavItemClick("createPost")}
            >
              <Edit />
              Create Post
            </div>
            <div
              className="flex items-center justify-center gap-3 rounded mb-2 bg-gray-400 p-3 border-2 border-gray-500 font-semibold cursor-pointer"
            //   onClick={handleLogout}
            >
              <LogOut />
              Logout
            </div>
          </div>
        </div>
        <div className="relative flex-1 bg-gray-100 h-screen">
          <div className="absolute px-3 py-12 top-0 left-0 w-full h-2/3 bg-green-700">
            {/* TOP NAVBAR  */}
            <div className="flex justify-between items-center px-8">
              <span className="text-gray-200 uppercase font-semibold">
                Welcome aboard, <br></br>
                <span className="text-3xl font-bold">
                  comrade {user?.firstName}
                </span>
              </span>
              <div className="flex items-center gap-4">
                <form>
                  <input
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search..."
                    // value={user.email}
                    // onChange={(e) =>
                    //   setUser({ ...user, email: e.target.value })
                    // }
                    className="w-60 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 shadow-md"
                    required
                  />
                </form>
                <div>
                  <UserButton />
                </div>
              </div>
            </div>

            {/* <div className="mt-20 bg-gray-100 h-[calc(100vh-173px)] rounded-t-3xl p-5">
                            {selectedNavItem === "allPosts" && <AllPosts />}
                            {selectedNavItem === "lecturers" && <Lecturer />}
                            {selectedNavItem === "createPost" && <CreatePost />}
                            {selectedNavItem === "members" && <Members />}
                          </div> */}
            <div className="mt-20 bg-gray-100 h-[calc(100vh-173px)] rounded-t-3xl p-5">
              {selectedNavItem === "default" && <DashboardLandingPage />}
            </div>

          </div>
        </div>
      </div>

      <Toaster
        position="top-center"
        containerStyle={{
          position: "absolute",
          top: 20,
        }}
      />
    </section>
  );
};

export default DashboardLayout;
