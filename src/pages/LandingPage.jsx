import React from "react";
import Hero from "../components/LandingPage/Hero";
import AboutBEF from "../components/LandingPage/AboutBEF";
import Opportunities from "../components/LandingPage/Opportunities";
import IndustriesCovered from "../components/LandingPage/IndustriesCovered";
import WhyFashion from "../components/LandingPage/WhyFashion";
import ConclaveIntro from "../components/LandingPage/ConclaveIntro"; // ✅ create this
import EventDetails from "../components/LandingPage/EventDetails";
import PricingSection from "../components/LandingPage/PricingSection";
import WhoShouldAttend from "../components/LandingPage/WhoShouldAttend";
import CTASection from "../components/LandingPage/CTASection"; // aka "Secure Your Spot"
import FAQs from "../components/LandingPage/FAQs";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutBEF />
      <Opportunities />
      <IndustriesCovered />
      <WhyFashion />
      <ConclaveIntro /> {/* ⬅️ Add this new component */}
      <EventDetails />
      <PricingSection />
      <WhoShouldAttend />
      <CTASection />
      <FAQs />
    </div>
  );
};

export default LandingPage;
