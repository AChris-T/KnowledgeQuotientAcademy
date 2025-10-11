/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const videos = [
  'https://www.youtube.com/embed/HJWCAOYIl8Y',
  'https://www.youtube.com/embed/RZV5czF3Zfk',
  'https://youtu.be/EzApUbEJ0N4?si=09htVpdTYE1396kY',
  'https://youtu.be/1-KRG-heLZ4?si=dnG43ZSkUv_bl7Yh',
];

function getEmbedUrl(url) {
  if (url.includes('embed/')) return url;
  const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function EventVideos() {
  return (
    <section className="pt-10 font-outfit bg-white">
      <div className="container mb-10 mx-auto  text-start">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Explore Our Events & Programs
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {videos.map((url, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="aspect-video overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <iframe
                src={getEmbedUrl(url)}
                title={`Event Video ${i + 1}`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Upcoming Events
        </motion.h2>
        <motion.img
          src="/images/Flyer.jpg"
          alt="Online School"
          className="mx-auto md:mx-0 max-w-[900px] h-[420px] object-cover rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
