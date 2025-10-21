import React from 'react';

export default function PersonalInfoSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-green-100">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="full_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
            placeholder="+234..."
            required
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
            placeholder="Your current address"
          />
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Date of Birth
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </span>
          <div className="flex items-center gap-6">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="accent-green-100"
              />
              <span>Male</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="accent-green-100"
              />
              <span>Female</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Other"
                className="accent-green-100"
              />
              <span>Other</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
