import React from 'react';

export default function PositionAvailabilitySection({ positions, onToggle }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-green-100">
        Position & Availability
      </h2>
      <div className="space-y-5">
        <div className="space-y-3">
          <span className="block text-sm font-medium text-gray-700">
            Position Applying For
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-3 border rounded-lg">
              <input
                type="checkbox"
                name="positionApplyingFor"
                value="Tutor"
                className="accent-green-100"
                checked={!!positions.tutor}
                onChange={() => onToggle('tutor')}
              />
              <span className="flex-1">Tutor</span>
              <input
                type="text"
                name="tutorSubject"
                placeholder="Specify subject"
                disabled={!positions.tutor}
                className="ml-auto w-40 px-3 py-2 border rounded-md disabled:bg-gray-100"
              />
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-lg">
              <input
                type="checkbox"
                name="positionApplyingFor"
                value="Coding/Robotics Instructor"
                className="accent-green-100"
                checked={!!positions.coding}
                onChange={() => onToggle('coding')}
              />
              <span className="flex-1">Coding/Robotics Instructor</span>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-lg">
              <input
                type="checkbox"
                name="positionApplyingFor"
                value="Administrative Staff"
                className="accent-green-100"
                checked={!!positions.admin}
                onChange={() => onToggle('admin')}
              />
              <span className="flex-1">Administrative Staff</span>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-lg">
              <input
                type="checkbox"
                name="positionApplyingFor"
                value="Other"
                className="accent-green-100"
                checked={!!positions.other}
                onChange={() => onToggle('other')}
              />
              <span className="flex-1">Other</span>
              <input
                type="text"
                name="otherRole"
                placeholder="Specify"
                disabled={!positions.other}
                className="ml-auto w-40 px-3 py-2 border rounded-md disabled:bg-gray-100"
              />
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <span className="block text-sm font-medium text-gray-700">
            Employment Type
          </span>
          <div className="flex flex-wrap gap-4">
            {['Full-Time', 'Part-Time', 'Contract', 'Internship'].map((t) => (
              <label
                key={t}
                className="inline-flex items-center gap-2 p-2 px-3 border rounded-lg"
              >
                <input
                  type="checkbox"
                  name="employmentTypes"
                  value={t}
                  className="accent-green-100"
                />
                <span>{t}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date Available to Start
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
          />
        </div>
      </div>
    </section>
  );
}
