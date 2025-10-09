import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import HomeService from '../components/Home/HomeEvents';
import AboutSection from '../components/Home/AboutSection';
import PhotoGallery from '../components/Home/PhotoGallery';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HomeService />
      <PhotoGallery />
    </div>
  );
}
