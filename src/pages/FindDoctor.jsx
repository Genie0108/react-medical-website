import React from "react";
import { GoLocation } from "react-icons/go";
import { GrSearch } from "react-icons/gr";
import Footer from "../components/Footer";

const FindDoctor = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="mt-10">
      <div className="px-2 sm:px-5 pt-10 pb-24 bg-primary">
        <h1 className="text-3xl text-gray-100 md:text-center font-semibold text-primary">
          Get 10% discount on all appointments* booked and paid online.
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto -mb-16 bg-white shadow-xl px-5 py-8 rounded-md relative -top-14">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-start flex-wrap"
        >
          <div className="sm:basis-1/2 md:basis-1/3 w-full pl-4 flex gap-x-2 items-center border-2 md:border-r-0 border-primaryDark">
            <i>
              <GrSearch size="25px" />
            </i>
            <input
              type="text"
              name="doctor"
              id="doctor"
              placeholder="Search for Doctor or Speciality"
              className="py-4 w-full focus:outline-0"
              required
            />
          </div>
          <div className="sm:basis-1/2 md:basis-1/3 w-full pl-4 flex gap-x-2 items-center border-2 border-primaryDark">
            <i>
              <GoLocation size="25px" />
            </i>
            <input
              type="text"
              name="doctor"
              id="doctor"
              placeholder="Select Location"
              className="py-4 w-full focus:outline-0"
              required
            />
          </div>
          <button
            type="submit"
            className="md:basis-1/3 w-full px-5 py-4 bg-primaryDark text-gray-100 text-xl font-semibold hover:bg-primary"
          >
            Find a Doctor
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default FindDoctor;
