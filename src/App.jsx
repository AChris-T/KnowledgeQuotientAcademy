import React from 'react';
import Navbar from './common/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './common/Footer';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ScrollToTop from './common/ScrollToTop';
import RegistrationModal from './components/RegistrationModal';
import ToastHost from './common/ToastHost';
import PartnerModal from './components/PartnerModal';

const WHATSAPP_NUMBER = '2348012345678';
const DEFAULT_MESSAGE = 'Hello! I would like to chat with an agent.';

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
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7 fill-current">
          <path d="M19.11 17.35c-.26-.13-1.51-.74-1.74-.83-.23-.09-.4-.13-.57.13-.17.26-.66.83-.81 1-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.06-1.27-.76-.67-1.27-1.49-1.42-1.75-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.43l-.49-.01c-.17 0-.45.06-.68.32-.23.26-.89.86-.89 2.1 0 1.24.91 2.44 1.04 2.6.13.17 1.79 2.73 4.34 3.83.61.26 1.09.41 1.46.53.61.19 1.16.16 1.6.1.49-.07 1.51-.62 1.72-1.22.21-.6.21-1.11.15-1.22-.06-.11-.24-.17-.5-.3z"/>
          <path d="M26.62 5.39A12.55 12.55 0 0 0 16.02 2c-6.93.03-12.56 5.7-12.54 12.63 0 2.22.58 4.39 1.69 6.31L3 30l9.21-2.41a12.55 12.55 0 0 0 6.06 1.58h.01c6.93 0 12.57-5.64 12.59-12.57A12.53 12.53 0 0 0 26.62 5.39zM16.27 27.1h-.01a10.94 10.94 0 0 1-5.58-1.54l-.4-.24-5.46 1.43 1.46-5.33-.26-.44a10.92 10.92 0 0 1-1.62-5.75C4.39 8.97 9.36 4 15.99 3.97h.03c5.84 0 10.63 4.77 10.61 10.61-.02 5.84-4.8 10.52-10.36 10.52z"/>
        </svg>
      </a>
      <RegistrationModal />
      <PartnerModal />
      <ToastHost />
    </div>
  );
}
