import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';

const testimonials = [
  {
    id: 1,
    name: 'Dennis Barrett',
    role: 'Student',
    image: '/testimonials/test3.jpg',
    text: `"Knowledge Quotient Academy is simply the best! They have experienced and dedicated tutors, and my son has greatly benefited from their programs. Thank you!"`,
  },
  {
    id: 2,
    name: 'Sophia Lane',
    role: 'Designer',
    image: '/testimonials/test4.jpg',
    text: `"This is an outstanding institution driving technological innovation and shaping a bright future for children."`,
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
    <div className="relative w-full max-w-2xl mx-auto mt-2   group flex items-start justify-center  transition-all">
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 bg-gray-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ArrowLeftIcon />
      </button>

      <div className="flex items-center flex-col gap-4 text-center">
        <img
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-center">
          <p className="text-white- text-sm italic mb-1">
            {testimonials[index].text}
          </p>
          <p className="font-semibold text-sm text-white">
            {testimonials[index].name}{' '}
            <span className="text-white text-xs">
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
