import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { BsSearch } from "react-icons/bs";
import ScrollToTop from "../../components/ui/ScrollToTop";
import Footer from "../../layouts/Footer";
import ArrayFilter from "../../components/ArrayFilter";
import diseases_a from "../../data/Diseases_A";
import diseases_b from "../../data/Diseases_B";
import diseases_c from "../../data/Diseases_C";
import diseases_d from "../../data/Diseases_D";
import diseases_e from "../../data/Diseases_E";

const alphabets = [
  {
    id: 1,
    letter: "a",
    diseases: diseases_a,
  },
  {
    id: 2,
    letter: "b",
    diseases: diseases_b,
  },
  {
    id: 3,
    letter: "c",
    diseases: diseases_c,
  },
  {
    id: 4,
    letter: "d",
    diseases: diseases_d,
  },
  {
    id: 5,
    letter: "e",
    diseases: diseases_e,
  },
  // {
  //   id: 6,
  //   letter: "f",
  // },
  // {
  //   id: 7,
  //   letter: "g",
  // },
  // {
  //   id: 8,
  //   letter: "h",
  // },
  // {
  //   id: 9,
  //   letter: "i",
  // },
  // {
  //   id: 10,
  //   letter: "j",
  // },
  // {
  //   id: 11,
  //   letter: "k",
  // },
  // {
  //   id: 12,
  //   letter: "l",
  // },
  // {
  //   id: 13,
  //   letter: "m",
  // },
  // {
  //   id: 14,
  //   letter: "n",
  // },
  // {
  //   id: 15,
  //   letter: "o",
  // },
  // {
  //   id: 16,
  //   letter: "p",
  // },
  // {
  //   id: 17,
  //   letter: "q",
  // },
  // {
  //   id: 18,
  //   letter: "r",
  // },
  // {
  //   id: 19,
  //   letter: "s",
  // },
  // {
  //   id: 20,
  //   letter: "t",
  // },
  // {
  //   id: 21,
  //   letter: "u",
  // },
  // {
  //   id: 22,
  //   letter: "v",
  // },
  // {
  //   id: 23,
  //   letter: "w",
  // },
  // {
  //   id: 24,
  //   letter: "x",
  // },
  // {
  //   id: 25,
  //   letter: "y",
  // },
  // {
  //   id: 26,
  //   letter: "z",
  // },
];

const Services = () => {
  const [enterDiseaseName, setEnterDiseaseName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  let listOfDiseases = useRef(null);

  useEffect(() => {
    let length = listOfDiseases.current.children.length;
    if (length === 0) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, []);
  return (
    <>
      {/* bgimage */}
      <section>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(10, 124, 139,0.3) 70%,rgba(10, 124, 139,0.5) 100%), url(/images/services/doctor.avif)`,
          }}
          className="mt-10 w-full bg-cover bg-no-repeat bg-center min-h-max saturate-150 h-[600px]"
        >
          <div className="max-w-[1200px] mx-auto h-full flex items-center justify-end">
            <div className="hidden lg:block py-8 px-6 w-96 float-right bg-white rounded-xl">
              <h1 className="text-primary text-4xl font-semibold leading-10">
                Whole Person Care Starts Here
              </h1>
              <p className="py-8 text-base font-poppins">
                Every caregiver in the Centura Health community shares a common
                goal: to help you live a whole and healthy life. Achieving that
                goal means delivering specialized care to ensure your every need
                is met with compassion and expertise. Explore our complete list
                of medical services to find the right experts for your needs.
              </p>
              <a href="#all_services">
                <button className=" px-5 py-2 text-base text-white font-medium flex items-center rounded-3xl cursor-pointer bg-primary border-2 border-primary transition-colors duration-200 ease-in-out hover:text-primary hover:bg-white ">
                  Explore all services
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceCard />

      <section className="bg-primary">
        <div className="max-w-[1200px] mx-auto px-2 mt-10 py-10">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold leading-10">
            Our comprehensive ecosystem of specialized services is built to
            touch, treat and heal
          </h1>
          <p className="py-3 text-gray-50 tracking-wide">
            Here, you have access to an expansive breadth of solutions with deep
            expertise in the latest medicine, technology and treatments. And our
            specialties cover thousands of people just like you across Mechi and
            Mahakali. It’s all part of our continued commitment to supporting a
            healthier, happier you.
          </p>
        </div>
      </section>

      {/* filter disease from list */}
      <section className="max-w-[1200px] mx-auto px-2 mt-10">
        {/* input box */}
        <div
          className="w-full relative flex items-center gap-x-4"
          id="all_services"
        >
          <i className="absolute pl-4">
            <BsSearch size="25px" fill="grey" />
          </i>
          <input
            type="text"
            name="disease"
            id="disease"
            onChange={(e) => setEnterDiseaseName(e.target.value)}
            value={enterDiseaseName}
            placeholder="Filter By Keyword"
            className="w-full pl-16 py-4 text-gray-600 border-2 border-gray-600 text-xl font-poppins focus:outline-primary"
          />
        </div>

        {/* list of all diseases */}

        {/* alphabets */}
        <p className="text-center pt-8 flex flex-wrap justify-center gap-y-4">
          {alphabets.map((alphabet) => (
            <a
              key={alphabet.id}
              href={`#${alphabet.letter}`}
              className="uppercase text-xl text-primary font-medium underline px-2"
            >
              {alphabet.letter}
            </a>
          ))}
        </p>
        {showMessage && (
          <p className="py-2 md:py-6 text-center text-gray-600 text-2xl">
            Sorry, no results were found.
          </p>
        )}

        {/* list of diseases */}
        <ul ref={listOfDiseases}>
          {alphabets.map((alphabet) => (
            <ArrayFilter
              arr={alphabet.diseases}
              userValue={enterDiseaseName}
              letter={alphabet.letter}
              key={alphabet.id}
              id={`${alphabet.letter}`}
            />
          ))}
        </ul>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Services;
