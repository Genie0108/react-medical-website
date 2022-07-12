import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const QuickLinkCard = ({ about }) => {
  return (
    <div className="pb-2 mb-5 border-b-2 border-gray-400">
      <button className="w-full flex items-center justify-between">
        <h2 className="text-base text-primaryDark">{about}</h2>
        <HiOutlineArrowNarrowRight size="20px" stroke="grey" />
      </button>
    </div>
  );
};

export default QuickLinkCard;
