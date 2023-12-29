import MemberCard from "@/app/(web)/_components/MemberCard";
import TitleHero from "@/app/(web)/_components/TitleHero";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Avatar from "../../../../../public/avatarmale.webp"

const data = {
    firstname: "John",
    lastname: "Doe",
    bio: "Project Manager & Tech Enthusiast",
    image: Avatar,
    role: "",
    level: "First class graduate",
    linkedin: "",
    twitter: ""
}

const Page = () => {
    return (
        <section className="bg-[#f3f1f1] pb-8">
            <TitleHero title="First Class Graduate(s)" />
            <div className="text-center px-8 md:px-24 py-8">
                <h2 className="text-3xl">
                    Meet Our{" "}
                    <span className="text-[#227e5f] font-semibold">
                        First Class Hero(es)
                    </span>
                </h2>
                <span className="italic">
                    Welcome the First Class Heroes of Amatech Community
                </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-8 md:px-24">
                <div className="relative shadow bg-white rounded-2xl p-5 hover:scale-105 transition-all duration-200 ease-in-out">
                    <div className="flex flex-col text-center justify-center items-center">
                        <div className="relative w-32 h-32">
                            <Image
                                src={data?.image}
                                alt="pro"
                                fill
                                className="object-cover rounded-full border-[5px] border-white shadow shadow-green-900"
                            />
                        </div>
                        <small className="absolute left-3 top-3 bg-yellow-500 uppercase px-1 font-semibold opacity-70 rounded">
                            {data?.role}
                        </small>
                        <div>
                            <div className="border-y my-4 py-2">
                                <h2 className=" text-xl  font-semibold">{data?.firstname + " " + data?.lastname}</h2>
                                <span className="text-lg font-semibold text-green-700">
                                    {`(${data?.level})`}
                                </span>
                            </div>
                            <p className="w-60 mx-auto text-center pb-3">{data?.bio}</p>
                            <div className="flex justify-center items-center gap-3 my-2">
                                <Link
                                    target="_blank"
                                    href={data?.linkedin}
                                    className="flex gap-2 items-center justify-center border-2 border-transparent p-2 w-28 bg-green-600 text-gray-200 rounded"
                                >
                                    <Linkedin />
                                    LinkedIn
                                </Link>
                                <Link
                                    target="_blank"
                                    href={data?.twitter}
                                    className="flex gap-2 border-2  items-center justify-center p-2 w-28 rounded border-green-700 text-green-700"
                                >
                                    <Twitter />
                                    Twitter
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
