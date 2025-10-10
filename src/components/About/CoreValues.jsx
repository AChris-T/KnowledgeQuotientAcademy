/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import {
  CollaboartionIcon,
  ExcellenceIcon,
  ExpertIcon,
  InnovationIcon,
  IntegrityIcon,
} from '../../icons';

export default function CoreValues() {
  const values = [
    {
      icon: <InnovationIcon />,
      title: 'Innovation',
      text: 'We embrace creative thinking and new technologies to inspire continuous learning.',
    },
    {
      icon: <ExcellenceIcon />,
      title: 'Excellence',
      text: 'We strive for the highest standards in teaching, learning, and leadership.',
    },
    {
      icon: <IntegrityIcon />,
      title: 'Integrity',
      text: 'We uphold honesty and responsibility in all we do — building trust and respect.',
    },
    {
      icon: <ExpertIcon />,
      title: 'Impact',
      text: 'Our learning programs empower students to make a difference in their communities.',
    },
    {
      icon: <CollaboartionIcon />,
      title: 'Collaboration',
      text: 'We believe in teamwork, diversity, and shared success across our community.',
    },
  ];

  return (
    <section className="bg-amber-100/20 py-10">
      <div className="container mx-auto md:px-10 px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE SECTION */}
        <motion.img
          src="/images/user1.jpg"
          alt="Approach to Learning"
          className="w-full rounded-2xl shadow-md object-cover"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* RIGHT CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deepblack-100 mb-4">
            Our Approach to Learning
          </h2>
          <p className="text-gray-700 mb-4">
            We blend interactive lessons, hands-on projects, personalized
            mentorship, and career readiness programs to equip learners with
            real-world skills.
          </p>
          <p className="text-gray-700 mb-8">
            Our hybrid learning model ensures flexibility — learn anywhere,
            anytime, while still feeling connected to a vibrant academic
            community.
          </p>

          {/* CORE VALUES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/70 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-green-100/10 rounded-lg flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-green-100 text-lg mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
