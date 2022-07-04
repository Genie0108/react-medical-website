import React from "react";

const NoPage = () => {
  return (
    <>
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 min-w-[300px]">
        <h1 className="text-5xl font-bold font-poppins text-primary text-center">
          404
        </h1>
        <p className="text-3xl font-bold font-poppins text-primary">
          Page not found
          <span role="img" aria-label="confused face emoji">
            😕
          </span>
        </p>
      </div>
    </>
  );
};

export default NoPage;
