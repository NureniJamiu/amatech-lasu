"use client";

import { useEffect, useState } from "react";

import TitleHero from "../../_components/TitleHero";
import MemberCard from "../../_components/MemberCard";

import axios from "axios";

const Legislative = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/members/legislative");
            setMembers(response?.data?.legislatives);
        }
        fetchData();
    }, []);
    return (
        <section className=" bg-[#f3f1f1] pb-8">
            <TitleHero title="Students Legislative Council (SLC)" />
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
        </section>
    );
};

export default Legislative;
