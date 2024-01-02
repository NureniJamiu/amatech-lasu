"use client"

import axios from "axios";
import { ArrowRightIcon, User } from "lucide-react";
import React, { useEffect, useState } from "react";

interface CountData {
    posts?: number;
    lecturers?: number;
    executiveMembers?: number;
    legislativeMembers?: number;
}

const DashboardLandingPage = () => {
    const [count, setCount] = useState<CountData>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countResponse = await axios.get("/api/count");
                setCount(countResponse?.data?.count);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="flex flex-col gap-8 mt-3">
            <div className="w-full border bg-white rounded-xl px-5 py-3 ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="hidden md:flex bg-green-200 w-10 h-10 items-center justify-center rounded-full">
                            <User size={32} color="green" />
                        </div>
                        <div>
                            <p className="font-semibold text-zinc-900">
                                Please finish setting up your profile!
                            </p>
                            <p className="text-sm">
                                Let{"'"}s get you ready to make the best of your adminstration
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-1 text-green-700 font-semibold cursor-pointer">
                        Proceed
                        <span>
                            <ArrowRightIcon size={22} color="green" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* CARD  */}
                <div className="flex flex-col relative bg-green-600 h-72 rounded-xl overflow-hidden justify-end cursor-pointer hover:scale-105 transition ease-in-out duration-200">
                    <div className="absolute -top-8 -left-10 w-32 h-32 rounded-full bg-green-400"></div>
                    <div className="absolute -bottom-3 -right-8 w-32 h-32 rounded-full bg-green-400"></div>
                    <div className="p-5 text-3xl text-white font-semibold z-10">
                        <p className="text-5xl">{count?.posts}</p>
                        <p>All Posts</p>
                    </div>
                </div>
                {/* CARD END  */}
                {/* CARD  */}
                <div className="flex flex-col relative bg-emerald-600 h-72 rounded-xl overflow-hidden justify-end cursor-pointer hover:scale-105 transition ease-in-out duration-200">
                    <div className="absolute -top-8 -left-10 w-32 h-32 rounded-full bg-emerald-400"></div>
                    <div className="absolute -bottom-3 -right-8 w-32 h-32 rounded-full bg-emerald-400"></div>
                    <div className="p-5 text-3xl text-white font-semibold z-10">
                        <p className="text-5xl">{count?.executiveMembers}</p>
                        <p>Executive Members</p>
                    </div>
                </div>
                {/* CARD END  */}
                {/* CARD  */}
                <div className="flex flex-col relative bg-slate-600 h-72 rounded-xl overflow-hidden justify-end cursor-pointer hover:scale-105 transition ease-in-out duration-200">
                    <div className="absolute -top-8 -left-10 w-32 h-32 rounded-full bg-slate-400"></div>
                    <div className="absolute -bottom-3 -right-8 w-32 h-32 rounded-full bg-slate-400"></div>
                    <div className="p-5 text-3xl text-white font-semibold z-10">
                        <p className="text-5xl">{count?.legislativeMembers}</p>
                        <p>Legislative Members</p>
                    </div>
                </div>
                {/* CARD END  */}
                {/* CARD  */}
                <div className="flex flex-col relative bg-zinc-400 h-72 rounded-xl overflow-hidden justify-end cursor-pointer hover:scale-105 transition ease-in-out duration-200">
                    <div className="absolute -top-8 -left-10 w-32 h-32 rounded-full bg-zinc-300"></div>
                    <div className="absolute -bottom-3 -right-8 w-32 h-32 rounded-full bg-zinc-300"></div>
                    <div className="p-5 text-3xl text-white font-semibold z-10">
                        <p className="text-5xl">{count?.lecturers}</p>
                        <p>Lecturers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLandingPage;
