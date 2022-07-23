import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const AboutUs = () => {
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage: `linear-gradient(to top,rgba(10, 124, 139,0.4) 70%,rgba(10, 124, 139,0.5) 100%), url(/images/hospital_building.jpg)`,
          }}
          className="mt-10 w-full bg-cover bg-no-repeat bg-center h-96 min-h-max saturate-150 xl:h-[500px]"
        ></div>
        <div className="bg-primary">
          <h1 className="max-w-[1200px] mx-auto px-2 py-5 text-3xl font-semibold text-white">
            About MedCare
          </h1>
        </div>
        <div className="max-w-[1200px] mx-auto px-2">
          <p className="py-3 leading-7 text-black">
            Medcare Hospitals is the largest public health care system in the
            Nepal. We provide essential inpatient, outpatient, and home-based
            services to more than one Lakh people every year in more than 20
            locations across the city's five boroughs.
          </p>
          <p className="py-3 leading-7 text-black">
            <span className="text-primary">Our 11 acute care hospitals</span>{" "}
            provide top-ranked trauma care, dozens of inpatient specialties, and
            <span className="text-primary"> mental health services</span>,
            making communities healthy through a robust network of
            hospital-based primary care services for children and adults. Our
            hospitals have earned numerous special designations for quality and
            culturally responsive care including{" "}
            <span className="text-primary">LGBTQ Healthcare</span> Equity Leader
            , Baby Friendly, Safe Sleep, and top ranks by Nepal News and World
            Report.
          </p>
          <p className="py-3 leading-7 text-black">
            Medcare Hospitals offers comprehensive care management and better
            access to social support services in patients’ homes and
            communities.
          </p>
          <p className="py-3 leading-7 text-black">
            <span className="text-primary">Our health plan,</span> MetroPlus,
            offers low to no-cost health insurance to eligible people living in
            Kavrepalanchok, Sindhupalchok, Sindhuli, and Dhulikhel. MetroPlus is
            the health plan of choice for more than 500,000 people including
            many government employees.
          </p>
          <p className="py-3 leading-7 text-black">
            Our diverse workforce is uniquely focused on empowering people,
            without exception, to live the healthiest life possible.
          </p>
          <p className="py-3 leading-7 text-black">
            Stay connected with us on Facebook at{" "}
            <span className="text-primary">
              <a href="https://www.facebook.com/medcare/">
                facebook.com/Medcare
              </a>
            </span>{" "}
            or Twitter at{" "}
            <span className="text-primary">
              <a href="https://www.gmail.com">@MedcareHospital</a>.
            </span>
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-primary border-b-2 border-primaryDark">
            Chairman Message
          </h1>
          <div className="flex items-start flex-col gap-y-5 md:flex-row">
            <img
              src="https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/p-8-400x400.jpg"
              alt="chairman"
              className="mt-4 rounded-t-md w-[70%]"
            />
            <div className="pl-4 lg:py-16">
              <i>
                <ImQuotesLeft size="40px" fill="rgb(10, 124, 139)" />
              </i>
              <p className="py-2 text-base text-black">
                At MedCare our vision is to be the most well regarded healthcare
                provider in India committed to the highest standards of clinical
                excellence and patient care, supported by latest technology and
                cutting edge research.
              </p>
              <p className="py-2 text-base text-black">
                We ask more of ourselves, so we can give more to our patients.
                We push the boundaries of excellence in everything we do, so we
                can deliver the highest standards in patient-centred care.
              </p>
              <p className="py-2 text-base text-black">
                Every day we come to honour a higher purpose -{" "}
                <strong className="text-primary">To serve. To excel.</strong>
              </p>
              <h2 className="mt-3 text-xl font-bold text-primary">Full Name</h2>
              <p className="py-1 text-base text-black">
                Chairman & Managing Director
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
