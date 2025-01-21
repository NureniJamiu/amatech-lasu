import { ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabStyle = `'bg-gray-400 px-2 text-sm md:text-base py-3 leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-500 data-[state=active]:text-green-600 data-[state=active]:border-b data-[state=active]:border-b-green-600 cursor-pointer`;

interface Course {
  courseCode: string;
  courseTitle: string;
  creditUnit: string;
  status: string;
}

interface LevelCoursesProps {
  level: string;
  firstSemester: Course[];
  secondSemester?: Course[];
}

const LevelCourses = ({
  level,
  firstSemester,
  secondSemester,
}: LevelCoursesProps) => {
  return (
    <div className="mt-5">
      <p className="text-2xl text-green-600 font-semibold py-2 mb-1 mx-5 text-center">
        {level} Level
      </p>
      <div className="bg-slate-200 rounded min-h-[120px] md:p-5 overflow-x-auto">
        <Tabs defaultValue="firstSemester" className="">
          <TabsList className="space-x-2 w-full">
            <TabsTrigger value="firstSemester" className={`${tabStyle}`}>
              1st Semester
            </TabsTrigger>
            <TabsTrigger value="secondSemester" className={`${tabStyle}`}>
              2nd Semester
            </TabsTrigger>
          </TabsList>
          <TabsContent value="firstSemester" className="overflow-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="text-left bg-gray-100 rounded-2xl">
                  <th className="px-2 lg:px-5 py-3">Course Code</th>
                  <th className="px-2 lg:px-5 py-3">Course Title</th>
                  <th className="px-2 lg:px-5 py-3">Credit Unit</th>
                  <th className="px-2 lg:px-5 py-3">Status </th>
                </tr>
              </thead>
              <tbody className="px-2 lg:px-5">
                {firstSemester?.map((course: any) => (
                  <tr key={course?.courseCode} className="even:bg-gray-100">
                    <td className="px-2 lg:px-5 py-1 uppercase">
                      {course?.courseCode}
                    </td>
                    <td className="px-2 lg:px-5 py-1">{course?.courseTitle}</td>
                    <td className="px-2 lg:px-5 py-1">{course?.creditUnit}</td>
                    <td className="px-2 lg:px-5 py-1">{course?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabsContent>
          <TabsContent value="secondSemester" className="overflow-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="text-left bg-gray-100 rounded-2xl">
                  <th className="px-2 lg:px-5 py-3">Course Code</th>
                  <th className="px-2 lg:px-5 py-3">Course Title</th>
                  <th className="px-2 lg:px-5 py-3">Credit Unit</th>
                  <th className="px-2 lg:px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="px-2 lg:px-5">
                {secondSemester?.map((course: any) => (
                  <tr key={course.courseCode} className="even:bg-gray-100">
                    <td className="px-2 lg:px-5 py-1 uppercase">
                      {course?.courseCode}
                    </td>
                    <td className="px-2 lg:px-5 py-1">{course?.courseTitle}</td>
                    <td className="px-2 lg:px-5 py-1">{course?.creditUnit}</td>
                    <td className="px-2 lg:px-5 py-1">{course?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!secondSemester && (
              <div className=" mt-5 text-center text-gray-500 italic w-full">
                Students are on Industrial Attachment.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LevelCourses;
