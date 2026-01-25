import React from "react";
import { HexagonBackground } from "@/Components/animate-ui/components/backgrounds/hexagon";
import Header from "@/Components/Layout/Header";
import MainContent from "./MainContent";
import FloatingNavigation from "@/Components/Layout/FloatingNavigation";
function Dashboard() {
  return (
    <>
      <div className="relative w-full h-screen bg-black dark flex flex-col">
        <div className="absolute inset-0">
          <HexagonBackground />
        </div>
          <Header />
          <FloatingNavigation />
        <div className="relative mt-50">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default Dashboard;