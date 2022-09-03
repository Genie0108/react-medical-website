import React from "react";

const PrescribtionSteps = ({ img, step, todo, text, flexFlow }) => {
  return (
    <div
      className={`flex items-center gap-x-10 flex-wrap md:flex-nowrap ${flexFlow} ${
        step === 2 ? "py-14 md:py-0" : ""
      }`}
    >
      <div>
        <img src={img} alt={`step_${step}`} />
      </div>
      <div className="py-4 md:py-0">
        <h6 className="text-xl">Step {step}</h6>
        <h2 className="py-3 text-2xl font-semibold text-primaryDark font-poppins">
          {todo}
        </h2>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
};

export default PrescribtionSteps;
