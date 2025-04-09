import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import bgImage from "../assets/images/bgImg.jpg";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navbar */}
        <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">
          <div className="text-black font-bold text-xl">CareSync</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-black font-medium">
            <li className="hover:text-green-600 cursor-pointer">Expertise</li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="hover:text-green-600 cursor-pointer">Contact us</li>
            <li className="hover:text-green-600 cursor-pointer">
              Our Policies
            </li>
          </ul>

          {/* Join Us Button */}
          <button className="hidden md:block bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700 transition duration-300">
            Join Us
          </button>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden text-black text-2xl" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-sm rounded-md shadow-md px-6 py-4 mx-4 mt-[-10px] text-black font-medium space-y-2 transition-all duration-300">
            <a href="#" className="block hover:text-green-600">
              Expertise
            </a>
            <a href="#" className="block hover:text-green-600">
              About
            </a>
            <a href="#" className="block hover:text-green-600">
              Contact us
            </a>
            <a href="#" className="block hover:text-green-600">
              Our Policies
            </a>
            <button className="w-full mt-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
              Join Us
            </button>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-start justify-center text-left px-4 sm:px-8 md:px-[100px] pt-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium mb-4 tracking-wider text-black">
            CareSync
          </h1>
          <p className="text-lg sm:text-xl text-black mb-3 ml-1 sm:ml-3 leading-tight">
            Your Partner in Health.
          </p>
          <p className="text-base sm:text-lg md:text-2xl font-light text-white ml-1 sm:ml-2 leading-tight">
            CareSync, Your partner in health record keeping,
            <br />
            allows medical professionals to store patient info,
            <br />
            and send out health updates to their patients.
            <br />
            CareSync is health made easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="bg-white text-black py-2 px-8 sm:px-10 rounded-[20px] hover:bg-green-500 transition duration-300 mt-4 ml-1 sm:ml-3">
              Login
            </button>
            <button className="bg-gray-500/10 backdrop-blur-md text-white py-2 px-8 sm:px-10 rounded-[20px] hover:bg-green-500 transition duration-300 mt-2 sm:mt-4 ml-1 sm:ml-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
