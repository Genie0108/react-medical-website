import React from "react";

const VideoCard = ({
  heading,
  subHeading,
  coverImg,
  videoLink,
  description,
}) => {
  return (
    <div className="bg-gray-200 h-48">
      <h2>{heading}</h2>
    </div>
  );
};

export default VideoCard;
