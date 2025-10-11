/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Academic Excellence Programs',
    description: 'Home & Online Tutoring, WAEC/NECO/JAMB/IGCSE, SAT, IELTS.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-green-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m8-6a8 8 0 11-16 0 8 8 0 0116 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Technology & Innovation Hub',
    description:
      'Coding, Web Dev, Data Analytics, AI, ML, Cybersecurity, Cloud.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-green-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9l10.5-5.25m0 0L9 18.75m10.5-14.25v14.25M3 6v12"
        />
      </svg>
    ),
  },
  {
    title: 'Creative & Media Skills',
    description: 'Graphics Design, Video Editing, Animation, Photography.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-green-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.5 8.25H3.75l4.5-8.25m0 0L12 3l3.75 7.5m-7.5 0h7.5"
        />
      </svg>
    ),
  },
  {
    title: 'Vocational & Entrepreneurship',
    description: 'Food Processing, Business Development, Soft Skills.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-green-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v18m10.5-18v18m-10.5 0h10.5M3 9h18"
        />
      </svg>
    ),
  },
  {
    title: 'Corporate & Professional Training',
    description: 'Digital Transformation, ICT Workshops, Leadership.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-green-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a2 2 0 00-2-2h-3V4a1 1 0 00-1-1H8a1 1 0 00-1 1v12H4a2 2 0 00-2 2v2h5m10 0V9m0 11h-4m-2 0H3"
        />
      </svg>
    ),
  },
];

export default function ProgramList() {
  return (
    <section className="py-20 font-outfit ">
      <div className="container mx-auto text-start">
        <motion.h2
          className="text-2xl md:text-4xl text-deepblack-100 font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Explore Our Programs
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all p-8 flex flex-col items-center text-center max-w-sm"
            >
              <div className="bg-green-50 p-3 rounded-full mb-4">{p.icon}</div>
              <h3 className="text-lg font-semibold text-green-100 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
