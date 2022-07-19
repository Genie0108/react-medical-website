import React from "react";
import IntroSection from "./IntroSection";
import EmergencyService from "./EmergencyService";
import Services from "../services/Services";
import HospitalInfo from "../../components/HospitalInfo";
import OurExpertises from "./OurExpertise";
import TabGallery from "./TabGallery";
import OurDoctor from "../doctors/OurDoctor";
import Certificates from "../../components/Certificates";
import NewsLetterSubscribtion from "./NewsLetterSubscribtion";
import RecentNews from "./RecentNews";
import WeOffer from "../../components/WeOffer";
import Testimonial from "./Testimonial";
import Contact from "../../components/Contact";
import Footer from "../../layouts/Footer";
import ScrollToTop from "../../components/ui/ScrollToTop";

const Home = () => {
  return (
    <>
      <IntroSection />
      <EmergencyService />
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
