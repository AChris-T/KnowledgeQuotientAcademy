/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckIcon } from '../../icons';

const features = ['24/7 Access', 'Interactive Dashboard', 'Live Mentorship'];

export default function OnlineSchool() {
  return (
    <section className=" font-outfit ">
      <div className="container mx-auto  grid md:grid-cols-2 gap-12 items-center">
        {/* Image Animation */}
        <motion.img
          src="/images/ev.jpg"
          alt="Online School"
          className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl text-deepblack-100 font-bold mb-5">
            Online School
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Learn Anytime, Anywhere. Our Online School provides flexible access
            to web development, data analytics, and AI courses.
          </p>

          <p className="text-gray-600 mb-6 italic">
            Example: Mr. Thomas from Dangote Oil & Gas upskilled via our ML
            program.
          </p>

          {/* Features List */}
          <ul className="space-y-3 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
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
            Join Online School
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
