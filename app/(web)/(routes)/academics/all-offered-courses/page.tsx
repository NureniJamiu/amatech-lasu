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
  secondSemester500,
} from "@/app/(web)/_mock/allCourses";

const Page = () => {
  return (
    <section>
      <TitleHero title="All courses" />

      <div className="max-w-7xl mx-auto py-5">
        <div className="text-center px-8 md:px-0 pt-8">
          <h2 className="text-3xl">
            A Reference To All Of{" "}
            <span className="text-[#227e5f] font-semibold">Our Courses</span>
          </h2>
          <span className="text-sm md:text-base italic">
            A comprehensive list of all the courses offered across the dept.
          </span>
        </div>
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
        <LevelCourses level="400" firstSemester={firstSemester400} />

        {/* 500 LEVEL  */}
        <LevelCourses
          level="500"
          firstSemester={firstSemester500}
          secondSemester={secondSemester500}
        />
      </div>
    </section>
  );
};

export default Page;
