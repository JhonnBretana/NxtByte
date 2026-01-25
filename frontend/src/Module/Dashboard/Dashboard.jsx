import React from "react";
import { HexagonBackground } from "@/Components/animate-ui/components/backgrounds/hexagon";
import Header from "@/Components/Layout/Header";
import MainContent from "./MainContent";
import FloatingNavigation from "@/Components/Layout/FloatingNavigation";
import MiniWebsite from "@/Components/miniobject/mini_website";
import MiniGames from "@/Components/miniobject/mini_games";
import Gamepad from "@/Assets/gamepad.png";
import Web from "@/Assets/web.png";

function Dashboard() {
  return (
    <>
      <div className="relative w-full h-screen bg-black dark flex flex-col">
        <div className="absolute -left-30 -top-30 h-100 z-10 text-white flex items-center gap-2  rotate-10 ">
        <img src={Gamepad} alt="Gamepad" className="h-60"/>
        </div>
        <div className="absolute -right-45 top-0 h-100 z-10 text-white flex items-center gap-2  rotate-6 ">
        <img src={Web} alt="Gamepad" className="h-60"/>
        </div>
        <div className="absolute inset-0">
          <HexagonBackground />
        </div>
          <Header />
          <FloatingNavigation />
        <div className="relative mt-50">
          <MainContent />
        </div>
        <div className="fixed bottom-8 right-8 z-10 transform -rotate-6 ">
          <MiniWebsite />
        </div>
        <div className="fixed bottom-8 left-8 z-10 transform rotate-6 ">
          <MiniGames />
        </div>
      </div>
    </>
  );
}

export default Dashboard;