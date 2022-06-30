import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);

  let activeStyle = {
    color: "rgb(10,124,139)",
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="md:hidden">
        <button className="cursor-pointer" onClick={handleToggle}>
          <i className="pr-7 flex items-center">
            <RiMenu5Fill size="30px" />
          </i>
        </button>
        {toggle && (
          <ul className="absolute right-5 flex flex-col items-center pt-5 gap-y-3">
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
        )}
      </div>
    </>
  );
};

export default Dropdown;
