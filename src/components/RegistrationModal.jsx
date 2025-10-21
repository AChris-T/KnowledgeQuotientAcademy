import React from 'react';

export default function RegistrationModal() {
  const [open, setOpen] = React.useState(false);
  const [under18, setUnder18] = React.useState(false);
  const [section, setSection] = React.useState('');
  const [subPrograms, setSubPrograms] = React.useState([]);
  const [referral, setReferral] = React.useState('');
  const [step, setStep] = React.useState(0);
  const formRef = React.useRef(null);
  const [showToast, setShowToast] = React.useState(false);

  const subprogramMap = {
    'Academic Support Programs': [
      'Private Home Lessons',
      'Online Tutoring',
      'WAEC / NECO / JAMB Preparation',
      'IGCSE / GCSE / SAT / IELTS / TOEFL',
    ],
    'Tech & Digital Skills Programs': [
      'Coding & Robotics',
      'Web Development',
      'Data Analytics / Data Science',
      'Artificial Intelligence / Machine Learning',
      'Cybersecurity',
      'Animation / Video Editing',
      'Graphics Design',
    ],
    'Creative & Vocational Programs': [
      'Fashion Design',
      'Food Management & Processing',
      'Photography / Videography',
      'Digital Marketing',
      'Entrepreneurship',
    ],
    'STEM & Innovation Programs': [
      'Robotics & AI for Schools',
      'STEM Club Membership',
      'Technovation Girls Program',
      'Robotics Competitions',
    ],
    'Institutional & Corporate Training': [
      'Teacher ICT & Pedagogy Training',
      'Corporate ICT / Digital Literacy',
      'Educational Consultancy',
      'School Partnership',
    ],
    'Professional Development': [
      'Data Analytics for Professionals',
      'Project Management',
      'Office Productivity (Excel, Power BI)',
      'Communication & Leadership Skills',
    ],
  };

  React.useEffect(() => {
    window.openRegistrationModal = () => setOpen(true);
    return () => {
      if (window.openRegistrationModal) delete window.openRegistrationModal;
    };
  }, []);

  const steps = React.useMemo(() => {
    const s = ['Personal', 'Program', 'Additional', 'Declaration'];
    if (under18) s.splice(1, 0, 'Guardian');
    return s;
  }, [under18]);

  React.useEffect(() => {
    if (!under18 && steps[step] === 'Guardian') {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  }, [under18, step, steps]);

  const handleSectionChange = (e) => {
    const value = e.target.value;
    setSection(value);
    setSubPrograms([]);
  };

  const toggleSubProgram = (name) => {
    setSubPrograms((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    // Include derived fields
    fd.append('section', section);
    subPrograms.forEach((sp) => fd.append('subPrograms', sp));
    fd.append('formName', 'registration');

    try {
      const res = await fetch('https://formspree.io/f/xldpkord', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });

      if (res.ok) {
        const preview = Object.fromEntries(fd.entries());
        console.log('Registration submitted to Formspree:', preview);
        if (formRef.current) formRef.current.reset();
        setSection('');
        setSubPrograms([]);
        setReferral('');
        setUnder18(false);
        setStep(0);
        setShowToast(false);
        window.dispatchEvent(
          new CustomEvent('app:toast', {
            detail: {
              message: 'Registration submitted successfully',
              type: 'success',
            },
          })
        );
        setOpen(false);
      } else {
        window.dispatchEvent(
          new CustomEvent('app:toast', {
            detail: {
              message: 'Failed to submit registration',
              type: 'error',
            },
          })
        );
      }
    } catch (err) {
      window.dispatchEvent(
        new CustomEvent('app:toast', {
          detail: {
            message: 'Network error. Please try again.',
            type: 'error',
            err,
          },
        })
      );
    }
  };

  const currentKey = steps[step];

  const goNext = () => {
    if (!formRef.current) return;
    const sectionEl = formRef.current.querySelector(
      `[data-step="${currentKey}"]`
    );
    if (sectionEl) {
      const invalid = sectionEl.querySelector(':invalid');
      if (invalid) {
        invalid.reportValidity();
        return;
      }
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const goPrev = () => setStep((s) => Math.max(s - 1, 0));

  if (!open) return null;

  return (
    <div className="fixed   inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-[96%] md:w-[900px] max-h-[82vh]  overflow-hidden my-20 rounded-xl bg-white p-0 shadow-2xl">
        <div className="sticky top-0 bg-white border-b px-6 py-4  flex items-center justify-between rounded-t-xl">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Knowledge Quotient Academy – Program Registration
            </h2>
            <p className="text-sm text-gray-600">
              Empowering Minds, Shaping the Future
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="h-9 w-9 rounded-full hover:bg-gray-100 grid place-items-center text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="px-6 pt-4">
          <div className="flex items-center gap-2">
            {steps.map((label, idx) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`h-9 w-9 rounded-full grid place-items-center text-sm font-semibold ${
                    idx <= step
                      ? 'bg-green-100 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {idx + 1}
                </div>
                <span
                  className={`hidden md:block text-sm ${
                    idx === step
                      ? 'text-green-100 font-semibold'
                      : 'text-gray-600'
                  }`}
                >
                  {label}
                </span>
                {idx < steps.length - 1 && (
                  <div
                    className={`h-1 w-8 md:w-16 rounded ${
                      idx < step ? 'bg-green-100' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {showToast && (
          <div className="pointer-events-none absolute right-4 top-4 z-[10000]">
            <div className="pointer-events-auto flex items-center gap-2 rounded-md bg-green-100 text-white px-4 py-2 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 14-4-4 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 7z" />
              </svg>
              <span className="text-sm font-medium">
                Registration submitted successfully
              </span>
            </div>
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="px-6 pb-6 pt-4 space-y-8 overflow-y-auto max-h-[calc(92vh-120px)]"
        >
          <section
            className={`space-y-4 ${currentKey === 'Personal' ? '' : 'hidden'}`}
            data-step="Personal"
          >
            <h3 className="text-base font-semibold">
              SECTION A: PERSONAL INFORMATION
            </h3>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col text-sm">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  required
                  className="mt-1 h-[40px] w-full rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm ">
                Date of Birth
                <input
                  type="date"
                  name="dob"
                  className="mt-1 h-[40px] w-[95%] md:w-full rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm">
                Gender
                <select
                  name="gender"
                  required
                  className="mt-1  h-[40px] rounded border p-2"
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>
              <label className="flex flex-col text-sm">
                Phone Number (WhatsApp)
                <input
                  name="phone"
                  required
                  className="mt-1  h-[40px] rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm">
                Email Address
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1  h-[40px] rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm md:col-span-2">
                Address
                <input
                  name="address"
                  required
                  className="mt-1  h-[40px] rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm">
                State of Residence
                <input
                  name="state"
                  className="mt-1  h-[40px] rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm">
                Nationality
                <input
                  name="nationality"
                  className="mt-1  h-[40px] rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm md:col-span-2">
                Are you under 18?
                <select
                  value={under18 ? 'Yes' : 'No'}
                  onChange={(e) => setUnder18(e.target.value === 'Yes')}
                  className="mt-1  h-[40px] rounded border p-2"
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </label>
            </div>
          </section>

          {under18 && (
            <section
              className={`space-y-4 ${
                currentKey === 'Guardian' ? '' : 'hidden'
              }`}
              data-step="Guardian"
            >
              <h3 className="text-base font-semibold">
                SECTION B: GUARDIAN / SPONSOR INFORMATION
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col text-sm">
                  Full Name
                  <input
                    name="guardianFullName"
                    className="mt-1  h-[40px] rounded border p-2"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  Phone Number
                  <input
                    name="guardianPhone"
                    className="mt-1  h-[40px] rounded border p-2"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  Relationship to Applicant
                  <input
                    name="guardianRelationship"
                    className="mt-1 rounded border p-2"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  Occupation
                  <input
                    name="guardianOccupation"
                    className="mt-1 rounded border p-2"
                  />
                </label>
              </div>
            </section>
          )}

          <section
            className={`space-y-4 ${currentKey === 'Program' ? '' : 'hidden'}`}
            data-step="Program"
          >
            <h3 className="text-base font-semibold">
              SECTION C: PROGRAM CATEGORY
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <label className="flex flex-col text-sm">
                Select Category
                <select
                  value={section}
                  onChange={handleSectionChange}
                  required
                  className="mt-1  h-[40px] rounded border p-2"
                >
                  <option value="" disabled>
                    Select a section
                  </option>
                  {Object.keys(subprogramMap).map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </label>

              {section && (
                <div className="flex flex-col text-sm">
                  <span className="mb-1 font-medium">
                    Choose Programs (you can select multiple)
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border rounded p-3">
                    {subprogramMap[section].map((sp) => (
                      <label key={sp} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={subPrograms.includes(sp)}
                          onChange={() => toggleSubProgram(sp)}
                        />
                        {sp}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <section
            className={`space-y-4 ${
              currentKey === 'Additional' ? '' : 'hidden'
            }`}
            data-step="Additional"
          >
            <h3 className="text-base font-semibold">
              SECTION D: ADDITIONAL DETAILS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <label className="flex flex-col">
                Preferred Learning Mode
                <select
                  name="learningMode"
                  required
                  className="mt-1  h-[40px] rounded border p-2"
                >
                  <option value="" disabled>
                    Select mode
                  </option>
                  <option>Online</option>
                  <option>Physical</option>
                  <option>Hybrid</option>
                </select>
              </label>
              <label className="flex flex-col">
                Preferred Class Schedule
                <select
                  name="schedule"
                  required
                  className="mt-1  h-[40px] rounded border p-2"
                >
                  <option value="" disabled>
                    Select schedule
                  </option>
                  <option>Weekdays</option>
                  <option>Weekends</option>
                  <option>Flexible</option>
                </select>
              </label>
              <label className="flex flex-col md:col-span-2">
                How did you hear about us?
                <select
                  name="referral"
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                  required
                  className="mt-1  h-[40px] rounded border p-2"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Social Media</option>
                  <option>Friend</option>
                  <option>School</option>
                  <option>Flyer</option>
                  <option>Other</option>
                </select>
              </label>
              {referral === 'Other' && (
                <label className="flex flex-col md:col-span-2">
                  Please specify
                  <input
                    name="referralOther"
                    className="mt-1 rounded border p-2"
                  />
                </label>
              )}
            </div>
          </section>

          <section
            className={`space-y-4 ${
              currentKey === 'Declaration' ? '' : 'hidden'
            }`}
            data-step="Declaration"
          >
            <h3 className="text-base font-semibold">SECTION E: DECLARATION</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <label className="flex flex-col">
                Signature (type your full name)
                <input
                  name="signature"
                  required
                  className="mt-1  h-[40px] rounded border p-2"
                />
              </label>
              <label className="flex flex-col">
                Date
                <div className="relative mt-1">
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-[95%] md:w-full h-[40px] rounded border p-2 pl-10"
                  />
                </div>
              </label>
            </div>
          </section>

          <div className="flex mb-20 items-center justify-between gap-3 pt-2 pb-10">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded border"
            >
              Close
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={step === 0}
                onClick={goPrev}
                className={`px-4 py-2 rounded border ${
                  step === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Back
              </button>
              {currentKey !== 'Declaration' ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="px-4 py-2 rounded bg-green-100 text-white hover:opacity-90"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-100 text-white hover:opacity-90"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
