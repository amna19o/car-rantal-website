"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isRidesDropdownOpen, setRidesDropdownOpen] = useState(false);
  const [isPricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ridesDropdownRef = useRef<HTMLDivElement>(null);
  const pricingDropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdowns
  const toggleRidesDropdown = () => {
    setRidesDropdownOpen((prev) => !prev);
    setPricingDropdownOpen(false);
  };

  const togglePricingDropdown = () => {
    setPricingDropdownOpen((prev) => !prev);
    setRidesDropdownOpen(false);
  };

  // Close dropdowns and mobile menu when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      ridesDropdownRef.current &&
      !ridesDropdownRef.current.contains(event.target as Node)
    ) {
      setRidesDropdownOpen(false);
    }
    if (
      pricingDropdownRef.current &&
      !pricingDropdownRef.current.contains(event.target as Node)
    ) {
      setPricingDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-slate-400 hover:bg-slate-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/home">GoCars</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          {/* Rides Dropdown */}
          <div ref={ridesDropdownRef} className="relative">
            <button
              onClick={toggleRidesDropdown}
              className="bg-slate-500 px-4 py-2 rounded hover:bg-slate-700"
            >
              Look For Rides
            </button>
            {isRidesDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#rent-bike">Rent Bike</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#rent-auto">Rent Auto</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#rent-car">Rent Car</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#rent-ac-car">Rent AC Car</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Pricing Dropdown */}
          <div ref={pricingDropdownRef} className="relative">
            <button
              onClick={togglePricingDropdown}
              className="bg-slate-500 px-4 py-2 rounded hover:bg-slate-700"
            >
              Pricing
            </button>
            {isPricingDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 border border-gray-300 rounded-md shadow-md">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#range-200-400">Range 200-400 Rs</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#range-400-600">Range 400-600 Rs</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#range-600-800">Range 600-800 Rs</Link>
                </li>
              </ul>
            )}
          </div>

          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-700">
            BOOK Now!
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-500 text-white p-4">
          <Link href="/about" className="block py-2 hover:bg-slate-600">
            About Us
          </Link>
          <Link href="/contact" className="block py-2 hover:bg-slate-600">
            Contact Us
          </Link>
          <div ref={ridesDropdownRef} className="py-2">
            <button
              onClick={toggleRidesDropdown}
              className="w-full text-left hover:bg-slate-600"
            >
              Look For Rides
            </button>
            {isRidesDropdownOpen && (
              <ul className="ml-4">
                <li className="py-2 hover:bg-slate-600">
                  <Link href="#rent-bike">Rent Bike</Link>
                </li>
                <li className="py-2 hover:bg-slate-600">
                  <Link href="#rent-auto">Rent Auto</Link>
                </li>
                <li className="py-2 hover:bg-slate-600">
                  <Link href="#rent-car">Rent Car</Link>
                </li>
                <li className="py-2 hover:bg-slate-600">
                  <Link href="#rent-ac-car">Rent AC Car</Link>
                </li>
              </ul>
            )}
          </div>
          <div ref={pricingDropdownRef} className="py-2">
            <button
              onClick={togglePricingDropdown}
              className="w-full text-left hover:bg-slate-600"
            >
              Pricing
            </button>
            {isPricingDropdownOpen && (
              <ul className="ml-4">
                <li className="py-2 hover:bg-slate-600">
                  <Link href="#range-200-400">Range 200-400 Rs</Link>
                </li>
                <li className="py-2 hover:bg-slate-600">
                  <Link href="#range-400-600">Range 400-600 Rs</Link>
                </li>
                <li className="py-2 hover:bg-slate-600">
                  <Link href="#range-600-800">Range 600-800 Rs</Link>
                </li>
              </ul>
            )}
          </div>
          <button className="bg-green-500 w-full mt-4 px-4 py-2 rounded hover:bg-green-700">
            BOOK Now!
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
