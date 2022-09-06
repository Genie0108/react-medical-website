import React from "react";
import { Link } from "react-router-dom";

import PrescribtionServiceCard from "./PrescribtionServiceCard";
import { IoIosArrowRoundForward } from "react-icons/io";

const OnlinePrescriptionService = ({
  value,
  leftHeading,
  leftDesc,
  rightImg1,
  rightHeading1,
  rightHeading1Desc,
  rightImg2,
  rightHeading2,
  rightHeading2Desc,
  rightImg3,
  rightHeading3,
  rightHeading3Desc,
  rightImg4,
  rightHeading4,
  rightHeading4Desc,
}) => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 pt-20 xl:flex items-start justify-between gap-x-10">
      {/* left part */}
      <div className="xl:w-1/3 text-center ">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-poppins text-primary sm:leading-[3rem] lg:leading-[5rem]">
          {leftHeading}
        </h1>
        <p className="xl:w-2/3 text-sm tracking-wide font-poppins py-6">
          {leftDesc}
        </p>
      </div>
      {/* right part */}
      <div className="sm:w-2/3 mx-auto xl:w-2/3">
        <PrescribtionServiceCard
          img={rightImg1}
          heading={rightHeading1}
          description={rightHeading1Desc}
        />
        <PrescribtionServiceCard
          img={rightImg2}
          heading={rightHeading2}
          description={rightHeading2Desc}
        />
        <PrescribtionServiceCard
          img={rightImg3}
          heading={rightHeading3}
          description={rightHeading3Desc}
        />
        <PrescribtionServiceCard
          img={rightImg4}
          heading={rightHeading4}
          description={rightHeading4Desc}
        />
        {value === 1 ? (
          <div>
            <div className="mt-3 flex items-center gap-x-2">
              <Link to="" className="text-xl font-semibold text-primary">
                Learn more about our prescribtion discount card
              </Link>
              <i>
                <IoIosArrowRoundForward size="35px" fill="rgb(14, 132, 147)" />
              </i>
            </div>
            <hr className="mt-10" />
            <p className="text-sm py-8">
              *Prescriptions provided at doctor’s discretion after a medical
              consultation; we cannot prescribe controlled substances.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default OnlinePrescriptionService;
