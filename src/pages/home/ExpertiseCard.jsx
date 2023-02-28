import React from "react";
import { Link } from "react-router-dom";
import ExpertiseList from "../../data/Expertises";
import { IoIosArrowRoundForward } from "react-icons/io";

const ExpertiseCard = () => {
  return (
    <div className="px-2 w-full md:w-1/2 pr-5 xl:max-w-[600px] xl:ml-auto">
      <h1 className="text-3xl font-bold text-primary pt-40 ">Our Expertise</h1>
      {ExpertiseList.map((expertise) => (
        <div
          className="mt-10 w-full flex items-start gap-x-5 justify-center sm:justify-start"
          key={expertise.id}
        >
          <div>
            <img
              src={expertise.img}
              alt="human immune system"
              className="max-w-[4rem] text-[rgb(121,121,121)]"
            />
          </div>
          <div className="">
            <h2 className="text-xl font-semibold text-primary">
              {expertise.title}
            </h2>
            <p className="mt-3">{expertise.text}</p>
            <div className="mt-3 flex items-center gap-x-2">
              <Link to="" className="text-base font-medium text-gray-700">
                Learn More
              </Link>
              <i>
                <IoIosArrowRoundForward size="35px" fill="grey" />
              </i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseCard;
