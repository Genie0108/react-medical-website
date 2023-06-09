import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import Button from "../components/ui/Button";

const Navbar = () => {
  let activeStyle = {
    color: "rgb(10,124,139)",
    // textDecoration: "underline",
    borderColor: "rgb(10,124,139)",
    paddingBottom: "10px",
  };
  return (
    <nav className="hidden max-w-[1200px] mx-auto px-2 md:flex items-center justify-between mt-14">
      <ul className="flex items-center gap-x-3 lg:gap-x-5">
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/findadoctor"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Find a Doctor
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/aboutus"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About Us
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/ourservices"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Our Services
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/ourdoctors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Our Doctors
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
          <NavLink
            to="/onlineprescribtions"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Online Prescribtions
          </NavLink>
        </li>
        <li className="text-base font-medium text-gray-600 hover:border-b-4 hover:border-primary">
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
        <a href="#contact">
          <Button text="Contact" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
