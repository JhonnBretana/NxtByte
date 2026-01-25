import React from "react";
import Logo from "@/Assets/Logo1.png";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 font-bold"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-7xl mt-10 mx-auto px-2 sm:px-6 lg:px-1">
        <div className="flex items-center justify-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2"> 
            <img src={Logo} alt="" className="h-30" />
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;