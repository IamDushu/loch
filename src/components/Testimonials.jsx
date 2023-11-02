import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="flex max-lg:flex-col gap-5">
      <motion.div
        className="flex flex-col rounded-[12px] bg-white p-5 gap-5 lg:w-[353px] lg:h-[136px]"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={1}
      >
        <div className="flex gap-2 items-center">
          <h5 className="text-base font-semibold leading-[19.2px] text-grey-900">
            Jack F
          </h5>
          <p className="text-[13px] text-grey-400 font-medium leading-[15.6px]">
            Ex Blackrock PM
          </p>
        </div>
        <p className="text-base font-medium leading-[19.2px] text-primary-500">
          “Love how Loch integrates portfolio analytics and whale watching into
          one unified app.”
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col rounded-[12px] bg-white p-5 gap-5 lg:w-[353px]  lg:h-[136px]"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={1}
      >
        <div className="flex gap-2 items-center">
          <h5 className="text-base font-semibold leading-[19.2px] text-grey-900">
            Yash P
          </h5>
          <p className="text-[13px] text-grey-400 font-medium leading-[15.6px]">
            Research, 3poch Crypto Hedge Fund
          </p>
        </div>
        <p className="text-base font-medium leading-[19.2px] text-primary-500">
          “I use Loch everyday now. I don't think I could analyze crypto whale
          trends markets without it. I'm addicted!”
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col rounded-[12px] bg-white p-5 gap-5 lg:w-[531px]  lg:h-[136px]"
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={1}
      >
        <div className="flex gap-2 items-center">
          <h5 className="text-base font-semibold leading-[19.2px] text-grey-900">
            Shiv S
          </h5>
          <p className="text-[13px] text-grey-400 font-medium leading-[15.6px]">
            Co-Founder Magik Labs
          </p>
        </div>
        <p className="text-base font-medium leading-[19.2px] text-primary-500">
          “Managing my own portfolio is helpful and well designed. What’s really
          interesting is watching the whales though. No one else has made whale
          tracking so simple.”
        </p>
      </motion.div>
    </div>
  );
};

export default Testimonials;
