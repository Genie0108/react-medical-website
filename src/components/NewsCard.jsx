import React from "react";

const NewsCard = ({ img, headline, date }) => {
  return (
    <div className="flex items-center md:items-start px-2 pb-3 lg:pl-5 lg:pr-5 lg:pb-6 xl:pb-[55px]">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="stethescope"
          className="w-60 md:w-24 cursor-pointer transition duration-500 ease-in hover:scale-110 hover:brightness-75"
        />
      </div>
      <div className="pl-3">
        <h1 className="text-black text-base font-semibold leading-5 hover:text-primaryDark hover:cursor-pointer">
          {headline}
        </h1>
        <p className="text-gray-500 text-sm pt-2">{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
