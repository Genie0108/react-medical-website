import React from "react";

const Wehave = ({ title, description, background, img }) => {
  return (
    <>
      <div className={`w-full md:w-1/3 ${background}`}>
        <div className="px-10 py-7 flex flex-col items-center justify-center text-white relative 2xl:px-16 xl:h-80">
          <div className="w-20">
            <img src={img} alt="monitoring system" />
          </div>
          <div className="text-center md:text-center pt-5">
            <h1 className="text-white text-xl font-semibold">{title}</h1>
            <p className="text-white pt-2 text-base leading-6">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wehave;
