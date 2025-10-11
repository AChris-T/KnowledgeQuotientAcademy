/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export default function ProgramsHero() {
  return (
    <section className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden">
      <img
        src="/images/programs-hero.jpg"
        alt="Programs Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      <motion.div
        className="relative z-10 text-white max-w-3xl px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Programs</h1>
        <p className="text-gray-200 text-lg">
          Empowering learners through innovative education and future-ready
          skills.
        </p>
      </motion.div>
    </section>
  );
}
