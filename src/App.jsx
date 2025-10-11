import React from 'react';
import { CircleIcon, SmileIcon, StarIcon } from './icons';
import Navbar from './common/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './common/Footer';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ScrollToTop from './common/ScrollToTop';

export default function App() {
  return (
    <div className=" mx-auto max-w-[1400px]">
      <ScrollToTop />
      <div className="mb-20">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
