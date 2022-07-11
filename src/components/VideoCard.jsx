import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";
import VideoPlayer from "./VideoPlayer";

const VideoCard = ({
  heading,
  subHeading,
  coverImg,
  videoLink,
  videoImg,
  description,
  title,
}) => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to top,rgba(10, 124, 139,1) 30%,rgba(10, 124, 139,0.3)), url(${videoImg})`,
      }}
      className="bg-videoCard bg-cover bg-no-repeat bg-center sm:h-[920px]"
    >
      <div className="bg-white w-24 h-24 rounded-full relative left-1/2 -translate-x-1/2 top-10 sm:top-32 flex items-center justify-center cursor-pointer">
        <button onClick={() => setPlayVideo(true)}>
          <BsPlayFill size="50px" className="" fill="#46444C" />
        </button>
      </div>
      <div className="max-w-[1200px] mx-auto px-2 mt-20 pb-10 sm:flex gap-x-10 lg:gap-x-20 sm:relative top-[80px] sm:top-[150px] md:top-[250px] lg:top-[300px] xl:top-[350px]">
        {/* left - img/title part */}
        <div className=" w-full sm:max-w-[400px] sm:w-[35%]">
          <h1 className="text-white text-3xl font-bold mb-10">{heading}</h1>
          <img
            src={coverImg}
            alt="doctors performing operation"
            className="hidden sm:block"
          />
        </div>
        {/* right - description part */}
        <div className="w-full sm:max-w-[800px] sm:w-[65%]">
          <p className="text-white text-xl">{subHeading}</p>
          <p className="text-white text-[16px] tracking-wide my-5">
            {description}
          </p>
          <button className="px-5 py-3 bg-[rgba(20,193,185,0.56)] text-white text-base font-normal rounded flex items-center gap-x-1">
            Learn More
            <IoIosArrowRoundForward size="35px" />
          </button>
        </div>
      </div>

      {/* video player */}
      {playVideo && (
        <VideoPlayer
          videoLink={videoLink}
          title={title}
          setPlayVideo={setPlayVideo}
        />
      )}
    </section>
  );
};

export default VideoCard;
