import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserInjured,
  FaCalendarAlt,
  FaCog,
  FaBars,
} from "react-icons/fa";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } transition-all duration-300 bg-black p-4`}
      >
        <div className="flex items-center justify-between mb-10">
          <h1
            className={`text-2xl font-bold text-leafgreen transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            CareSync
          </h1>
          <button
            onClick={toggleSidebar}
            className={`text-white text-xl hover:text-leafgreen transition ${
              isOpen ? "" : "ml-[10px]"
            }`}
            title="Toggle Menu"
          >
            <FaBars />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 text-white text-center">
          <SidebarItem
            to="/dashboard"
            icon={<FaHome />}
            label="Dashboard"
            isOpen={isOpen}
          />
          <SidebarItem
            to="/patients"
            icon={<FaUserInjured />}
            label="Patients"
            isOpen={isOpen}
          />
          <SidebarItem
            to="/appointments"
            icon={<FaCalendarAlt />}
            label="Appointments"
            isOpen={isOpen}
          />
          <SidebarItem
            to="/settings"
            icon={<FaCog />}
            label="Settings"
            isOpen={isOpen}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-4">Welcome, Nurse!</h2>
        <p>Here’s what’s on your schedule today.</p>
      </div>
    </div>
  );
};

// Sidebar item component
const SidebarItem = ({ to, icon, label, isOpen }) => (
  <Link
    to={to}
    className="flex items-center space-x-4 hover:bg-leafgreen/20 p-2 rounded-md transition duration-400"
  >
    <div className="text-xl">{icon}</div>
    {isOpen && <span className="text-md">{label}</span>}
  </Link>
);

export default Dashboard;
