import React from "react";
import values from "../../data/OurValue";
import leaders from "../../data/OurLeader";
import ValuesCard from "../../components/cards/ValuesCard";
import Heading from "../../components/ui/Heading";
import AboutMedCare from "./AboutMedCare";
import ChairmanMessage from "./ChairmanMessage";
import LeadersCard from "../../components/cards/LeadersCard";
import Footer from "../../layouts/Footer";
import ScrollToTop from "../../components/ui/ScrollToTop";

const AboutUs = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to top,rgba(10, 124, 139,0.4) 70%,rgba(10, 124, 139,0.5) 100%), url(/images/hospital_building.jpg)`,
        }}
        className="mt-10 w-full bg-cover bg-no-repeat bg-center h-96 min-h-max saturate-150 xl:h-[500px]"
      ></div>
      <div className="bg-primary">
        <h1 className="max-w-[1200px] mx-auto px-2 py-5 text-3xl font-semibold text-white">
          About MedCare
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto px-2">
        <AboutMedCare />
        <section>
          <Heading text="Chairman Message" />
          <ChairmanMessage />
        </section>
        <section className="mt-8">
          <Heading text="Our Values" />
          <div className="mt-5 flex gap-y-10 flex-wrap justify-between">
            {values.map((value) => (
              <ValuesCard
                key={value.id}
                img={value.img}
                title={value.title}
                desc={value.description}
              />
            ))}
          </div>
        </section>
        <section className="mt-14">
          <Heading text="Our Leaders" />
          <div className="mt-10 px-2 sm:px-5 flex flex-wrap gap-6 sm:gap-6 sm:justify-start lg:gap-8 xl:gap-10">
            {leaders.map((leader) => (
              <LeadersCard
                key={leader.id}
                img={leader.img}
                name={leader.name}
                position={leader.position}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
