import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`flex items-center px-5 py-3 rounded-3xl text-white uppercase font-semibold cursor-pointer ${
        props.color ? props.color : "bg-primary"
      }
      ${
        props.text === "Submit"
          ? "border-2 border-secondary py-2 px-6 normal-case hover:bg-primaryDark hover:border-none"
          : ""
      }
      `}
    >
      {props.text}
    </button>
  );
};

export default Button;
