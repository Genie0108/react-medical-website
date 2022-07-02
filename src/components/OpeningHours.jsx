import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
const EmergencyService = () => {
  return (
    <div className="max-w-[1080px] mx-auto px-2 py-10 flex items-start gap-x-5 flex-col gap-y-5 sm:gap-y-8 bg-gradient-to-r from-primaryDark to-primary md:flex-row lg:px-10 lg:relative -top-14 left-0 right-0">
      <div className="">
        <div className="flex items-center gap-x-3">
          <i>
            <FaHeartbeat size="25px" fill="white" />
          </i>
          <h1 className="text-white text-xl font-semibold">
            Emergency Service
          </h1>
        </div>
        <p className="text-white text-base pt-3">
          An emergency department (ED), also known as an accident & emergency
          department (A&E), emergency room (ER), emergency ward (EW) or casualty
          department, is a medical treatment.
        </p>
        <h1 className="text-white text-xl font-medium pt-5">
          Call : +977-98........
        </h1>
      </div>
      {/* right part */}
      <div className="">
        <div className="flex items-center gap-x-3">
          <i>
            <AiOutlineClockCircle size="25px" fill="white" />
          </i>
          <h1 className="text-white text-xl font-semibold">Opening Hours</h1>
        </div>
        <p className="text-white text-base pt-3">
          Since our establishment in the 2000 B.S. we have been serving our best
          to make all of us free from illness, pain, and diseases. We are
          located in the heart of our capital Kathmandu.
        </p>
        <div className="border-white border-b-[1px] text-white pb-7 py-4">
          <span className=" float-left">Mon - Fri</span>
          <span className="float-right">09:00 - 17:00</span>
        </div>
        <div className="border-white border-b-[1px] text-white pb-7 pt-4">
          <span className=" float-left">Sat - Sun</span>
          <span className="float-right">10:00 - 14:00</span>
        </div>
      </div>
    </div>
  );
};

export default EmergencyService;
