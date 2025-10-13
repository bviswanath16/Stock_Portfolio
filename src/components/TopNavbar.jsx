import React, { useState } from "react";
import { Bell, User, Search, Download, Upload } from "lucide-react";

export default function Navbar({ onDeposit, onWithdraw, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Dummy notifications
  const notifications = [
    { id: 1, text: "TCS gained +2.4% today" },
    { id: 2, text: "INFY dividend credited ₹12" },
    { id: 3, text: "Cash deposit successful" },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="flex justify-between items-center p-3 bg-[#111315] border-b border-neutral-800 text-gray-200 sticky top-0 z-50">
      <h1 className="text-lg font-semibold text-white">SnapInvest</h1>

      {/* Search bar */}
      <div className="relative w-1/3">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search stocks..."
          className="w-full bg-[#1a1d22] text-gray-200 pl-8 pr-3 py-2 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 relative">
        {/* Deposit */}
        <button
          onClick={onDeposit}
          className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-700 px-3 py-1.5 rounded-lg text-sm transition"
        >
          <Download size={14} />
          Deposit
        </button>

        {/* Withdraw */}
        <button
          onClick={onWithdraw}
          className="flex items-center gap-1 border border-cyan-500 hover:bg-cyan-900 px-3 py-1.5 rounded-lg text-sm transition"
        >
          <Upload size={14} />
          Withdraw
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications((prev) => !prev)}
            className="relative p-2 hover:bg-neutral-800 rounded-full"
          >
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-[#1c1f25] border border-neutral-700 rounded-lg shadow-lg text-sm">
              <div className="p-2 font-medium text-gray-300 border-b border-neutral-700">
                Notifications
              </div>
              <ul className="max-h-48 overflow-y-auto">
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    className="px-3 py-2 hover:bg-neutral-800 border-b border-neutral-700 last:border-none"
                  >
                    {n.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile((prev) => !prev)}
            className="p-2 hover:bg-neutral-800 rounded-full"
          >
            <User size={18} />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-40 bg-[#1c1f25] border border-neutral-700 rounded-lg shadow-lg text-sm">
              <ul className="divide-y divide-neutral-700">
                <li className="px-3 py-2 hover:bg-neutral-800 cursor-pointer">
                  Profile
                </li>
                <li className="px-3 py-2 hover:bg-neutral-800 cursor-pointer">
                  Settings
                </li>
                <li className="px-3 py-2 hover:bg-neutral-800 cursor-pointer text-red-400">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
