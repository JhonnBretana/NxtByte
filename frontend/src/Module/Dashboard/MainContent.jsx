import React from "react";
import { FaPaperPlane } from "react-icons/fa";

function MainContent() {
  return (
    <div
      className="flex items-center justify-center flex-col h-50 z-10"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="flex flex-col gap-6 items-center ">
        <span className="text-white text-7xl font-bold">
          Build, Create and Collaborations
        </span>
        <span className="text-white text-xl">
          We turn ideas into websites and games that work.
        </span>
      </div>

      <div className="mt-8">
        <button className="flex items-center gap-2 px-8 py-3 text-white border border-white/20 rounded-lg bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer font-semibold text-lg hover:gap-3 hover:scale-105 group">
          <span>Message Us</span>
          <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

export default MainContent;
