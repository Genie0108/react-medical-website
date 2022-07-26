import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ChairmanMessage = () => {
  return (
    <div className="flex items-start flex-col gap-y-5 md:flex-row">
      <img
        src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/p-8-400x400.jpg"
        alt="chairman"
        className="mt-4 rounded-t-md w-[70%]"
      />
      <div className="md:pl-8 lg:py-16">
        <i>
          <ImQuotesLeft size="40px" fill="rgb(10, 124, 139)" />
        </i>
        <p className="py-2 text-base text-black">
          At MedCare our vision is to be the most well regarded healthcare
          provider in India committed to the highest standards of clinical
          excellence and patient care, supported by latest technology and
          cutting edge research.
        </p>
        <p className="py-2 text-base text-black">
          We ask more of ourselves, so we can give more to our patients. We push
          the boundaries of excellence in everything we do, so we can deliver
          the highest standards in patient-centred care.
        </p>
        <p className="py-2 text-base text-black">
          Every day we come to honour a higher purpose -{" "}
          <strong className="text-primary">To serve. To excel.</strong>
        </p>
        <h2 className="mt-3 text-xl font-bold text-primary">Full Name</h2>
        <p className="py-1 text-base text-black">
          Chairman & Managing Director
        </p>
      </div>
    </div>
  );
};

export default ChairmanMessage;
