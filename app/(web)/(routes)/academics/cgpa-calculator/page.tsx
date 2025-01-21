import CgpaCalculatorForm from "@/app/(web)/_components/CgpaCalculatorForm";
import TitleHero from "@/app/(web)/_components/TitleHero";
import React from "react";

const Page = () => {
  return (
    <section>
      <TitleHero title="CGPA Calculator" />
      <div className="max-w-7xl mx-auto px-3 md:px-0 mb-16">
        <div className="my-5">
          <div className="text-center px-8 md:px-24 py-8">
            <h2 className="text-3xl">
              Calculate CGPA{" "}
              <span className="text-[#227e5f] font-semibold">With Ease</span>
            </h2>
            <span className="italic">
              Plan effectively ahead for the next semester
            </span>
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
