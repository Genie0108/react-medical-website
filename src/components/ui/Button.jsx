import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`flex items-center px-5 py-3 rounded-3xl text-white uppercase font-semibold cursor-pointer ${
        props.color ? props.color : "bg-primary"
      }`}
    >
      {props.text}
    </button>
  );
};

export default Button;
