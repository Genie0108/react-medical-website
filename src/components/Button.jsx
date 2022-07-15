import React from "react";

const Button = (props) => {
  return (
    <button
      type="submit"
      className="mt-4 py-3 bg-[rgba(20,193,185,0.56)] text-white text-xl font-normal w-full"
    >
      {props.submit}
    </button>
  );
};

export default Button;
