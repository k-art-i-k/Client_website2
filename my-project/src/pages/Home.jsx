import React from 'react';
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import CompanySection from '../components/CompanySection';
import SkillsSection from '../components/SkillSection';
import ServicesSe from '../components/ServicesSe';
import AboutHome from '../components/AboutHome';
import Projects from '../components/Projects';
import Reviews from '../components/Reviews';
import MapSection from '../components/MapSection';


const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <ServicesSe />
      <AboutHome />
      {/* <Projects /> */}
      <Reviews />
      <MapSection />
    </>
  );
};

export default Home;
