import React from "react";
import { RiCloseLine } from "react-icons/ri";

const VideoPlayer = ({ videoLink, title, setPlayVideo }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black z-10 flex items-center justify-center">
      <iframe
        src={videoLink}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          width: "600px",
          aspectRatio: 16 / 9,
          overflow: "hidden",
        }}
      ></iframe>
      <button
        className="fixed top-10 right-10"
        onClick={() => setPlayVideo(false)}
      >
        <RiCloseLine size="30px" fill="white" />
      </button>
      {/* <video>
        <source src={videoLink}></source>
      </video> */}
    </div>
  );
};

export default VideoPlayer;
