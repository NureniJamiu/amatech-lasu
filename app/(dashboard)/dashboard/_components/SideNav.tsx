import React, { useState } from 'react'

import Image from 'next/image';
import Link from 'next/link';
import { Edit, Home, LogOut, Newspaper, Presentation, Users } from 'lucide-react';


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddPost from './AddPost';

const data = [
    {
        name: "Home",
        icon: <Home />,
        slug: "/dashboard",
    },
    {
        name: "All Posts",
        icon: <Newspaper />,
        slug: "/dashboard/posts",
    },
    {
        name: "Lecturers",
        icon: <Presentation />,
        slug: "/dashboard/lecturers",
    },
    {
        name: "SRC Members",
        icon: <Users />,
        slug: "/dashboard/members",
    },
];

const SideNav = () => {
    const [activeItem, setActiveItem] = useState("Home");

    return (
        <div className="flex flex-col justify-between md:w-full lg:w-52  h-full">
            <div>
                <div className="pb-5 lg:p-5">
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
                        <Link href={_?.slug}
                            className={`block pl-3 py-2 hover:bg-green-400 border-b lg:mx-2 my-1 lg:rounded lg:border-t ${activeClass}`}
                            key={index}
                        >
                            <div className="flex items-center gap-3 cursor-pointer">
                                {_?.icon}
                                {_?.name}
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className="flex flex-col gap-2 mx-2">
                <Dialog>
                    <DialogTrigger className="w-full">
                        <div
                            className=" flex items-center justify-center gap-3 rounded text-gray-100 p-3 bg-green-600 border-2 border-green-700 font-semibold cursor-pointer"
                        >
                            <Edit />
                            Create Post
                        </div>
                    </DialogTrigger>

                    <DialogContent className="bg-white rounded-xl">
                        <DialogHeader>
                            <DialogTitle>Add Post</DialogTitle>
                            <DialogDescription>
                                Click the submit button when done.
                            </DialogDescription>
                        </DialogHeader>

                        <AddPost />
                    </DialogContent>
                </Dialog>

                <div
                    className="flex items-center justify-center gap-3 rounded mb-2 bg-gray-400 p-3 border-2 border-gray-500 font-semibold cursor-pointer"
                //   onClick={handleLogout}
                >
                    <LogOut />
                    Sign out
                </div>
            </div>
        </div>
    )
}

export default SideNav