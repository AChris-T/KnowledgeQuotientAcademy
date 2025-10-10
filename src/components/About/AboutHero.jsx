/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative font-outfit h-[55vh] flex items-center justify-center text-center overflow-hidden">
      <img
        src="/images/aboutus.jpg"
        alt="About Knowledge Quotient Academy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 text-white max-w-4xl px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About Knowledge Quotient Academy
        </h1>
        <p className="text-gray-200 text-base md:text-lg">
          Merging academic mastery with digital innovation to prepare learners
          for the challenges of the 21st century.
        </p>
      </motion.div>
    </section>
  );
}
