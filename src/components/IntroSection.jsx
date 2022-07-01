import React from "react";

const IntroSection = () => {
  return (
    <section className="w-full mt-10 flex bg-hospitalImg bg-cover bg-no-repeat bg-center saturate-150">
      {/* content */}
      <div className="max-w-[1080px] mx-auto w-full h-[400px] pt-8 flex flex-col items-start justify-center">
        <h1 className="text-white text-6xl font-semibold font-poppins leading-none sm:text-9xl">
          Medcare
        </h1>
        <h2 className="pl-[5px] text-secondary text-xl font-normal font-poppins sm:text-3xl">
          Medical Center in Kathmandu
        </h2>
        <p className="pl-[5px] mt-2 text-white text-base leading-6 font-normal font-poppins tracking-wider sm:text-[22px]">
          Living Healthy Together
        </p>
        <button className="ml-1 mt-10 uppercase flex items-center px-5 py-2 rounded-3xl text-white font-semibold cursor-pointer bg-primary">
          Contact
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
