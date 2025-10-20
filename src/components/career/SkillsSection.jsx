import React from 'react';

export default function SkillsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-green-100">
        Skills & Competencies
      </h2>
      <textarea
        id="skills"
        name="skills"
        rows="4"
        placeholder="List skills separated by commas (e.g., Teaching, Web Development, Data Analysis, Communication)"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
      />
    </section>
  );
}
