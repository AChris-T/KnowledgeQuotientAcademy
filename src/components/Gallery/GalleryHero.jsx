/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export default function GalleryHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
      <img
        src="/images/programs-hero.jpg"
        alt="Gallery Hero"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      {/* soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <motion.div
        className="relative z-10 text-white max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-5 leading-tight">
          Moments That Inspire Growth
        </h1>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
          Explore highlights from our programs, workshops, and community
          experiences
        </p>
      </motion.div>
    </section>
  );
}
