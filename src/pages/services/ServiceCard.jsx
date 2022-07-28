import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import ServiceList from "../../data/Services";

const ServiceCard = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 mt-10" id="ourservices">
      <h1 className="text-3xl font-bold text-primary">Our Services</h1>
      <div className="mt-10 flex items-center gap-y-8 flex-wrap justify-between">
        {ServiceList.map((service) => (
          <div key={service.id} className="w-full sm:w-[45%] md:w-[30%]">
            <img src={service.img} alt={`${service.title}`} />
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
    </section>
  );
};

export default ServiceCard;
