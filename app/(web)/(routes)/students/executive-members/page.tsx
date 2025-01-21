"use client";

import { useEffect, useState } from "react";

import MemberCard from "../../../_components/MemberCard";
import TitleHero from "../../../_components/TitleHero";
import axios from "axios";
import { Loader } from "lucide-react";

const Executive = () => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/members/executive");
        setMembers(response?.data?.executives);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
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
    <section className="bg-[#f3f1f1] pb-8">
      <TitleHero title="Students Executive Council (SEC)" />
      {members && !isLoading ? (
        <div className="max-w-7xl mx-auto">
          <div className="text-center px-8 md:px-24 py-8">
            <h2 className="text-3xl">
              Meet Our{" "}
              <span className="text-[#227e5f] font-semibold">
                Executive Members
              </span>
            </h2>
            <span className="italic">
              Welcome the Executive Members of the 23rd Amatech Community
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-8 md:px-0">
            {members.map((member: any, index: number) => (
              <MemberCard key={index} data={member} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <Loader size={60} className="animate-spin" color="gray" />
        </div>
      )}
    </section>
  );
};

export default Executive;
