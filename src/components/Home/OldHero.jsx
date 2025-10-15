/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { LineIcon, LocationIcon, ShineIcon, StoneIcon } from '../../icons';
import TestimonialCarousel from './Testimonial';

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="py-10 md:py-20 flex items-center font-outfit flex-col lg:flex-row gap-10 container overflow-hidden">
      {/* LEFT SECTION */}
      <motion.div
        className="flex items-center z-20 lg:items-start text-[#212529] md:flex-1 flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="flex items-center gap-2 mb-4"
          variants={textVariants}
          custom={0}
        >
          <LocationIcon />
          St Joseph, Eugene, Oregon, USA
        </motion.p>

        <motion.h3
          className="text-4xl md:text-6xl font-bold"
          variants={textVariants}
          custom={1}
        >
          Where learning
        </motion.h3>
        <motion.h3
          className="text-4xl md:text-6xl font-bold"
          variants={textVariants}
          custom={2}
        >
          meets innovation
        </motion.h3>
        <motion.h3
          className="text-4xl md:text-6xl font-bold"
          variants={textVariants}
          custom={3}
        >
          and excellence.
        </motion.h3>

        <motion.p
          className="text-[#5c5757] text-center lg:text-start md:text-base text-xs mb-2 mt-4 font-medium max-w-lg"
          variants={textVariants}
          custom={4}
        >
          We are dedicated to shaping bright minds through quality education,
          personalized tutoring, and hands-on tech training. Whether you’re a
          young learner, a secondary school student, or a professional seeking
          to advance your skills — we’ve got you covered.
        </motion.p>

        <motion.div variants={textVariants} custom={5}>
          <TestimonialCarousel />
        </motion.div>

        <motion.div
          className="flex gap-3 mt-6"
          variants={textVariants}
          custom={6}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-3 bg-green-100 text-white rounded-md font-medium 
              overflow-hidden transition-all duration-300 ease-out 
              hover:bg-green-700 hover:shadow-lg"
          >
            Explore Programs
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-3 border-2 border-green-100 text-green-100 rounded-md font-medium 
              transition-all duration-300 ease-out hover:bg-green-100 hover:text-white 
              hover:shadow-lg"
            onClick={() => { if (window.openRegistrationModal) window.openRegistrationModal(); }}
          >
            Join Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        className="md:flex-1 relative"
        initial="hidden"
        whileInView="visible"
        variants={imageVariants}
        viewport={{ once: true }}
      >
        <div className="absolute hidden md:block -left-4 top-0">
          <LineIcon />
        </div>

        <div className="relative">
          <motion.img
            src="/images/ih.jpg"
            alt="Hero"
            className="w-full h-full relative z-10 rounded-lg shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />

          <motion.div
            className="absolute z-10 -top-4 left-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <StoneIcon />
          </motion.div>

          <motion.div
            className="absolute z-10 -bottom-2 right-0 hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            <ShineIcon />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
