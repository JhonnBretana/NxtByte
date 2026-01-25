import React from "react";

function MainContent() {
  return (
    <div
      className="flex items-center justify-center h-50 z-10"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="flex flex-col gap-6 items-center">
        <span className="text-white text-6xl font-bold">Build, Create and Collaborations</span>
        <span className="text-white text-xl">We turn ideas into websites and games that work.</span>
      </div>
    </div>
  );
}

export default MainContent;
