// src/components/HeroSection.js
import React from "react";

const HeroSection = ({ useVideo = true }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Video or Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.avif')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-5xl font-bold">Welcome to Our Service</h1>
        <p className="mt-4 text-lg">Your perfect solution awaits</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
