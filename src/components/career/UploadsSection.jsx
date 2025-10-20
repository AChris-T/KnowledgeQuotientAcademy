import React from 'react';

export default function UploadsSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-green-100"> Upload Documents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">
            Upload CV / Resume
          </label>
          <input
            id="cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-green-100 file:text-white hover:file:bg-green-200"
          />
        </div>
        <div>
          <label htmlFor="certificates" className="block text-sm font-medium text-gray-700 mb-1">
            Upload Academic Certificates
          </label>
          <input
            id="certificates"
            name="certificates"
            type="file"
            multiple
            accept=".pdf,.png,.jpg,.jpeg"
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-green-100 file:text-white hover:file:bg-green-200"
          />
        </div>
        <div>
          <label htmlFor="passport" className="block text-sm font-medium text-gray-700 mb-1">
            Upload Passport Photograph
          </label>
          <input
            id="passport"
            name="passport"
            type="file"
            accept=".png,.jpg,.jpeg"
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-green-100 file:text-white hover:file:bg-green-200"
          />
        </div>
      </div>
    </section>
  );
}
