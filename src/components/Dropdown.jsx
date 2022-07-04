import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu5Fill, RiCloseLine } from "react-icons/ri";

const Dropdown = () => {
  const [toggle, setToggle] = useState(false);

  let activeStyle = {
    color: "rgb(12 223 251)",
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="md:hidden">
        <button className="cursor-pointer" onClick={handleToggle}>
          <i className="pr-3 sm:pr-2 flex items-center">
            {!toggle && <RiMenu5Fill size="30px" />}
            {toggle && <RiCloseLine size="30px" />}
          </i>
        </button>
        {toggle && (
          <>
            <ul className="w-full sm:w-max absolute right-0 flex flex-col items-center pt-5 gap-y-3 bg-gradient-to-b from-[rgb(5,33,36)] to-[rgb(11,63,70)] z-10 drop-shadow-[2px 4px 6px black]">
              {/* <li>
                <button
                  onClick={() => setToggle(false)}
                  className="absolute right-7 top-3"
                >
                  <AiOutlineCloseCircle size="30px" fill="white" />
                </button>
              </li> */}
              <li className="text-base font-medium text-white px-4 hover:border-b-4 hover:border-white">
                <NavLink
                  to="/findadoctor"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  onClick={() => setToggle(false)}
                >
                  Find a Doctor
                </NavLink>
              </li>
              <li className="text-base font-medium text-white px-4 hover:border-b-4 hover:border-white">
                <NavLink
                  to="/aboutus"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  onClick={() => setToggle(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li className="text-base font-medium text-white px-4 hover:border-b-4 hover:border-white">
                <NavLink
                  to="/ourservices"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  onClick={() => setToggle(false)}
                >
                  Our Services
                </NavLink>
              </li>
              <li className="text-base font-medium text-white px-4 hover:border-b-4 hover:border-white">
                <NavLink
                  to="/ourdoctors"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  onClick={() => setToggle(false)}
                >
                  Our Doctors
                </NavLink>
              </li>
              <li className="text-base font-medium text-white px-4 hover:border-b-4 hover:border-white">
                <NavLink
                  to="/onlineprescribtions"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  onClick={() => setToggle(false)}
                >
                  Online Prescribtions
                </NavLink>
              </li>
              <li className="text-base font-medium text-white px-4 mb-4 hover:border-b-4 hover:border-white">
                <NavLink
                  to="/urgentcare"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  onClick={() => setToggle(false)}
                >
                  Urgent Care
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Dropdown;
