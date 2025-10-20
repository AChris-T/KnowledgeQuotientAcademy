import React from 'react';

export default function SidePanel() {
  return (
    <aside className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-fit">
      <h3 className="text-xl font-semibold mb-4 text-deepblack-100">Why Join KQA?</h3>
      <ul className="space-y-3 text-gray-700 list-disc pl-5">
        <li>Impact-driven culture focused on student success.</li>
        <li>Opportunities in tutoring, coding/robotics, and administration.</li>
        <li>Collaborative team and growth-friendly environment.</li>
      </ul>
      <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-100/30">
        <p className="text-sm text-green-900">
          Tip: Ensure your CV highlights relevant achievements and certifications.
        </p>
      </div>
    </aside>
  );
}
