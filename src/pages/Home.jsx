import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import HomeService from '../components/Home/HomeEvents';
import AboutSection from '../components/Home/AboutSection';
import PhotoGallery from '../components/Home/PhotoGallery';
import TeachersSection from '../components/Home/TeachersSection';
import FAQSection from '../components/Home/FaqSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="px-4 lg:px-10">
        <AboutSection />
        <HomeService />
        <TeachersSection />
        <PhotoGallery />
        <FAQSection />
      </div>
    </div>
  );
}
