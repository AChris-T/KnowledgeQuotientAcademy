/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import VideoThumbnail from '../../common/VideoThumb';

export default function HomeService() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <motion.div
      className="my-10 mt-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3
        className="text-sm font-raleway font-bold mb-2 text-deepblack-100"
        variants={itemVariants}
      >
        See yourself
      </motion.h3>

      <div className="flex flex-col justify-between lg:flex-row gap-10 items-start">
        {/* LEFT SECTION */}
        <motion.div className="flex-1 w-full" variants={itemVariants}>
          <motion.h3
            className="text-deepblack-100 mb-4 font-outfit font-medium text-2xl md:text-4xl"
            variants={itemVariants}
          >
            Take a tour to some of our Events
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <VideoThumbnail
              thumbnailSrc="/images/FBV.jpg"
              videoSrc="https://youtu.be/HJWCAOYIl8Y?si=5fVS27dYnb0e7xQA"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION (IMAGE GRID) */}
        <motion.div
          className="flex-1 flex gap-2 flex-wrap sm:flex-nowrap"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <div className="flex flex-col w-full gap-2">
            {['/images/events.jpg', '/images/even.jpg'].map((src, i) => (
              <motion.img
                key={i}
                custom={i}
                src={src}
                alt={`Event ${i + 1}`}
                className="w-full h-58 hidden md:block object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                variants={imageVariants}
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
              />
            ))}
          </div>

          <div className="flex flex-col w-full gap-2">
            <motion.img
              src={'/images/Flyer.jpg'}
              alt="upcomingEvents"
              className="w-full h-full object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              variants={imageVariants}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.98 }}
            />
          </div>
        </motion.div>
      </div>

      {/* BUTTON SECTION */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.button
          className="relative px-6 cursor-pointer py-3 bg-green-100 text-white rounded-md font-medium 
               overflow-hidden transition-all duration-300 ease-out 
                hover:scale-105 hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (window.openRegistrationModal) window.openRegistrationModal();
          }}
        >
          Join Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
