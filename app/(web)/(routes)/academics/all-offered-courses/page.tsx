import React from "react";

import TitleHero from "@/app/(web)/_components/TitleHero";
import LevelCourses from "@/app/(web)/_components/LevelCourses";

// all courses
import {
    firstSemester100,
    secondSemester100,
    firstSemester200,
    secondSemester200,
    firstSemester300,
    secondSemester300,
    firstSemester400,
    firstSemester500,
    secondSemester500
} from "@/app/(web)/_mock/allCourses";


const Page = () => {
    // console.log("FIRST_SEMESTER", firstSemester100)
    return <section>
        <TitleHero title="All courses" />

        <div className="py-5">
            {/* 100 LEVEL  */}
            <LevelCourses
                level="100"
                firstSemester={firstSemester100}
                secondSemester={secondSemester100}
            />


            {/* 200 LEVEL  */}
            <LevelCourses
                level="200"
                firstSemester={firstSemester200}
                secondSemester={secondSemester200}
            />


            {/* 300 LEVEL  */}
            <LevelCourses
                level="300"
                firstSemester={firstSemester300}
                secondSemester={secondSemester300}
            />

            {/* 400 LEVEL  */}
            <LevelCourses
                level="400"
                firstSemester={firstSemester400}
            // secondSemester={secondSemester300}
            />

            {/* 500 LEVEL  */}
            <LevelCourses
                level="500"
                firstSemester={firstSemester500}
                secondSemester={secondSemester500}
            />

        </div>


    </section>;
};

export default Page;
