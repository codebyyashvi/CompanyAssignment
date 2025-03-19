// src/components/ServiceCards.js
import React from "react";

const services = [
  { title: "Fast Service", description: "Quick and efficient service." },
  { title: "Secure", description: "We prioritize your security." },
  { title: "Affordable", description: "Best prices in the market." }
];

const ServiceCards = () => {
  return (
    <div className="container mx-auto py-10 grid gap-6 md:grid-cols-3 px-10">
      {services.map((service, index) => (
        <div key={index} className="bg-gray-400 p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
