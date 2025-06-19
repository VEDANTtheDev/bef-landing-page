import React from 'react';
import Hero from '../components/LandingPage/Hero';
import WhyFashion from '../components/LandingPage/WhyFashion';
import AboutBEF from '../components/LandingPage/AboutBEF';
import WhoShouldAttend from '../components/LandingPage/WhoShouldAttend';
import Opportunities from '../components/LandingPage/Opportunities';
import EventDetails from '../components/LandingPage/EventDetails';
import PricingSection from '../components/LandingPage/PricingSection';
import CTASection from '../components/LandingPage/CTASection';
import FAQs from '../components/LandingPage/FAQs';
import IndustriesCovered from '../components/LandingPage/IndustriesCovered';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <WhyFashion />
      <AboutBEF />
      <WhoShouldAttend />
      <Opportunities />
      <IndustriesCovered/>
      <EventDetails />
      <PricingSection />
      <CTASection />
      <FAQs />
    </div>
  );
};

export default LandingPage;
