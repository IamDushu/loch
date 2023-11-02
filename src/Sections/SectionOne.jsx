import React from "react";
import Notifications from "../components/NotificationCards/Notifications";
import bell from "../assets/icons/bell.svg";
import { SectionOneDetails } from "../constants";

const SectionOne = () => {
  return (
    <section className=" h-[304px] mb-[190px] lg:mb-[61px] lg:justify-between  lg:flex">
      <div className="flex flex-col gap-4 max-lg:px-8 max-lg:mb-10">
        <img src={bell} alt="Bell_icon" className="w-8" />
        <h1 className="md:w-[313px] text-[31px] font-medium leading-[37.2px] drop-shadow-text">
          {SectionOneDetails.title}
        </h1>
        <p className="text-base font-medium leading-[19.2px] md:w-[322px] opacity-[0.7]">
          {SectionOneDetails.message}
        </p>
      </div>
      <div className="lg:w-[407px] bg-linear slider max-lg:my-5">
        <div className="slide-track">
          <Notifications />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
