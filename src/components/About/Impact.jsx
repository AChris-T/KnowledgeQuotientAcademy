/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ImpactSection() {
  return (
    <section className="relative font-outfit  py-20 overflow-hidden">
      {/* Decorative background patterns */}

      <div className="relative container  space-y-20">
        {/* === IMPACT SECTION === */}
        <motion.div
          className="text-start max-w-4xl "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deepblack-100 mb-6">
            Our Impact
          </h2>
          <p className="text-gray-700 max-w-3xl  leading-relaxed mb-10">
            Over the years, KQA has impacted lives through technology-driven
            education, fostering creativity and innovation among young learners.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: '500+ Students Trained',
                desc: 'KQA @ American Corner, Ikeja – Robotics and STEM.',
              },
              {
                title: 'AI Innovation',
                desc: 'KQA @ Emzor Pharmaceutical – Presented an AI obstacle robot.',
              },
              {
                title: 'Hands-on Learning',
                desc: 'KQA @ Precious Cornerstone University – Robotics & AI workshop.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-green-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-block mt-10 px-8 py-3 bg-green-100 text-white rounded-full font-medium hover:bg-green-700 transition-all duration-300"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
