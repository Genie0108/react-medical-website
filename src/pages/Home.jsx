import React from "react";
import IntroSection from "../components/IntroSection";
import OpeningHours from "../components/OpeningHours";
import Services from "../pages/Services";
import HospitalInfo from "../components/HospitalInfo";
import OurExpertises from "../components/OurExpertise";
import TabGallery from "../components/TabGallery";
const Home = () => {
  return (
    <>
      <IntroSection />
      <OpeningHours />
      <Services />
      <HospitalInfo />
      <OurExpertises />
      <TabGallery />
    </>
  );
};

export default Home;
