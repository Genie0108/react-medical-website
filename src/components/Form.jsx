import React from "react";

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full mx-auto mt-10 md:m-0 md:w-3/4 lg:w-1/2"
    >
      <div className="before:content-[''] before:bg-formImg before:bg-cover before:bg-no-repeat before:bg-center before:saturate-150 before:brightness-50 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 relative w-full h-full">
        <div className="max-w-[600px] mx-auto pt-36 px-4 pb-10 md:m-0 md:pr-0 xl:pl-16 text-white relative">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Make an appointment
          </h1>
          <p className="my-6 text-base text-gray-400">
            We will send you a confirmation within 24 hours.
            <br />
            <strong className="text-white font-bold">Emergency? </strong>Call :
            +977-98........{" "}
          </p>
          {/* form fields */}
          <div className="pr-2 mx-auto md:m-0">
            <div className="flex gap-x-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name&#42;"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Phone&#42;"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
            </div>
            <div className="mt-5 flex gap-x-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email&#42;"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
              <select
                name="disease"
                id="disease"
                className="w-1/2 text-black px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              >
                <option value="lung" className="text-gray-900">
                  Lung Disease
                </option>
                <option value="heart" className="text-gray-900">
                  Heart Disease
                </option>
                <option value="orthopaedic" className="text-gray-900">
                  Orthopaedic
                </option>
                <option value="surgery" className="text-gray-900">
                  General Surgery
                </option>
                <option value="pharmacy" className="text-gray-900">
                  Pharmacy
                </option>
                <option value="sports" className="text-gray-900">
                  Sports Injury
                </option>
                <option value="fever" className="text-gray-900">
                  Fever & Flu
                </option>
                <option value="dental" className="text-gray-900">
                  Dental Service
                </option>
                <option value="eye" className="text-gray-900">
                  Eye Care
                </option>
              </select>
            </div>
            <div className="mt-5 flex gap-x-4">
              <input
                type="string"
                name="date"
                id="date"
                placeholder="Date"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
              <input
                type="string"
                name="time"
                id="time"
                placeholder="Time"
                className="w-1/2 text-black placeholder:text-gray-600 px-2 py-3 rounded text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="message&#42;"
              className="mt-5 w-full text-black placeholder:text-gray-600 px-2 py-3 text-base font-semibold focus:outline-2 focus:outline-primaryDark outline-none focus:ring-2 focus:ring-primaryDark"
            ></textarea>
            <button
              type="submit"
              className="mt-4 py-3 bg-[rgba(20,193,185,0.56)] text-white text-xl font-normal w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
