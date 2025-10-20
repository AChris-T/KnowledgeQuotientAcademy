import React from 'react';

export default function MotivationSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-green-100"> Motivation</h2>
      <textarea
        id="motivation"
        name="motivation"
        rows="5"
        placeholder="Why do you want to work with Knowledge Quotient Academy?"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
      />
    </section>
  );
}
