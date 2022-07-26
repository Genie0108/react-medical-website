import React from "react";

const Heading = ({ text }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-primary border-b-2 border-primaryDark">
        {text}
      </h1>
    </>
  );
};

export default Heading;
