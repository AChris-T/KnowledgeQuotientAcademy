/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    src: '/images/gallery/1.jpg',
    title: 'Coding Bootcamp',
    desc: 'Students learning React.js in a hands-on session',
  },
  {
    src: '/images/gallery/2.jpg',
    title: 'AI Workshop',
    desc: 'Participants exploring real-world AI applications',
  },
  {
    src: '/images/gallery/3.jpg',
    title: 'Creative Design Class',
    desc: 'Learning graphic design and animation fundamentals',
  },
  {
    src: '/images/gallery/4.jpg',
    title: 'Community Project',
    desc: 'Our learners collaborating on impactful projects',
  },
  {
    src: '/images/gallery/5.jpg',
    title: 'Entrepreneurship Seminar',
    desc: 'Building business skills for the modern economy',
  },
  {
    src: '/images/gallery/6.jpg',
    title: 'Graduation Ceremony',
    desc: 'Celebrating our talented graduates',
  },
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24  relative overflow-hidden">
      <div className="container mx-auto  text-center">
        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 150 }}
              onClick={() => setSelected(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-left">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-[90%]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-[70vh] object-cover rounded-2xl shadow-lg"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/80 text-gray-800 rounded-full p-2 hover:bg-white transition"
              >
                ✕
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 rounded-b-2xl text-white">
                <h3 className="text-xl font-semibold">{selected.title}</h3>
                <p className="text-sm text-gray-200">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
