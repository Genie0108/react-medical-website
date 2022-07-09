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
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-1-2.jpg",
      // videoLink: "https://youtu.be/LSRNmhLS76o",
      // videoImg:
      // "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-1-1.jpg",
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
        "https://media.istockphoto.com/photos/empty-modern-hospital-corridor-picture-id1294129593?k=20&m=1294129593&s=612x612&w=0&h=NvqV92MC0Uv8LHHfU-4xGWV7Dq--e6xdAtQkc5hXwug=",
      videoLink: "",
      videoImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-2-1.jpg",
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
      videoImg:
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-3-1.jpg",
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
        "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-4-2.jpg",
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
      <VideoCard
        heading={tabs[activeTab - 1].heading}
        coverImg={tabs[activeTab - 1].coverImg}
        videoImg={tabs[activeTab - 1].videoImg}
      />
    </div>
  );
};

export default TabGallery;
