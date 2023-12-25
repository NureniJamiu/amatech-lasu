import CgpaCalculatorForm from "@/app/(web)/_components/CgpaCalculatorForm";
import TitleHero from "@/app/(web)/_components/TitleHero";
import React from "react";

const Page = () => {
    return (
        <section>
            <TitleHero title="CGPA Calculator" />
            <div className="px-3 md:px-12 lg:px-24">
                <div className="my-5">
                    <div className="my-5">
                        <ul className="hidden lg:flex lg:items-center lg:justify-center gap-3">
                            <li><b>C.U :</b> Credit Units ||</li>
                            <li><b>T.C.U :</b> Total Credit Units ||</li>
                            <li><b>G.P : </b>Grade Points ||</li>
                            <li><b>T.G.P :</b> Total Grade Points ||</li>
                            <li><b>Q.P : </b>Quality Points ||</li>
                            <li><b>T.Q.P :</b> Total Quality Points</li>
                        </ul>
                    </div>
                    <div className="bg-slate-200 rounded min-h-[120px] p-5">
                        <CgpaCalculatorForm />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Page;
