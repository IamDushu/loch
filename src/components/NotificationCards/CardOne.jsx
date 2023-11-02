import React from "react";
import cardBell from "../../assets/icons/cardBell.svg";

const CardOne = () => {
  return (
    <div className="w-[189.7px] h-[171.5px] rounded-[8.4px] drop-shadow-card bg-white text-grey-900 p-[14px]">
      <div className="flex justify-between mb-[14px]">
        <img src={cardBell} alt="bell" className="w-[28px]" />
        <p className="text-[9.1px] font-semibold leading-[10.92px]">Save</p>
      </div>
      <h5 className="w-[129px] text-sm leading-[16.8px] font-medium mb-[15.5px]">
        We’ll be sending notifications to you here
      </h5>
      <div className="w-[161.7px] h-[35px] bg-white px-[11.2px] py-[8.4px] rounded-[5.6px] border-[0.7px] border-[#D4D4D4]">
        <p className="text-[13px] font-medium leading-[15.6px]">
          hello@loch.one
        </p>
      </div>
    </div>
  );
};

export default CardOne;
