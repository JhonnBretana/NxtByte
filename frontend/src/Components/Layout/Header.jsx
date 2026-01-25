import React from "react";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 font-bold"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">NxtProj.</span>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#home"
                  className="text-white hover:text-gray-300 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-gray-300 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white hover:text-gray-300 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#collaborations"
                  className="text-white hover:text-gray-300 transition"
                >
                  Collaborations
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Section */}
          <div className="hidden sm:flex flex-col text-right gap-1">
            <span className="text-white">Contact</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
