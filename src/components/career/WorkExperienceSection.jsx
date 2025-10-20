import React from 'react';

export default function WorkExperienceSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-green-100"> Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="prevEmployer" className="block text-sm font-medium text-gray-700 mb-1">
            Name of Previous Employer
          </label>
          <input
            id="prevEmployer"
            name="prevEmployer"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="positionHeld" className="block text-sm font-medium text-gray-700 mb-1">
            Position Held
          </label>
          <input
            id="positionHeld"
            name="positionHeld"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
            Duration
          </label>
          <input
            id="duration"
            name="duration"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
            placeholder="e.g., Jan 2022 - Aug 2024"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700 mb-1">
            Key Responsibilities
          </label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
          />
        </div>
      </div>
    </section>
  );
}
