import React from "react";
import Layout from "./Layout";
import IntroSection from "../components/IntroSection";
import OpeningHours from "../components/OpeningHours";

const Home = () => {
  return (
    <>
      <Layout />
      <IntroSection />
      <OpeningHours />
    </>
  );
};

export default Home;
