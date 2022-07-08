import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";

// import Video from "../assets/01.mp4";

const VideoCard = ({
  heading,
  subHeading,
  coverImg,
  videoLink,
  videoImg,
  description,
}) => {
  return (
    <section className="bg-videoCard bg-cover bg-no-repeat bg-center sm:h-[920px]">
      <div className="bg-white w-24 h-24 rounded-full relative left-1/2 -translate-x-1/2 top-10 sm:top-32 flex items-center justify-center cursor-pointer">
        <BsPlayFill size="50px" className="" fill="#46444C" />
      </div>
      <div className="max-w-[1200px] mx-auto px-2 mt-20 pb-10 sm:flex gap-x-10 lg:gap-x-20 sm:relative top-[80px] sm:top-[150px] md:top-[250px] lg:top-[300px] xl:top-[350px]">
        {/* left - img/title part */}
        <div className=" w-full sm:max-w-[400px] sm:w-[35%]">
          <h1 className="text-white text-3xl font-bold mb-10">{heading}</h1>
          <img
            src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/video-featured-1-2.jpg"
            alt="doctors performing operation"
            className="hidden sm:block"
          />
        </div>
        {/* right - description part */}
        <div className="w-full sm:max-w-[800px] sm:w-[65%]">
          <p className="text-white text-xl">
            Historically, drugs were discovered through identifying the active
            ingredient from traditional remedies or by serendipitous discovery.
            Later chemical libraries of synthetic small molecules.
          </p>
          <p className="text-white text-[18px] my-5">
            Modern drug discovery involves the identification of screening hits,
            medicinal chemistry and optimization of those hits to increase the
            affinity, selectivity (to reduce the potential of side effects),
            efficacy/potency, metabolic stability (to increase the half-life),
            and oral bioavailability. Once a compound that fulfills all of these
            requirements.
          </p>
          <button className="px-5 py-3 bg-[rgba(20,193,185,0.56)] text-white text-base font-normal rounded flex items-center gap-x-1">
            Learn More
            <IoIosArrowRoundForward size="35px" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoCard;
