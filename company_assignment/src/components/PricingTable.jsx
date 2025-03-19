// src/components/PricingTable.js
import React from "react";

const plans = [
  { type: "Basic", price: "$10", features: ["Feature 1", "Feature 2"] },
  { type: "Premium", price: "$20", features: ["Feature 1", "Feature 2", "Feature 3"] }
];

const PricingTable = () => {
  return (
    <div className="container mx-auto py-10 flex flex-wrap justify-center gap-6">
      {plans.map((plan, index) => (
        <div key={index} className="bg-gray-400 p-6 rounded-lg w-64 text-center shadow-md">
          <h2 className="text-2xl font-bold">{plan.type}</h2>
          <p className="text-lg text-gray-700">{plan.price}</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            {plan.features.map((feature, i) => (
              <li key={i}>✔ {feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
