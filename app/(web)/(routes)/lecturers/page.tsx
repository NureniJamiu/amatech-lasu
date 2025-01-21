"use client";

import { useEffect, useState } from "react";
import TitleHero from "../../_components/TitleHero";
import axios from "axios";
import { Loader } from "lucide-react";
import CustomCarousel from "../../_components/CustomCarousel";

const Page = () => {
  const [lecturers, setLecturers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/lecturer");
        setLecturers(response?.data?.lecturers);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
    fetchData();
    console.log(lecturers);
  }, []);

  console.log(lecturers);

  if (!lecturers) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Error loading lecturers. Please try again.</p>
      </div>
    );
  }

  return (
    <section>
      <TitleHero title="Lecturers" />
      {lecturers && !isLoading ? (
        <div className="my-12 px-8 max-w-7xl mx-auto">
          {lecturers ? (
            <CustomCarousel data={lecturers} />
          ) : (
            "Lecturers not found..."
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <Loader size={60} className="animate-spin" color="gray" />
        </div>
      )}
    </section>
  );
};

export default Page;
