import React from 'react';
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import CompanySection from '../components/CompanySection';
import SkillsSection from '../components/SkillSection';
import ServicesSe from '../components/ServicesSe';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Services/>
    <SkillsSection/>
    <CompanySection/>
    <ServicesSe/>
    </>
  );
};

export default Home;
