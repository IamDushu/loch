import React from "react";
import eye from "../assets/icons/eye.svg";
import cohort from "../assets/images/cohorts.png";
import { SectionTwoDetails } from "../constants";

const SectionTwo = () => {
  return (
    <section className="mb-20 lg:mb-[22px] lg:justify-between lg:flex lg:pr-[62px] lg:h-[306px] ">
      <div className="max-lg:mb-5 border-[1.5px] border-primary-200 rounded-[13.5px]">
        <img
          src={cohort}
          alt="cohorts"
          className="lg:w-[335px] lg:h-[306px] w-full h-full rounded-[12px]"
        />
      </div>
      <div className="flex flex-col gap-4  lg:text-right md:w-[500px] lg:w-[305px] lg:items-end pt-[17px]  max-lg:px-8">
        <img src={eye} alt="eye" className="w-8" />
        <h1 className="text-[31px] font-medium leading-[37.2px] drop-shadow-text">
          {SectionTwoDetails.title}
        </h1>
        <p className="text-base font-medium leading-[19.2px]  opacity-[0.7]">
          {SectionTwoDetails.message}
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
