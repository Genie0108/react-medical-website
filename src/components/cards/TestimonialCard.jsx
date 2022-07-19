import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const TestimonialCard = ({ experience, img, name, profession }) => {
  return (
    <>
      <div className="pt-5 flex flex-col items-center justify-center sm:pt-10">
        <ImQuotesLeft size="40px" fill="rgb(10, 124, 139)" />
        <p className="px-4 text-base py-8 testimonial italic tracking-wider leading-7 text-center text-gray-600 sm:px-24 sm:leading-8 sm:text-xl">
          {experience}
        </p>
        <div className="flex items-center gap-x-10">
          <img src={img} alt="customer" className="w-14 h-14 rounded-full" />
          <div className="">
            <h1 className="text-xl font-bold text-primary">{name}</h1>
            <p className="text-base text-gray-600">{profession}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
