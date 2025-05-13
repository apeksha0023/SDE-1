import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Menu, X } from "lucide-react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800 overflow-hidden">
      {/* Sidebar (desktop) */}
      <aside className="hidden md:block w-64 bg-white shadow-md z-10">
        <Sidebar />
      </aside>

      {/* Sidebar (mobile) */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-40"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar panel */}
        <aside className="relative w-64 bg-white shadow-xl z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
              className="text-gray-600 hover:text-gray-800"
            >
              <X size={20} />
            </button>
          </div>
          <Sidebar />
        </aside>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white shadow-md px-4 md:px-6 flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu size={24} />
          </button>

          <h1 className="text-lg md:text-xl font-semibold">Dashboard</h1>

          {/* Right side (profile/settings) */}
          <div className="hidden md:block">
            {/* Optional: Add profile/settings/logout buttons here */}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
