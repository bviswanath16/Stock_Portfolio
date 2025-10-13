import React from "react";
import { Home, BarChart, Briefcase, Star, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/" },
    { name: "Portfolio", icon: <Briefcase size={20} />, path: "/portfolio" },
    { name: "Watchlist", icon: <Star size={20} />, path: "/watchlist" },
    { name: "Analytics", icon: <BarChart size={20} />, path: "/analytics" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-gray-200 flex flex-col shadow-lg">
      {/* Brand Name */}
      <div className="p-5 text-2xl font-bold text-indigo-400">SnapInvest</div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        © 2025 SnapInvest
      </div>
    </div>
  );
}
