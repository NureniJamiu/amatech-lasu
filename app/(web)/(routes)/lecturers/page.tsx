"use client";

import { useEffect, useState } from "react";
import TitleHero from "../../_components/TitleHero";
// import LecturerSwiper from "@/components/LecturerSwiper";
import LecturerSwiper from "../../_components/LecturerSwiper";
import axios from "axios";

const Page = () => {
    const [lecturers, setLecturers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/api/lecturer");
            // console.log(response)
            if (response?.data?.status === 200) {
                setLecturers(response?.data?.lecturers);
            } else {
                setLecturers([])
            }
        }
        fetchData();
    }, [lecturers]);


    return (
        <section>
            <TitleHero title="Lecturers" />
            <div className="my-12 px-8 md:px-24">
                {lecturers ? <LecturerSwiper lecturers={lecturers} /> : "Lecturers not found..."}
            </div>
        </section>
    );
};

export default Page;
