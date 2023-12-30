"use client";

import { useEffect, useState } from "react";

import TitleHero from "../../../_components/TitleHero";
import MemberCard from "../../../_components/MemberCard";

import axios from "axios";
import { Loader } from "lucide-react";

const Legislative = () => {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                const response = await axios.get("/api/members/legislative");
                setMembers(response?.data?.legislatives);
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }
        fetchData();
    }, []);

    if (!members) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Error loading members. Please try again.</p>
            </div>
        );
    }

    return (
        <section className=" bg-[#f3f1f1] pb-8">
            <TitleHero title="Students Legislative Council (SLC)" />

            {members && !isLoading ? <div>
                <div className="text-center py-8 px-8 md:px-24">
                    <h2 className="text-3xl">
                        Meet Our{" "}
                        <span className="text-[#227e5f] font-semibold">
                            Legislative Members
                        </span>
                    </h2>
                    <span className="italic">
                        Welcome the Legislative Members of the 21st Amatech Community
                    </span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 md:px-24">
                    {members.map((member, index) => (
                        <MemberCard
                            key={index}
                            data={member}
                        />
                    ))}
                </div>
            </div> : <div className="flex items-center justify-center h-[calc(100vh-200px)]">
                <Loader size={60} className="animate-spin" color="gray" />
            </div>}
        </section>
    );
};

export default Legislative;
