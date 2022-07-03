import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="max-w-[1200px] mx-auto px-2 flex items-center justify-between pt-8">
      {/* logo */}
      <div>
        <Link to="/">
          <h2 className="text-3xl text-primary font-semibold tracking-wide leading-8">
            MedCare
          </h2>
        </Link>
      </div>
      {/* right part */}
      <div className="hidden md:flex gap-x-8 ">
        <div className="flex items-start">
          <i className="mt-2">
            <IoIosCheckmarkCircleOutline size="22px" fill="grey" />
          </i>
          <div className="pl-2">
            <span className="text-base font-semibold font-poppins text-primaryDark">
              Trusted By
            </span>
            <p className="text-sm font-poppins text-gray-500">
              120,000+ People
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <i className="mt-2">
            <IoIosCheckmarkCircleOutline size="22px" fill="grey" />
          </i>
          <div className="pl-2">
            <span className="text-base font-semibold font-poppins text-primaryDark">
              Best Hospital
            </span>
            <p className="text-pastelBlue text-sm font-poppins text-gray-500">
              Nepal News
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <i className="mt-2">
            <IoIosCheckmarkCircleOutline size="22px" fill="grey" />
          </i>
          <div className="pl-2">
            <span className="text-base font-semibold font-poppins text-primaryDark">
              Number #1
            </span>
            <p className="text-sm font-poppins text-gray-500">
              Clinic in Nepal
            </p>
          </div>
        </div>
      </div>
      <Dropdown />
    </header>
  );
};

export default Header;
