import React from "react";

import TitleHero from "@/app/(web)/_components/TitleHero";

const Page = () => {
    return <section>
        <TitleHero title="Admission Requirement" />
        <div className="px-5 md:px-24 py-10">
            <p> Admission into the department is in two categories:</p> <br />
            <p>
                <span className="font-bold text-xl text-green-600">i. Unified Tertiary Matriculation Examination (UTME):</span> The UTME admits prospective students into the 100 Level of various degree programmes in the University.
            </p>
            <br />
            <p className="font-semibold text-xl text-green-600">Requirements: </p>

            <p>
                <span className="font-semibold ">O-Level Subjects:</span> Five (5) credits passes to include English Language, Mathematics, Physics, Chemistry/Biology and any other subject from Economics, Geography, Commerce, Marketing, Accounting, Agricultural Science, Further Mathematics, Statistics, Business Method and Technical at a maximum of two sittings.
            </p> <br />

            <p>
                <span className="font-semibold">UTME Subjects:</span> Use of English, Mathematics, Physics and one other subject.
            </p> <br />

            <p>
                <span className="font-bold text-xl text-green-600">ii. Direct Entry (DE):</span> The Direct Entry admits prospective students into the 200 Level of the Degree Programme.
            </p>
            <br />

            <p className="font-semibold text-xl text-green-600">Requirement: </p>
            <p>Two A-Level passes in any of Economics, Geography, Biology, Physics, Chemistry, Mathematics, Economics & Business Method, in addition to the <b>O-Level </b>requirements.</p> <br />

            <p className="font-bold text-xl text-green-600">Special Consideration (Waiver) Remarks</p>
            <p>LASU accepts LASU JUPEB & LASU Diploma in relevant discipline at upper credit.</p>



        </div>
    </section>;
};

export default Page;
