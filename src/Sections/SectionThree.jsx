import React from "react";
import Testimonials from "../components/Testimonials";
import logo from "../assets/icons/logo.svg";

const SectionThree = () => {
  return (
    <section className=" max-lg:mx-5">
      <div className="text-center lg:text-right lg:pr-[62px] mb-[40px]">
        <h3 className="text-[25px] font-medium leading-[30px] mb-5 ">
          Testimonials
        </h3>
        <hr className="border-t-[1px] border-[#E5E5E6] " />
      </div>
      <div className="lg:h-[136px] w-fit flex gap-10 ">
        <div className="flex items-end w-[60px] max-lg:hidden ">
          <img src={logo} alt="logo" className="w-[60px]" />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
