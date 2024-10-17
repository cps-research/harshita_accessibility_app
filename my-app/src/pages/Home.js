import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import AboutContent from '../components/AboutContent';

const HomePage = ({ readElement }) => {
  return (
    <div>
      <HeroSection readElement={readElement}  tabindex="0"/>  {/* Pass readElement to HeroSection */}
      <FeatureSection readElement={readElement}  tabindex="0"/>  {/* Pass readElement to FeatureSection */}
      <AboutContent readElement={readElement}  tabindex="0"/>  {/* Pass readElement to AboutContent */}
    </div>
  );
};

export default HomePage;
