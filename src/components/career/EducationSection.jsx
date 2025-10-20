import React from 'react';

export default function EducationSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-green-100">Education Background</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="highestQualification" className="block text-sm font-medium text-gray-700 mb-1">
            Highest Qualification
          </label>
          <input
            id="highestQualification"
            name="highestQualification"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
            Institution Attended
          </label>
          <input
            id="institution"
            name="institution"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">
            Year of Graduation
          </label>
          <input
            id="graduationYear"
            name="graduationYear"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="additionalCerts" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Certifications (if any)
          </label>
          <input
            id="additionalCerts"
            name="additionalCerts"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
            placeholder="Listing (comma-separated)"
          />
        </div>
      </div>
    </section>
  );
}
