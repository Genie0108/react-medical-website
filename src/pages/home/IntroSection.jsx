import React from "react";
import Button from "../../components/ui/Button";

const IntroSection = () => {
  return (
    <section className="w-full mt-10 flex bg-hospitalImg bg-cover bg-no-repeat bg-center saturate-150">
      {/* content */}
      <div className="max-w-[1200px] mx-auto w-full h-[400px] pt-8 flex flex-col items-start justify-center md:h-[500px]">
        <h1 className="text-white text-6xl font-semibold font-poppins leading-none sm:text-9xl">
          Medcare
        </h1>
        <h2 className="pl-[5px] text-xl text-white font-normal font-poppins sm:text-3xl">
          Medical Center in Kathmandu
        </h2>
        <p className="pl-[5px] mt-2 text-white text-base leading-6 font-normal font-poppins tracking-wider sm:text-[22px]">
          Living Healthy Together
        </p>
        <div className="mt-10">
          <a href="#contact">
            <Button text="Contact" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
