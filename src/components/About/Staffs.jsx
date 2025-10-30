/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const teachers = [
  {
    name: 'Blessing Uba',
    role: 'Quality assurance manager',
    img: '/tutors/tutor.jpg',
  },
  {
    name: 'Mary Olalanlege',
    role: 'Educator',
    img: '/tutors/tutor1.jpg',
  },
  {
    name: 'Mr Boniface Onuh',
    role: 'Educator',
    img: '/tutors/tutor3.jpg',
  },
  {
    name: 'Mr Paul Adesanya',
    role: 'Educator',
    img: '/tutors/tutor4.jpg',
  },
];

export default function Staffs() {
  return (
    <motion.section
      className="flex flex-col  font-outfit md:items-start items-center justify-center  "
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className="text-start mb-10 md:flex-1/4"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="inline-block font-raleway font-bold text-deepblack-100 text-sm rounded-full mb-2">
          Taking care of your child
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-deepblack-100 mb-3">
          Our teachers
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          We take pride in shaping young minds with care, discipline, and a
          focus on lifelong success.
        </p>
      </motion.div>

      {/* Teacher Cards */}
      <motion.div
        className="md:flex-3/4 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="grid gap-8 md:gap-3  md:grid-cols-3 lg:grid-cols-4 w-full mx-auto">
          {teachers.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white w-full rounded-2xl overflow-hidden shadow-md border border-amber-100 hover:shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1 }}
            >
              <div className="relative h-74">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="p-5 text-center bg-amber-100/20">
                <h3 className="text-lg font-semibold text-green-800 mb-1">
                  {t.name}
                </h3>
                <p className="text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
