import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const NewsLetterSubscribtion = () => {
  return (
    <section className="max-w-[1200px] mx-auto relative -top-80">
      {/* top part */}
      <div className="bg-white flex flex-col sm:flex-row items-center">
        <div className="w-1/2">
          <img
            src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/Girl-talk.jpg"
            alt="doctor talking with patients"
            className="w-full"
          />
        </div>
        <div className="w-full px-2 sm:pl-8 sm:pr-5 flex flex-col justify-center md:w-1/2 md:pl-14 ">
          <i>
            <ImQuotesLeft size="40px" fill="rgb(10, 124, 139)" />
          </i>
          <p className="py-5 lg:py-10 text-base text-gray-600">
            Historically, drugs were discovered through identifying the active
            ingredient from traditional remedies or by serendipitous discovery.
            Later chemical libraries of synthetic small molecules.
          </p>
          <h1 className="text-xl font-bold text-primary md:pb-5">
            Dr.Full Name
          </h1>
          <p className="text-sm text-gray-600">Cardiologist</p>
        </div>
      </div>

      {/* bottom part */}
      <div className="py-14 px-2 mt-5 sm:mt-2 md:mt-0 bg-gradient-to-r from-primary to-primaryDark md:px-10">
        <div className="md:flex items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-white text-2xl font-bold ">
              Subscribe to our newsletter
            </h1>
            <p className="pt-5 text-base text-gray-100">
              Medcare is the only hospital in the state of Bagmati to achieve
              One of Healthgrades Nepal's 10 Best Hospitals for Joint
              Replacement in 2016.
            </p>
          </div>
          <div className="w-full md:w-1/2 pt-10 md:pl-10">
            <div className="flex items-start">
              <input
                type="email"
                name="subscription_email"
                id="subscription_email"
                aria-label="Your email address to subscribe our newsletter"
                placeholder="Your Email Address"
                className="w-[50%] sm:w-full basis-3/4 rounded rounded-r-none pl-5 py-3"
              />
              <button className="px-2 sm:px-5 py-3 basis-1/4 text-white bg-[rgb(3,59,66)] rounded rounded-l-none hover:bg-primaryDark">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSubscribtion;
