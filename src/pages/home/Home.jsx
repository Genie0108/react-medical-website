import React from "react";
import IntroSection from "./IntroSection";
import EmergencyService from "./EmergencyService";
import ServiceCard from "../services/ServiceCard";
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
      <main>
        <IntroSection />
        <EmergencyService />
        <ServiceCard />
        <HospitalInfo />
        <OurExpertises />
        <TabGallery />
        <OurDoctor />
        <Certificates />
        <NewsLetterSubscribtion />
      </main>
      <aside>
        <RecentNews />
        <WeOffer />
        <Testimonial />
        <Contact />
      </aside>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
