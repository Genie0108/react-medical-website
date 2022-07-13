import React from "react";
import WeOfferCard from "./WeOfferCard";

const Weoffer = () => {
  const offers = [
    {
      id: 1,
      background: "bg-primary",
      img: "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/col-feature-1.png",
      title: "Best Monitoring System",

      description:
        "Despite advances in technology and understanding of biological systems, drug discovery is still a lengthy, expensive.",
    },
    {
      id: 2,
      background:
        "before:content-[''] before:bg-[url('https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-1-1.jpg')] before:bg-cover before:bg-no-repeat before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:brightness-[0.4] relative w-full h-full",
      img: "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/col-feature-2.png",
      title: "Advanced Operating Room",
      description:
        "Despite advances in technology and understanding of biological systems, drug discovery is still a lengthy, expensive.",
    },
    {
      id: 3,
      background: "bg-primaryDark",
      img: "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/col-feature-3.png",
      title: "Only Best Doctors",
      description:
        "Despite advances in technology and understanding of biological systems, drug discovery is still a lengthy, expensive.",
    },
  ];
  return (
    <section className="relative -top-56 md:flex">
      {offers.map((offer) => (
        <WeOfferCard
          key={offer.id}
          title={offer.title}
          description={offer.description}
          background={offer.background}
          img={offer.img}
        />
      ))}
    </section>
  );
};

export default Weoffer;
