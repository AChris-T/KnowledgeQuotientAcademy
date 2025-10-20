/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

export default function DirectorSection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 md:px-10  grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center items-center">
          <motion.img
            src="/images/PW2.jpg"
            alt="Director"
            className=" object-cover w-[500px] h-[450px] rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-deepblack-100 mb-4">
            Meet Our Director
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our Director is a visionary educator and technologist passionate
            about merging academic excellence with innovation. With years of
            experience in education and digital transformation, they lead the
            Academy’s mission to empower learners across Africa and beyond.
          </p>
          <p className="text-gray-700">
            Under their leadership, KQA has trained thousands of students in
            Robotics, AI, and emerging technologies, fostering creativity and
            future readiness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
