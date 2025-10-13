import React from "react";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="w-64 fixed h-screen bg-gray-800">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 ml-64">
        <TopNavbar />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
