import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import ServiceList from "../data/Services";

const ServiceCard = () => {
  return (
    <div className="mt-10 flex items-center gap-x-16 gap-y-8 flex-wrap md:gap-x-8 xl:gap-x-16">
      {ServiceList.map((service) => (
        <div
          key={service.id}
          className="max-w-[380px] xs:w-[40%] sm:w-[30%] lg:w-[29%]"
        >
          <img src={service.img} alt="human lung" />
          <h2 className="mt-5 text-xl font-semibold text-primary">
            {service.title}
          </h2>
          <p className="mt-3">{service.text}</p>
          <div className="mt-3 flex items-center gap-x-2">
            <Link to="" className="text-base font-medium text-gray-500">
              Learn More
            </Link>
            <i>
              <IoIosArrowRoundForward size="35px" fill="grey" />
            </i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
