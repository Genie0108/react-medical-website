import React from "react";

const ValuesCard = ({ img, title, desc }) => {
  return (
    <div className="w-full md:w-[47%] border-2 border-primary rounded-md">
      <div className="py-4 flex items-center bg-primary rounded-t-md">
        <i className="px-4">
          <img src={img} alt="icons" />
        </i>
        <h1 className="text-xl font-semibold text-white uppercase">{title}</h1>
      </div>
      <p className="py-4 px-4 text-sm text-gray-600">{desc}</p>
    </div>
  );
};

export default ValuesCard;
