import React from "react";
import IntroSection from "../components/IntroSection";
import OpeningHours from "../components/OpeningHours";
import Services from "../pages/Services";

const Home = () => {
  return (
    <>
      <IntroSection />
      <OpeningHours />
      <Services />
    </>
  );
};

export default Home;
