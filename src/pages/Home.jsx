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
import WeOffer from "../components/WeOffer";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

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
      <WeOffer />
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
