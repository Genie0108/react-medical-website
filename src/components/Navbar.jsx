import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  let activeStyle = {
    color: "rgb(10,124,139)",
    textDecoration: "underline",
  };
  return (
    <nav className="hidden max-w-[1080px] mx-auto md:flex items-center justify-between mt-14">
      <ul className="flex items-center gap-x-3 lg:gap-x-5">
        <li className="text-base font-medium text-gray-600">
          <NavLink
            to="/findadoctor"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Find a Doctor
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600">
          <NavLink
            to="/aboutus"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About Us
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600">
          <NavLink
            to="/ourservices"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Our Services
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600">
          <NavLink
            to="/ourdoctors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Our Doctors
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600">
          <NavLink
            to="/onlineprescribtions"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Online Prescribtions
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600">
          <NavLink
            to="/urgentcare"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Urgent Care
          </NavLink>
        </li>
      </ul>
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
