import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabStyle = `'bg-gray-400 px-2 text-sm md:text-base py-3 leading-none select-none first:rounded-tl-md last:rounded-tr-md hover:text-green-500 data-[state=active]:text-green-600 data-[state=active]:border-b data-[state=active]:border-b-green-600 cursor-pointer`

const LevelCourses = () => {
    return <div className="mx-2 md:mx-14 lg:mx-24 mt-5">
        <p className="text-2xl text-green-600 font-semibold py-2 mb-1 mx-5 text-left md:text-center">100 Level</p>
        <div className="bg-slate-200 rounded min-h-[120px] p-5">
            <Tabs defaultValue="executive" className="">
                <TabsList className='space-x-2 w-full'>
                    <TabsTrigger value="executive" className={`${tabStyle}`}>1st Semester</TabsTrigger>
                    <TabsTrigger value="legislative" className={`${tabStyle}`}>2nd Semester</TabsTrigger>
                </TabsList>
                <TabsContent value="executive">
                    <table className="col-span-3 w-full">
                        <thead>
                            <tr className="text-left bg-gray-100 rounded-2xl">
                                <th className="px-5 py-3">Course Code</th>
                                <th className="px-5 py-3">Course Title</th>
                                <th className="px-5 py-3">Credit Unit</th>
                            </tr>
                        </thead>
                        <tbody className="px-5">
                            <tr className="even:bg-gray-100" >
                                <td className="px-5 py-1 uppercase">MTE101</td>
                                <td className="px-5 py-1">Statistics for Project Managers</td>
                                <td className="px-5 py-1">2</td>
                            </tr>
                            <tr className="even:bg-gray-100" >
                                <td className="px-5 py-1 uppercase">MTE103</td>
                                <td className="px-5 py-1">Workshop Practice</td>
                                <td className="px-5 py-1">1</td>
                            </tr>
                        </tbody>
                    </table>
                </TabsContent>
                <TabsContent value="legislative">
                    <table className="col-span-3 w-full">
                        <thead>
                            <tr className="text-left bg-gray-100 rounded-2xl">
                                <th className="px-5 py-3">Course Code</th>
                                <th className="px-5 py-3">Course Title</th>
                                <th className="px-5 py-3">Credit Unit</th>
                            </tr>
                        </thead>
                        <tbody className="px-5">
                            <tr className="even:bg-gray-100" >
                                <td className="px-5 py-1 uppercase">MTE110</td>
                                <td className="px-5 py-1">Statistics for Project Managers II</td>
                                <td className="px-5 py-1">2</td>
                            </tr>
                            <tr className="even:bg-gray-100" >
                                <td className="px-5 py-1 uppercase">MTE106</td>
                                <td className="px-5 py-1">Science, Technology & Society</td>
                                <td className="px-5 py-1">2</td>
                            </tr>
                            <tr className="even:bg-gray-100" >
                                <td className="px-5 py-1 uppercase">MTE102</td>
                                <td className="px-5 py-1">Workshop Practice II</td>
                                <td className="px-5 py-1">1</td>
                            </tr>
                        </tbody>
                    </table>
                </TabsContent>
            </Tabs>
        </div>
    </div>;
};

export default LevelCourses;
