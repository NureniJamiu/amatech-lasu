import { ChevronRight } from "lucide-react";
import React from "react";

const TitleHero = ({ title }: { title: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-center bg-gradient-to-l from-green-700 to-green-600 h-60 md:h-72 w-full px-8 md:px-24">
            <h2 className="text-2xl md:text-3xl text-gray-200">{title}</h2>
            <p className="flex items-center gap-2 mt-3 md:mt-8 text-gray-200 text-sm">
                <b>Home</b> <ChevronRight /> {title}
            </p>
        </div>
    );
};

export default TitleHero;
