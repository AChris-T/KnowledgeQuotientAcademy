/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <section className="py-20 container mx-auto  grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-deepblack-100 mb-3">
          Our Vision
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          To become Africa’s leading hub for innovative learning, empowering
          individuals with knowledge, skills, and values that transform lives
          and communities.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-deepblack-100 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          To deliver quality, technology-driven, and student-centered education
          that inspires excellence, creativity, and lifelong learning.
        </p>
      </motion.div>
    </section>
  );
}
