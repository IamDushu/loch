import React from "react";
import cardBell from "../assets/icons/cardBell.svg";
import chart from "../assets/icons/chart.svg";
import triangle from "../assets/icons/triangle-down.svg";
import clock from "../assets/icons/clock.svg";

const Notifications = () => {
  return (
    <>
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
          <p className="text-[9.1px] font-medium leading-[10.92px]">
            $1,000.00
          </p>
          <img src={triangle} alt="dropdown" />
        </div>
      </div>
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
          <p className="text-[9.1px] font-medium leading-[10.92px]">
            $1,000.00
          </p>
          <img src={triangle} alt="dropdown" />
        </div>
      </div>
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
    </>
  );
};

export default Notifications;
