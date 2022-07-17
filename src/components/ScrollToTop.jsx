import React, { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // show/hide scrollToTop div
  window.onscroll = () => {
    document.documentElement.scrollTop > 400
      ? setIsVisible(true)
      : setIsVisible(false);
  };

  const handleScroll = (e) => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {isVisible && (
        <div
          onClick={(e) => handleScroll(e)}
          className="w-10 h-10 rounded-full bg-primaryDark saturate-150 flex items-center justify-center fixed right-5 bottom-3 z-10 cursor-pointer hover:w-8 hover:h-8 active:outline active:outline-offset-4 active:outline-[#109f97d9]"
        >
          <i>
            <RiArrowUpSLine size="30" fill="white" />
          </i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
