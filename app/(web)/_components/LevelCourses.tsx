import { ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabStyle = `'bg-gray-400 px-2 text-sm md:text-base py-3 leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-500 data-[state=active]:text-green-600 data-[state=active]:border-b data-[state=active]:border-b-green-600 cursor-pointer`

// Type Testing = { courseCode: string, courseTitle: string, creditUnit: string; status: string; }

const LevelCourses = (
    { level, firstSemester, secondSemester }: { level: string, firstSemester: ReactNode, secondSemester: ReactNode },
) => {
    console.log("FIRST_SEMESTER", firstSemester)
    return <div className="mx-2 md:mx-14 lg:mx-24 mt-5">
        <p className="text-2xl text-green-600 font-semibold py-2 mb-1 mx-5 text-left md:text-center">{level} Level</p>
        <div className="bg-slate-200 rounded min-h-[120px] p-5">
            <Tabs defaultValue="firstSemester" className="">
                <TabsList className='space-x-2 w-full'>
                    <TabsTrigger value="firstSemester" className={`${tabStyle}`}>1st Semester</TabsTrigger>
                    <TabsTrigger value="secondSemester" className={`${tabStyle}`}>2nd Semester</TabsTrigger>
                </TabsList>
                <TabsContent value="firstSemester">
                    <table className="w-full overflow-auto">
                        <thead>
                            <tr className="text-left bg-gray-100 rounded-2xl">
                                <th className="px-5 py-3">Course Code</th>
                                <th className="px-5 py-3">Course Title</th>
                                <th className="px-5 py-3">Credit Unit</th>
                                <th className="px-5 py-3">Status </th>
                            </tr>
                        </thead>
                        <tbody className="px-5">
                            {
                                firstSemester?.map((course: any) => (
                                    <tr key={course?.courseCode} className="even:bg-gray-100" >
                                        <td className="px-5 py-1 uppercase">{course?.courseCode}</td>
                                        <td className="px-5 py-1">{course?.courseTitle}</td>
                                        <td className="px-5 py-1">{course?.creditUnit}</td>
                                        <td className="px-5 py-1">{course?.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </TabsContent>
                <TabsContent value="secondSemester">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left bg-gray-100 rounded-2xl">
                                <th className="px-5 py-3">Course Code</th>
                                <th className="px-5 py-3">Course Title</th>
                                <th className="px-5 py-3">Credit Unit</th>
                                <th className="px-5 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className="px-5">
                            {
                                secondSemester?.map((course: any) => (
                                    <tr key={course.courseCode} className="even:bg-gray-100" >
                                        <td className="px-5 py-1 uppercase">{course?.courseCode}</td>
                                        <td className="px-5 py-1">{course?.courseTitle}</td>
                                        <td className="px-5 py-1">{course?.creditUnit}</td>
                                        <td className="px-5 py-1">{course?.status}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    {!secondSemester && <div className=" mt-5 text-center text-gray-500 italic w-full">Students are on Industrial Attachment.</div>}
                </TabsContent>
            </Tabs>
        </div>
    </div>;
};

export default LevelCourses;
