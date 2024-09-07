import React, { useState } from "react";
import Logo from "./../assets/images/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-navbarColor p-4 sm:p-6 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img src={Logo} alt="Company Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-white text-lg font-bold">
            Fusion Flare Technologies
          </h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex flex-col lg:flex-row lg:space-x-9 ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <a href="/" className="block py-2 text-gray-300 hover:text-white">
            Home
          </a>
          <a
            href="/about"
            className="block py-2 text-gray-300 hover:text-white"
          >
            About
          </a>
          <a
            href="/services"
            className="block py-2 text-gray-300 hover:text-white"
          >
            Services
          </a>
          <a href="/work" className="block py-2 text-gray-300 hover:text-white">
            Our Work
          </a>
          <a
            href="/blogs"
            className="block py-2 text-gray-300 hover:text-white"
          >
            Blogs
          </a>
          <a
            href="/privacy"
            className="block py-2 text-gray-300 hover:text-white"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-navbarColor z-50 p-4 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="self-end text-gray-300 hover:text-white mb-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="services" className="text-gray-300 hover:text-white">
                Services
              </a>
              <a href="/work" className="text-gray-300 hover:text-white">
                Our Work
              </a>
              <a href="/blogs" className="text-gray-300 hover:text-white">
                Blogs
              </a>
              <a href="/privacy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
