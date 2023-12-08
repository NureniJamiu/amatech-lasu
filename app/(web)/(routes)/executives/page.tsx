"use client";

import { useEffect, useState } from "react";

import MemberCard from "../../_components/MemberCard";
import TitleHero from "../../_components/TitleHero";
import axios from "axios";

const Executive = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/members/executive");
            setMembers(response?.data?.executives);
        }
        fetchData();
    }, []);
    return (
        <section className="bg-[#f3f1f1] pb-8">
            <TitleHero title="Students Executive Council (SEC)" />
            <div className="text-center px-8 md:px-24 py-8">
                <h2 className="text-3xl">
                    Meet Our{" "}
                    <span className="text-[#227e5f] font-semibold">
                        Executive Members
                    </span>
                </h2>
                <span className="italic">
                    Welcome the Executive Members of the 21st Amatech Community
                </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-8 md:px-24">
                {members.map((member: any, index: number) => (
                    <MemberCard
                        key={index}
                        data={member}
                    />
                ))}
            </div>
        </section>
    );
};

export default Executive;
