import React from "react";

// pages/about.tsx
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        
        {/* Image Section */}
        <div className="flex justify-center mb-6">
          <Image 
            src="/car-43993_1280.png" // Replace with your image path
            alt="logo"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Information Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Who We Are</h2>
          <p className="text-gray-600">
            At GoCars, we provide top-notch car rental services tailored to meet your needs. 
            Whether you're looking for a compact car for the city or an SUV for the family, 
            we've got you covered!
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Services Offered</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Daily and Weekly Car Rentals</li>
            <li>Luxury Car Rentals</li>
            <li>Corporate Packages</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Experience</h2>
          <p className="text-gray-600">
            With over <span className="font-bold">10 years of experience</span> in the industry, 
            we pride ourselves on delivering reliable and affordable car rental solutions to 
            thousands of satisfied customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;