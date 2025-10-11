import React from 'react';
import GalleryHero from '../components/Gallery/GalleryHero';
import GalleryGrid from '../components/Gallery/GalleryGrid';

export default function Gallery() {
  return (
    <div>
      <GalleryHero />
      <div className="px-4 lg:px-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
