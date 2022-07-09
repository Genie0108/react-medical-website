import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ img, name, profession, bio }) => {
  return (
    <div className="mt-5 max-w-[380px] mx-auto rounded shadow-lg z-10 sm:mx-0">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="cute doctor"
          className="rounded-t-md transition duration-300 ease-in hover:scale-110 hover:brightness-75"
        />
      </div>
      <div className="bg-white text-center py-7">
        <Link to="">
          <h1 className="text-primary text-xl font-bold">{name}</h1>
        </Link>
        <p className="text-base text-gray-600 mt-1">{profession}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
