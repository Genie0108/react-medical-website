import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineClockCircle,
  AiFillSkype,
} from "react-icons/ai";
import { BsTelephone, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <section className="w-full bg-secondaryLight mt-6 py-14">
      {/* all details */}
      <div className="max-w-[1200px] mx-auto px-2 flex justify-start gap-x-20 gap-y-10 items-start flex-wrap md:justify-evenly md:gap-x-10 lg:gap-0 lg:justify-start lg:flex-nowrap">
        {/* first col */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h2 className="mb-5 text-3xl text-primary font-semibold tracking-wide leading-8">
            MedCare
          </h2>
          <span className="text-base text-gray-500">
            Box 3233 <br />
            BP Highway <br />
            Dhulikhel, Kavrepalanchok
          </span>
          <span className="pt-8 text-base text-primary flex flex-wrap items-center gap-x-3">
            <BsTelephone />
            +977-98........
          </span>
          <span className="mt-2 text-base text-primary flex flex-wrap items-center gap-x-3">
            <AiOutlineMail />
            direct@medcarehospital.org
          </span>
        </div>

        {/* second col */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-xl text-primaryDark font-semibold leading-6">
            About Us
          </h1>
          <ul className="pt-4">
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" /> Our Mission &
                Values
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" />
                Leadership
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" />
                Transformation
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" />
                Awards
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" />
                Diversity is Our Speciality
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" />
                Publications & Reports
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" />
                Policies & Procedures
              </li>
            </Link>
          </ul>
        </div>

        {/* third col */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-xl text-primaryDark font-semibold leading-6">
            Our Services
          </h1>
          <ul className="pt-4">
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" /> Lung Disease
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" /> Orthopaedic
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" /> Pharmacy
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" /> Our Mission &
                Values
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" /> Sport Injury
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" /> Heart
              </li>
            </Link>
            <Link to="">
              <li className="pt-1 flex items-center gap-x-1 text-gray-500 hover:text-primary">
                <IoIosArrowRoundForward size="30px" fill="grey" /> Dental
                Service
              </li>
            </Link>
          </ul>
        </div>

        {/* fourth col */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h1 className="text-xl text-primaryDark font-semibold leading-6">
            Hospital Hours
          </h1>
          <div className="border-gray-400 border-b-[1px] pb-2 pt-4 flex justify-between items-start gap-x-2">
            <span className="text-base font-semibold text-primary flex items-start gap-x-1">
              <i>
                <AiOutlineClockCircle size="20px" fill="rgb(10, 124, 139)" />
              </i>
              Monday - Friday
            </span>
            <span className="text-base text-primaryDark">08:00 - 20:00</span>
          </div>
          <div className="border-gray-400 border-b-[1px] pb-2 pt-4 flex justify-between items-start gap-x-2">
            <span className="text-base font-semibold text-primary flex items-start gap-x-1">
              <i>
                <AiOutlineClockCircle size="20px" fill="rgb(10, 124, 139)" />
              </i>
              Saturday
            </span>
            <span className="text-base text-primaryDark">09:00 - 18:00</span>
          </div>
          <div className="border-gray-400 border-b-[1px] pb-2 pt-4 flex justify-between items-start gap-x-2">
            <span className="text-base font-semibold text-primary flex items-start gap-x-1">
              <i>
                <AiOutlineClockCircle size="20px" fill="rgb(10, 124, 139)" />
              </i>
              Sunday
            </span>
            <span className="text-base text-primaryDark">09:00 - 18:00</span>
          </div>
          <Link to="">
            <button className="mt-4 px-8 py-3 bg-white text-primary text-base font-semibold ">
              Emergency : 24 Hours
            </button>
          </Link>
        </div>
      </div>

      {/* copyright section */}
      <div className="max-w-[1200px] mx-auto mt-14 px-2 flex items-center gap-x-3 gap-y-5 justify-center flex-wrap sm:justify-between">
        <ul className="flex gap-x-5 item-center">
          <li>
            <a href="https://www.facebook.com/">
              <i>
                <FaFacebook
                  size="25px"
                  fill="rgb(10, 124, 139)"
                  title="facebook"
                />
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/">
              <i>
                <FaLinkedin
                  size="25px"
                  fill="rgb(10, 124, 139)"
                  title="Linkedin"
                />
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.skype.com/">
              <i>
                <AiFillSkype
                  size="25px"
                  fill="rgb(10, 124, 139)"
                  title="Skype"
                />
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i>
                <BsTwitter
                  size="25px"
                  fill="rgb(10, 124, 139)"
                  title="Twitter"
                />
              </i>
            </a>
          </li>
        </ul>
        <div className="uppercase text-gray-500 text-center">
          Copyright 2022 Medcare, All rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
