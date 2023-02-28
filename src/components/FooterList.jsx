import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const FooterList = ({ id, text }) => {
  return (
    <li className="pt-1 text-white hover:translate-x-4">
      <Link to="" style={{ display: "flex" }}>
        <IoIosArrowRoundForward size="30px" fill="white" />
        {text}
      </Link>
    </li>
  );
};

export default FooterList;
