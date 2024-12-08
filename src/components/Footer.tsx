import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 md:flex md:justify-between md:items-center">
        {/* Company Info */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">GoCars</h2>
          <p className="text-sm mt-2">Your trusted car rental service</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-6 text-center">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-sm text-center mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} GoCars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
