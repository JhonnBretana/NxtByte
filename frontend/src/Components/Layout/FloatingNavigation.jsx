import React from "react";
import { FaHome, FaUsers, FaHandshake, FaServicestack } from "react-icons/fa";

const FloatingNavigation = () => {
  const navItems = [
    { icon: <FaHome />, label: "Home", href: "/" },
    { icon: <FaUsers />, label: "Clients", href: "/clients" },
    { icon: <FaServicestack />, label: "Services", href: "/about" },
    { icon: <FaHandshake />, label: "Collab", href: "/collaboration" },
  ];

  return (
    <div className="fixed w-100 bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg shadow-2xl backdrop-blur-md border border-white/10">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex group relative items-center justify-center w-20 h-10 rounded-full text-slate-200 hover:bg-white/20 hover:text-blue-300 transition-all duration-300 hover:scale-110"
            title={item.label}
          >
            <span className="text-lg">{item.icon}</span>
            <span
              className="absolute bottom-full mb-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default FloatingNavigation;
