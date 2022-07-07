import React from "react";

const VideoInfoBox = (props) => {
  const handleSelect = () => {
    props.makeActive(props.id);
  };
  return (
    <div
      onClick={handleSelect}
      className={`${
        props.isActive &&
        "bg-gradient-to-r from-[rgba(10,141,97,0.95)] to-[rgba(0,167,125,0.73)] text-white sm:flex items-start gap-x-3 border-none"
      } pl-4 py-4 cursor-pointer sm:w-1/4 sm:py-6 sm:pl-4 sm:pr-4 sm:text-start sm:border-r-2 sm:border-r-gray-400 md:py-4 lg:pl-10 xl:py-8 `}
    >
      {props.isActive === true ? (
        <>
          <div className="hidden lg:block mt-2">
            <div className="w-5 h-1 border-y-2 border-x-[1px] border-white rounded"></div>
          </div>
          <div>
            <h1 className="text-base sm:text-xl font-bold text-white">
              {props.title}
            </h1>
            <p className="sm:mt-1 text-sm text-white">{props.text}</p>
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-base sm:text-xl font-bold text-gray-700">
            {props.title}
          </h1>
          <p className="sm:mt-1 text-sm text-gray-500">{props.text}</p>
        </div>
      )}
    </div>
  );
};

export default VideoInfoBox;
