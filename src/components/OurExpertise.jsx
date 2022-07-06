import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import Form from "./Form";

const OurExpertise = () => {
  return (
    <section className="w-full bg-secondary md:flex">
      {/* <div className="max-w-[1200px] mx-auto px-2"></div> */}
      <ExpertiseCard />
      <Form />
    </section>
  );
};

export default OurExpertise;
