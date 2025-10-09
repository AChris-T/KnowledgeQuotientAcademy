import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
  '/images/gallery/7.jpg',
  '/images/gallery/9.jpg',
  '/images/gallery/10.jpg',
];

export default function PhotoGallery() {
  return (
    <motion.div
      className="my-20 container mx-auto font-outfit"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-center text-3xl md:text-5xl font-bold mb-10 text-deepblack-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Photo <span className="text-green-100">Gallery</span>
      </motion.h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-md group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <motion.div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 
                           flex justify-center items-center text-white text-lg font-semibold 
                           transition-opacity duration-500"
              >
                View Photo
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
