/* eslint-disable no-unused-vars */
import React from 'react';
import {
  AcedemicIcon,
  CertificationIcon,
  MediaIcon,
  RocketIcon,
  VocationalIcon,
} from '../../icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const programs = [
    {
      icon: <AcedemicIcon />,
      title: 'Academic Excellence Programs',
      desc: 'WAEC/NECO/JAMB/IGCSE, SAT, IELTS.',
    },
    {
      icon: <RocketIcon />,
      title: 'Technology & Innovation Hub',
      desc: 'Coding, Web Dev, Data Analytics, AI, ML, Cybersecurity, Cloud.',
    },
    {
      icon: <MediaIcon />,
      title: 'Creative & Media Skills',
      desc: 'Graphics Design, Video Editing, Animation, Photography.',
    },
    {
      icon: <VocationalIcon />,
      title: 'Vocational & Entrepreneurship',
      desc: 'Food Processing, Business Development, Soft Skills.',
    },
    {
      icon: <CertificationIcon />,
      title: 'Corporate & Professional Training',
      desc: 'Digital Transformation, ICT Workshops, Leadership.',
    },
  ];

  return (
    <motion.div
      className="my-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3
        className="text-sm font-raleway font-bold mb-2"
        variants={itemVariants}
      >
        About us
      </motion.h3>

      <div className="flex flex-col justify-between lg:flex-row gap-10">
        {/* LEFT SECTION */}
        <motion.div className="flex-1" variants={itemVariants}>
          <motion.h3
            className="text-deepblack-100 font-outfit font-medium text-2xl md:text-4xl max-w-[500px]"
            variants={itemVariants}
          >
            Shaping bright minds through quality education
          </motion.h3>

          <motion.p className="text-gray-100 mt-2" variants={itemVariants}>
            Knowledge Quotient Academy merges academic mastery with digital
            innovation, preparing learners for the challenges of the 21st
            century.{' '}
            <Link to={'/about'} className="underline cursor-pointer text-black">
              Read more
            </Link>
          </motion.p>

          {/* Image with floating overlay card */}
          <motion.div
            className="relative h-[380px] w-full mt-4"
            variants={itemVariants}
          >
            <motion.img
              src="/images/about.jpg"
              alt="Graduates"
              className="h-full w-full object-cover rounded-2xl shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="absolute bottom-4 left-4 bg-amber-100 backdrop-blur-md rounded-xl shadow-md flex items-center gap-3 p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-[white] text-white rounded-full p-2">
                <AcedemicIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">400+</h3>
                <p className="text-sm text-gray-600">
                  Graduated Students Every Year
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          className="flex-1 font-outfit mt-2"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-deepblack-100 text-2xl font-medium md:text-4xl"
            variants={itemVariants}
          >
            Our Programs
          </motion.h3>
          <motion.p className="text-gray-100 mb-3" variants={itemVariants}>
            Building future-ready learners through quality education.
          </motion.p>

          {/* Program Cards */}
          <motion.div
            className="flex flex-col gap-3 mt-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                className="flex p-3 items-center gap-3 bg-amber-100 bg-opacity-10 backdrop-blur-md shadow-p-3 rounded-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div>{prog.icon}</div>
                <div>
                  <h3 className="text-deepblack-100 font-medium">
                    {prog.title}
                  </h3>
                  <p className="text-deepblack-100 text-sm">{prog.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
