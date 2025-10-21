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
            Director's Speech
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Knowledge Quotient Academy, a place where learning is
            redefined and potential is unlocked. At KQA, we believe every
            learner deserves the right guidance, tools, and environment to
            thrive. Our mission is to build confident thinkers, problem solvers,
            and future innovators through quality teaching and practical,
            tech-driven learning. We are dedicated to excellence, integrity, and
            genuine results that speak for themselves. With us, education goes
            beyond textbooks, it’s about preparing minds for the challenges and
            opportunities of tomorrow.
          </p>
          <h3 className="font-bold text-black text-lg">Felix Dickson</h3>
        </motion.div>
      </div>
    </section>
  );
}
