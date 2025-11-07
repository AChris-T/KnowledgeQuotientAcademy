/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LocationIcon } from '../../icons';
import TestimonialCarousel from './Testimonial';
import { NavLink } from 'react-router-dom';

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const slides = [
    { src: '/images/ih.jpg' },
    { src: '/images/gallery/5.jpg' },
    { src: '/images/gallery/7.jpg' },
    { src: '/images/gallery/14.jpg' },
    { src: '/images/gallery/13.jpg' },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div
      className="relative w-full h-[580px] md:h-[700px] overflow-hidden "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Carousel */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Text & Content Overlay */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center  justify-center px-6 md:px-20 text-white font-outfit"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center">
          <motion.h3
            className="text-3xl md:text-6xl font-bold leading-tight"
            variants={textVariants}
            custom={1}
          >
            Where learning
          </motion.h3>
          <motion.h3
            className="text-3xl md:text-7xl md:-mt-4 font-bold leading-tight"
            variants={textVariants}
            custom={2}
          >
            meets innovation
          </motion.h3>
          <motion.h3
            className="text-3xl md:text-7xl md:-mt-4 font-bold leading-tight"
            variants={textVariants}
            custom={3}
          >
            and excellence.
          </motion.h3>
        </div>

        <motion.p
          className="text-gray-200 text-center md:text-base text-sm max-w-xl mt-4"
          variants={textVariants}
          custom={4}
        >
          We are dedicated to shaping bright minds through quality education,
          personalized tutoring, and hands-on tech training. Whether you’re a
          young learner, a student, or a professional seeking to advance your
          skills — we’ve got you covered.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 mt-6"
          variants={textVariants}
          custom={5}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 cursor-pointer bg-green-100 text-white rounded-md font-medium 
              transition-all duration-300 hover:bg-green-100 shadow-md"
          >
            <NavLink to={'/programs'}>Explore Programs</NavLink>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 cursor-pointer text-green-100 bg-white rounded-md font-medium 
              transition-all duration-300 hover:bg-green-100 hover:text-white shadow-md inline-block text-center"
            onClick={(e) => { e.preventDefault(); if (window.openRegistrationModal) window.openRegistrationModal(); }}
          >
            Enroll Now
          </motion.a>
        </motion.div>

        {/* Carousel under hero (Testimonials) */}
        <motion.div
          className="mt-8 w-full md:w-[60%] flex items-center"
          variants={textVariants}
          custom={6}
        >
          <TestimonialCarousel />
        </motion.div>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white 
        w-10 h-10 rounded-full hidden md:flex justify-center items-center 
        hover:bg-black/70 transition-all duration-300 hover:scale-110"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white 
        w-10 h-10 rounded-full hidden md:flex justify-center items-center 
        hover:bg-black/70 transition-all duration-300 hover:scale-110"
      >
        ❯
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 ${
              i === current ? 'bg-white shadow-md' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
