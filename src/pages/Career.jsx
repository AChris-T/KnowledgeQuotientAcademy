/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import PersonalInfoSection from '../components/career/PersonalInfoSection';
import PositionAvailabilitySection from '../components/career/PositionAvailabilitySection';
import EducationSection from '../components/career/EducationSection';
import WorkExperienceSection from '../components/career/WorkExperienceSection';
import SkillsSection from '../components/career/SkillsSection';
import MotivationSection from '../components/career/MotivationSection';
import UploadsSection from '../components/career/UploadsSection';
import DeclarationSection from '../components/career/DeclarationSection';
import SidePanel from '../components/career/SidePanel';

export default function Career() {
  const formRef = React.useRef(null);
  const [positions, setPositions] = React.useState({
    tutor: false,
    coding: false,
    admin: false,
    other: false,
  });

  const handlePositionToggle = (key) =>
    setPositions((p) => ({ ...p, [key]: !p[key] }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);

    const employmentTypes = fd.getAll('employmentTypes');
    const positionApplyingFor = fd.getAll('positionApplyingFor');

    const payload = Object.fromEntries(fd.entries());

    // Attach arrays explicitly
    payload.employmentTypes = employmentTypes;
    payload.positionApplyingFor = positionApplyingFor;

    // Files -> names preview (avoid logging huge File objects)
    const cv = fd.get('cv');
    const passport = fd.get('passport');
    const certificates = fd.getAll('certificates');

    payload.cv = cv && cv.name ? cv.name : null;
    payload.passport = passport && passport.name ? passport.name : null;
    payload.certificates = certificates
      .filter(Boolean)
      .map((f) => (f && f.name ? f.name : null))
      .filter(Boolean);

    console.log('Career application submission:', payload);

    form.reset();
    setPositions({ tutor: false, coding: false, admin: false, other: false });

    window.dispatchEvent(
      new CustomEvent('app:toast', {
        detail: { message: 'Application submitted successfully', type: 'success' },
      })
    );
  };

  return (
    <div className="mt-28 mb-20 px-4 lg:px-10">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-deepblack-100">
            Career Application
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mt-3">
            Join our mission to inspire learning. Complete the form below and we’ll
            get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Section 1: Personal Information */}
            <PersonalInfoSection />

            {/* Section 2: Position & Availability */}
            <PositionAvailabilitySection positions={positions} onToggle={handlePositionToggle} />

            {/* Section 3: Education Background */}
            <EducationSection />

            {/* Section 4: Work Experience */}
            <WorkExperienceSection />

            {/* Section 5: Skills & Competencies */}
            <SkillsSection />

            {/* Section 6: Motivation */}
            <MotivationSection />

            {/* Section 7: Upload Documents */}
            <UploadsSection />

            {/* Section 8: Declaration */}
            <DeclarationSection />

            <motion.button
              type="submit"
              className="w-full bg-green-100 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Application
            </motion.button>
          </motion.form>

          {/* Side panel */}
          <motion.aside
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-fit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SidePanel />
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
}
