import React from "react";
import Hero from "../components/LandingPage/Hero.jsx";
import AboutBEF from "../components/LandingPage/AboutBEF.jsx";
import Opportunities from "../components/LandingPage/Opportunities.jsx";
import IndustriesCovered from "../components/LandingPage/IndustriesCovered.jsx";
import WhyFashion from "../components/LandingPage/WhyFashion.jsx";
import ConclaveIntro from "../components/LandingPage/ConclaveIntro.jsx";
import EventDetails from "../components/LandingPage/EventDetails.jsx";
import PricingSection from "../components/LandingPage/PricingSection.jsx";
import WhoShouldAttend from "../components/LandingPage/WhoShouldAttend.jsx";
import CTASection from "../components/LandingPage/CTASection.jsx";
import FAQs from "../components/LandingPage/FAQs.jsx";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutBEF />
      <Opportunities />
      <IndustriesCovered />
      <WhyFashion />
      <ConclaveIntro />
      <EventDetails />
      <PricingSection />
      <WhoShouldAttend />
      <CTASection />
      <FAQs />
    </div>
  );
};

export default LandingPage;
