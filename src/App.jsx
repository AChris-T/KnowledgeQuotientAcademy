import React from 'react';
import { CircleIcon, SmileIcon, StarIcon } from './icons';
import Navbar from './common/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './common/Footer';

export default function App() {
  return (
    <div className=" mx-auto max-w-[1400px]">
      <div className="mb-20">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
