import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="hidden max-w-[1080px] mx-auto md:flex items-center justify-between mt-14">
      <div>
        <ul className="flex items-center gap-x-3 lg:gap-x-5">
          <li className="text-base font-medium text-primary">Find a Doctor</li>
          <li className="text-base font-medium text-gray-600">About Us</li>
          <li className="text-base font-medium text-gray-600">Our Services</li>
          <li className="text-base font-medium text-gray-600">Our Doctors</li>
          <li className="text-base font-medium text-gray-600">
            Online Prescribtions
          </li>
          <li className="text-base font-medium text-gray-600">Urgent Care</li>
        </ul>
      </div>
      <div className="flex items-center gap-x-2 lg:gap-x-8">
        <i>
          <BsSearch size="20px" fill="grey" className="cursor-pointer" />
        </i>
        <i>
          <IoIosContact size="30px" fill="grey" className="cursor-pointer" />
        </i>
        <button className="uppercase flex items-center px-5 py-2 rounded-3xl text-white font-semibold cursor-pointer bg-primary">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
