// src/App.js
import React from "react";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import PricingTable from "./components/PricingTable";
import ContactForm from "./components/ContactForm";
import UserSearch from "./components/UserSearch";

const App = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <HeroSection />
      <ServiceCards />
      <PricingTable />
      <UserSearch />
      <ContactForm />
    </div>
  );
};

export default App;
