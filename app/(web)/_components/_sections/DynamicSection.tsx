import Image from "next/image";
import React from "react";


import { Button } from "@/components/ui/button";

import { sectionContents } from "../../_mock";


const DynamicSection = () => {
    return (
        <>
            {sectionContents.map((section, index) => {
                const isIndexOdd = index % 2 == 1

                return (
                    <section
                        key={index}
                        className={`flex flex-col justify-center items-center bg-[#fafafa] px-8 md:px-24 py-10 text-zinc-800 ${isIndexOdd && "bg-zinc-100"}`}
                    >
                        <div className={`flex flex-col-reverse md:flex-row items-center gap-10 w-full md:max-w-6xl ${isIndexOdd && "md:flex-row-reverse"}`}>
                            <div className="flex-1">
                                <div className={`text-center md:text-left md:w-96 ${isIndexOdd && "md:float-right md:text-right"}`}>
                                    <h2 className="text-2xl mb-3 font-bold">{section.title}</h2>
                                    <p className="text-zinc-700 mb-5">{section.bodyText}</p>
                                    <Button className="btn-gradient rounded">{section.btnText}</Button>
                                </div>
                            </div>
                            <div className=" flex-1">
                                <Image src={section.image} alt="mission" width={400} height={400} className={`${isIndexOdd ? "float-left" : "float-right"}`} />
                            </div>
                        </div>
                    </section>
                )
            })}
        </>
    );
};

export default DynamicSection;
