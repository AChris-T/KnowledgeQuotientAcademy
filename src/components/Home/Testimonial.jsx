import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';

const testimonials = [
  {
    id: 1,
    name: 'Dennis Barrett',
    role: 'Student',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D', // replace with your image
    text: `"Creating product become fun conviction. For every delay in they extremity."`,
  },
  {
    id: 2,
    name: 'Sophia Lane',
    role: 'Designer',
    image:
      'https://mitwpu.edu.in/uploads/course/images/BDes-User-experience-mob.webp',
    text: `"This platform made learning exciting and collaborative."`,
  },
  {
    id: 3,
    name: 'James Carter',
    role: 'Developer',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D', // replace with your image

    text: `"A truly inspiring and creative environment for innovation."`,
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // ✅ Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-2  group flex items-start  transition-all">
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 bg-gray-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ArrowLeftIcon />
      </button>

      <div className="flex items-center gap-4 text-center">
        <img
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="text-gray-700 text-sm italic mb-1">
            {testimonials[index].text}
          </p>
          <p className="font-semibold text-sm text-gray-900">
            {testimonials[index].name}{' '}
            <span className="text-gray-500 text-xs">
              ({testimonials[index].role})
            </span>
          </p>
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 bg-gray-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
