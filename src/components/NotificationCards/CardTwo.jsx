import React from "react";
import chart from "../../assets/icons/chart.svg";
import triangle from "../../assets/icons/triangle-down.svg";

const CardTwo = () => {
  return (
    <div className="w-[189.7px] h-[171.5px] rounded-[8.4px] drop-shadow-card bg-white text-grey-900 p-[14px]">
      <div className="flex justify-between mb-[55.3px] items-start">
        <img src={chart} alt="bell" className="w-[28px]" />
        <input
          type="checkbox"
          className="rounded-[4.2px] h-[14px] w-[14px]"
          checked
        />
      </div>
      <h5 className="w-[129px] text-[11.2px] leading-[13.44px] font-medium mb-[14.6px]">
        Notify me when any wallets move more than
      </h5>
      <div className=" w-[66.4px] h-[19.6px] p-[4.2px] flex gap-[2.8px] rounded-[2.8px] bg-grey-50">
        <p className="text-[9.1px] font-medium leading-[10.92px]">$1,000.00</p>
        <img src={triangle} alt="dropdown" />
      </div>
    </div>
  );
};

export default CardTwo;
