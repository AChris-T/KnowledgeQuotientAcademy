import React from 'react';

export default function DeclarationSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-green-100">
        Declaration
      </h2>
      <div className="space-y-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="declaration"
            value="true"
            className="mt-1 accent-green-100"
          />
          <span className="text-gray-700">
            I certify that the information provided above is true and correct to
            the best of my knowledge.
          </span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="signature"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Signature (type your full name)
            </label>
            <input
              id="signature"
              name="signature"
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="signatureDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date
            </label>
            <input
              id="signatureDate"
              name="signatureDate"
              type="date"
              className="w-full h-[40px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
