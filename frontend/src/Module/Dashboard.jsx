import React from "react";
import { HexagonBackground } from "@/Components/animate-ui/components/backgrounds/hexagon";
import Header from "@/Components/Layout/Header";
function Dashboard() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative", backgroundColor: "#0a0a0a" }} className="dark">
        
        <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0}}>
          <HexagonBackground />
        </div>
          <Header/>
      </div>
    </>
  );
}

export default Dashboard;