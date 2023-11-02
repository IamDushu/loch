import React from "react";
import triangle from "../../assets/icons/triangle-down.svg";
import clock from "../../assets/icons/clock.svg";

const CardThree = () => {
  return (
    <div className="w-[189.7px] h-[171.5px] rounded-[8.4px] drop-shadow-card bg-white text-grey-900 p-[14px]">
      <div className="flex justify-between mb-[39.2px] items-start">
        <img src={clock} alt="clock" className="w-[28px]" />
        <input
          type="checkbox"
          className="rounded-[4.2px] h-[14px] w-[14px]"
          checked
        />
      </div>
      <h5 className="w-[114.1px] text-[11.2px] leading-[13.44px] font-medium mb-[9px]">
        Notify me when any wallet dormant for
      </h5>
      <div className=" w-[66.4px] h-[19.6px] p-[4.2px] flex gap-[2.8px] rounded-[2.8px] bg-grey-50 mb-[8.4px]">
        <p className="text-[9.1px] font-medium leading-[10.92px]">
          {`> 30 days`}
        </p>
        <img src={triangle} alt="dropdown" />
      </div>
      <p className="text-[11.2px] leading-[13.44px] font-medium">
        becomes active
      </p>
    </div>
  );
};

export default CardThree;
