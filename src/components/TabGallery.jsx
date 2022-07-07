import React, { useState } from "react";
import VideoInfoBox from "./VideoInfoBox";
import VideoCard from "./VideoCard";

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    {
      id: 1,
      title: "Hospital Introduction",
      text: "See Video Introduction",
      heading: "About Us",
      subHeading:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias mollitia exercitationem praesentium consequuntur numquam deleniti, illum veniam molestiae eaque.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias mollitia exercitationem praesentium consequuntur numquam deleniti, illum veniam molestiae eaque.",

      coverImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-2-2.jpg",
      videoLink: "",
    },
    {
      id: 2,
      title: "Why Choose Us",
      text: "Listen from real patients",
      heading: "Why Us",
      subHeading:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias mollitia exercitationem praesentium consequuntur numquam deleniti, illum veniam molestiae eaque.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias mollitia exercitationem praesentium consequuntur numquam deleniti, illum veniam molestiae eaque.",

      coverImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-2-2.jpg",
      videoLink: "",
    },
    {
      id: 3,
      title: "Our innovation",
      text: "Our dedicated research team",
      heading: "Our Innovation",
      subHeading:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias mollitia exercitationem praesentium consequuntur numquam deleniti, illum veniam molestiae eaque.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias mollitia exercitationem praesentium consequuntur numquam deleniti, illum veniam molestiae eaque.",

      coverImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-2-2.jpg",
      videoLink: "",
    },

    {
      id: 4,
      title: "Give Back",
      text: "Donation programme",
      heading: "Give Back",
      subHeading:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias mollitia exercitationem praesentium consequuntur numquam deleniti, illum veniam molestiae eaque.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias mollitia exercitationem praesentium consequuntur numquam deleniti, illum veniam molestiae eaque.",

      coverImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-2-2.jpg",
      videoLink: "",
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
      <VideoCard heading={tabs[activeTab - 1].heading} />
    </div>
  );
};

export default TabGallery;
