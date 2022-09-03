import React from "react";
import Button from "../components/ui/Button";
import { GoCalendar } from "react-icons/go";
import { AiOutlineInsurance } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import PrescribtionSteps from "../components/ui/PrescribtionSteps";

const Prescribtion = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mt-10"
      >
        <path
          fill="rgb(10, 124, 139)"
          fill-opacity="0.9"
          d="M0,288L60,266.7C120,245,240,203,360,186.7C480,171,600,181,720,176C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <section className="max-w-[1200px] mx-auto px-2">
        <div className="sm:w-2/3">
          <h1 className="text-3xl font-semibold text-primaryDark font-poppins">
            Online prescriptions and refills available now
          </h1>
          <p className="py-5  text-base tracking-wide font-poppins">
            Get prescription refills on existing medications or new
            prescriptions online. Our board-certified primary care doctors are
            here to help with your online prescription needs. We accept most
            major insurance and it takes about 15 minutes! Speak with a doctor
            online today.
          </p>
        </div>
        <Button text="book an appointment" />
        <div className="py-10 sm:flex items-center gap-x-4">
          <div className="sm:w-1/3 flex items-center">
            <GoCalendar size="35px" fill="rgb(14, 132, 147)" />
            <p className="text-xl font-poppins pl-3">
              Medication services available 24/7 for adults and kids (3+)
            </p>
          </div>
          <div className="sm:w-1/3 flex items-center my-5 sm:m-0">
            <AiOutlineInsurance size="30px" fill="rgb(14, 132, 147)" />
            <p className="text-xl font-poppins pl-3">No insurance required</p>
          </div>
          <div className="sm:w-1/3 flex items-center">
            <HiHome size="30px" fill="rgb(14, 132, 147)" />
            <p className="text-xl font-poppins pl-3">
              Same-day prescriptions available*
            </p>
          </div>
        </div>
        <h1 className="py-5 text-3xl font-semibold text-primaryDark font-poppins text-center leading-8">
          3 simple steps to request your online prescription today
        </h1>
        <div className="mt-5">
          <PrescribtionSteps
            img="https://plushcare.com/wp-content/uploads/2022/04/step1.jpg"
            step={1}
            todo="Book an Appointment"
            text="Book a same-day appointment from anywhere in the Nepal."
            flexFlow="flex-row"
          />
          <PrescribtionSteps
            img="https://plushcare.com/wp-content/uploads/2022/04/step2.jpg"
            step={2}
            todo="Talk to a doctor."
            text="Speak with a top doctor about your prescriptions on your
              smartphone or computer."
            flexFlow="md:flex-row-reverse"
          />
          <PrescribtionSteps
            img="https://plushcare.com/wp-content/uploads/2022/04/step3.jpg"
            step={3}
            todo="Pick up your prescriptions."
            text="We can send prescriptions to your local pharmacy."
            flexFlow="flex-row"
          />
        </div>
      </section>
    </>
  );
};

export default Prescribtion;
