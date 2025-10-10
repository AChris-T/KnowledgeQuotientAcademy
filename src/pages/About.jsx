import React from 'react';
import AboutHero from '../components/About/AboutHero';
import VisionMission from '../components/About/VissionMission';
import CoreValues from '../components/About/CoreValues';
import DirectorSection from '../components/About/DirectorSpeech';
import Staffs from '../components/About/Staffs';
import ImpactSection from '../components/About/Impact';

export default function About() {
  return (
    <div className="mt-20 text-deepblack-100 overflow-hidden">
      <AboutHero />
      <div className="px-4 lg:px-10">
        <VisionMission />
      </div>
      <CoreValues />
      <DirectorSection />
      <div className="px-4 lg:px-10">
        <Staffs />
        <ImpactSection />
      </div>
    </div>
  );
}
