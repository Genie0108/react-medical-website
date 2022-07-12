import React from "react";
import IntroSection from "../components/IntroSection";
import OpeningHours from "../components/OpeningHours";
import Services from "../pages/Services";
import HospitalInfo from "../components/HospitalInfo";
import OurExpertises from "../components/OurExpertise";
import TabGallery from "../components/TabGallery";
import OurDoctor from "./doctors/OurDoctor";
import Certificates from "../components/Certificates";
import NewsLetterSubscribtion from "../components/NewsLetterSubscribtion";
import RecentNews from "../components/RecentNews";

const Home = () => {
  return (
    <>
      <IntroSection />
      <OpeningHours />
      <Services />
      <HospitalInfo />
      <OurExpertises />
      <TabGallery />
      <OurDoctor />
      <Certificates />
      <NewsLetterSubscribtion />
      <RecentNews />
    </>
  );
};

export default Home;
