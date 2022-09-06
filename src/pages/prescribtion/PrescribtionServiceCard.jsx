import React from "react";

const PrescribtionServiceCard = ({ img, heading, description }) => {
  return (
    <div className="">
      <img src={img} alt="" className="" />
      <h1 className="mt-3 text-2xl sm:text-3xl font-medium font-poppins text-primary leading-8">
        {heading}
      </h1>
      <p className="text-sm tracking-wide font-poppins py-6">{description}</p>
    </div>
  );
};

export default PrescribtionServiceCard;
