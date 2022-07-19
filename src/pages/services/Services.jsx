import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 mt-10" id="ourservices">
      <h1 className="text-3xl font-bold text-primary">Our Services</h1>
      <ServiceCard />
    </section>
  );
};

export default Services;
