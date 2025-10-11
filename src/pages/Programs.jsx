import React from 'react';
import ProgramsHero from '../components/Programs/ProgramsHero';
import ProgramList from '../components/Programs/ProgramList';
import OnlineSchool from '../components/Programs/OnlineSchool';
import EventVideos from '../components/Programs/EventsPrograms';

export default function Programs() {
  return (
    <div className="mt-20 text-deepblack-100 overflow-hidden">
      <ProgramsHero />
      <div className="px-4 lg:px-10">
        <ProgramList />
        <OnlineSchool />
        <EventVideos />
      </div>
    </div>
  );
}
