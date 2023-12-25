import React from "react";

import TitleHero from "@/app/(web)/_components/TitleHero";
import LevelCourses from "@/app/(web)/_components/LevelCourses";


const Page = () => {
    return <section>
        <TitleHero title="All courses" />

        <div className="py-5">
            {/* 100 LEVEL  */}
            <LevelCourses />


            {/* 200 LEVEL  */}
            <LevelCourses />


            {/* 300 LEVEL  */}
            <LevelCourses />
        </div>


    </section>;
};

export default Page;
