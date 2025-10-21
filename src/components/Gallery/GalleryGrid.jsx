/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';

// Group images by events. Each event has a cover and an array of images.
const events = [
  {
    id: 'coding-bootcamp',
    title: 'Precious corner university',
    desc: ' Students learning and collaborating at Precious corner university ',
    cover: '/images/gallery/1.jpg',
    images: ['/images/gallery/1.jpg', '/images/gallery/2.jpg'],
  },
  {
    id: 'ai-workshop',
    title: 'Emzor Pharmaceutical company training',
    desc: 'Participants exploring real-world AI applications',
    cover: '/images/gallery/3.jpg',
    images: ['/images/gallery/3.jpg', '/pic/F.jpg', '/pic/w.jpeg'],
  },
  {
    id: 'graduation-ceremony',
    title: 'American corner Ikeja ',
    desc: 'Training our Students for the future',
    cover: '/images/gallery/6.jpg',
    images: ['/images/gallery/6.jpg', '/images/gallery/5.jpg'],
  },
];

export default function GalleryGrid() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openEvent = (evt) => {
    setSelectedEvent(evt);
    setCurrentIndex(0);
  };

  const closeModal = () => setSelectedEvent(null);

  const nextImage = (e) => {
    e.stopPropagation();
    if (!selectedEvent) return;
    setCurrentIndex((i) => (i + 1) % selectedEvent.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!selectedEvent) return;
    setCurrentIndex(
      (i) => (i - 1 + selectedEvent.images.length) % selectedEvent.images.length
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto text-center">
        {/* Event Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((evt) => (
            <motion.div
              key={evt.id}
              className="relative overflow-hidden rounded-2xl cursor-pointer "
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 150 }}
              onClick={() => openEvent(evt)}
            >
              <img
                src={evt.cover}
                alt={evt.title}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent  transition duration-300 flex flex-col justify-end p-4 text-left">
                <h3 className="text-white font-semibold text-lg">
                  {evt.title}
                </h3>
                <p className="text-gray-200 text-sm">{evt.desc}</p>
                <p className="text-gray-300 text-xs mt-1">
                  {evt.images.length} photos
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal: Show all images in the selected event */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-5xl w-[94%] bg-transparent"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main image viewer */}
              <div className="relative">
                <img
                  src={selectedEvent.images[currentIndex]}
                  alt={`${selectedEvent.title} ${currentIndex + 1}`}
                  className="w-full h-[60vh] object-cover rounded-2xl shadow-lg"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 cursor-pointer bg-black text-white rounded-full h-10 flex justify-center items-center w-10  transition"
                  aria-label="Close"
                >
                  X
                </button>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-black text-gray-800 rounded-full px-2 py-2  transition"
                  aria-label="Previous"
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-black text-gray-800 rounded-full p-2  transition"
                  aria-label="Next"
                >
                  <ArrowRightIcon />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 rounded-b-2xl text-white">
                  <h3 className="text-xl font-semibold">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-sm text-gray-200">{selectedEvent.desc}</p>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {selectedEvent.images.map((img, idx) => (
                  <button
                    key={img + idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative rounded-lg overflow-hidden border ${
                      currentIndex === idx
                        ? 'border-green-100'
                        : 'border-transparent'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img
                      src={img}
                      alt={`thumb ${idx + 1}`}
                      className="h-20 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
