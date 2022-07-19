import React, { useState } from "react";
import VideoInfoBox from "./VideoInfoBox";
import VideoCard from "../../components/cards/VideoCard";

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "Hospital Introduction",
      text: "See Video Introduction",
      heading: "About Us",
      subHeading:
        "Historically, drugs were discovered through identifying the active ingredient from traditional remedies or by serendipitous discovery.Later chemical libraries of synthetic small molecules.",
      description:
        "Modern drug discovery involves the identification of screening hits, medicinal chemistry and optimization of those hits to increase the affinity, selectivity (to reduce the potential of side effects),efficacy/potency, metabolic stability (to increase the half-life),and oral bioavailability. Once a compound that fulfills all of these requirements.",

      coverImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-1-2.jpg",
      videoLink: "https://www.youtube.com/embed/bUGx4HoQs8o",
      videoImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-1-1.jpg",
    },
    {
      id: 2,
      title: "Why Choose Us",
      text: "Listen from real patients",
      heading: "Why Us",
      subHeading:
        "Historically, drugs were discovered through identifying the active ingredient from traditional remedies or by serendipitous discovery.Later chemical libraries of synthetic small molecules.",
      description:
        "Modern drug discovery involves the identification of screening hits, medicinal chemistry and optimization of those hits to increase the affinity, selectivity (to reduce the potential of side effects),efficacy/potency, metabolic stability (to increase the half-life),and oral bioavailability. Once a compound that fulfills all of these requirements.",

      coverImg:
        "https://media.istockphoto.com/photos/empty-modern-hospital-corridor-picture-id1294129593?k=20&m=1294129593&s=612x612&w=0&h=NvqV92MC0Uv8LHHfU-4xGWV7Dq--e6xdAtQkc5hXwug=",
      videoLink: "https://www.youtube.com/embed/SJ8jYHPLACQ",
      videoImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-2-1.jpg",
    },
    {
      id: 3,
      title: "Our innovation",
      text: "Our dedicated research team",
      heading: "Our Innovation",
      subHeading:
        "Historically, drugs were discovered through identifying the active ingredient from traditional remedies or by serendipitous discovery.Later chemical libraries of synthetic small molecules.",
      description:
        "Modern drug discovery involves the identification of screening hits, medicinal chemistry and optimization of those hits to increase the affinity, selectivity (to reduce the potential of side effects),efficacy/potency, metabolic stability (to increase the half-life),and oral bioavailability. Once a compound that fulfills all of these requirements.",

      coverImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-2-2.jpg",
      videoLink: "https://www.youtube.com/embed/1rwUMglyBU8",
      videoImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-3-1.jpg",
    },

    {
      id: 4,
      title: "Give Back",
      text: "Donation programme",
      heading: "Give Back",
      subHeading:
        "Historically, drugs were discovered through identifying the active ingredient from traditional remedies or by serendipitous discovery.Later chemical libraries of synthetic small molecules.",
      description:
        "Modern drug discovery involves the identification of screening hits, medicinal chemistry and optimization of those hits to increase the affinity, selectivity (to reduce the potential of side effects),efficacy/potency, metabolic stability (to increase the half-life),and oral bioavailability. Once a compound that fulfills all of these requirements.",

      coverImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-4-2.jpg",
      videoLink: "https://www.youtube.com/embed/TgYY6cRazHM",
      videoImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-4-1.jpg",
    },
  ];
  return (
    <div>
      <div className="sm:flex">
        {tabs.map((tab) => (
          <VideoInfoBox
            key={tab.id}
            title={tab.title}
            text={tab.text}
            id={tab.id}
            makeActive={setActiveTab}
            isActive={tab.id === activeTab}
          />
        ))}
      </div>
      <VideoCard
        heading={tabs[activeTab - 1].heading}
        subHeading={tabs[activeTab - 1].subHeading}
        description={tabs[activeTab - 1].description}
        coverImg={tabs[activeTab - 1].coverImg}
        videoImg={tabs[activeTab - 1].videoImg}
        videoLink={tabs[activeTab - 1].videoLink}
        title={tabs[activeTab - 1].title}
      />
    </div>
  );
};

export default TabGallery;
