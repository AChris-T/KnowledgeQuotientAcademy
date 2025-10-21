import React from 'react';

export default function PartnerModal() {
  const [open, setOpen] = React.useState(false);
  const formRef = React.useRef(null);

  React.useEffect(() => {
    window.openPartnerModal = () => setOpen(true);
    return () => {
      if (window.openPartnerModal) delete window.openPartnerModal;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);
    fd.append('formName', 'partner');

    try {
      const res = await fetch('https://formspree.io/f/xpwyeoaj', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });
      if (res.ok) {
        const preview = Object.fromEntries(fd.entries());
        console.log('Partnership request submitted to Formspree:', preview);
        form.reset();
        window.dispatchEvent(
          new CustomEvent('app:toast', {
            detail: {
              message: 'Partnership request submitted successfully',
              type: 'success',
            },
          })
        );
        setOpen(false);
      } else {
        window.dispatchEvent(
          new CustomEvent('app:toast', {
            detail: {
              message: 'Failed to submit partnership request',
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-[96%] md:w-[800px] max-h-[92vh] overflow-hidden rounded-xl bg-white p-0 shadow-2xl">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-xl">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Partner With Us
            </h2>
            <p className="text-sm text-gray-600">
              Collaborate with Knowledge Quotient Academy
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="h-9 w-9 rounded-full hover:bg-gray-100 grid place-items-center text-gray-600"
          >
            ✕
          </button>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="px-6 pb-6 pt-4 space-y-6 overflow-y-auto max-h-[calc(92vh-120px)]"
        >
          <section className="space-y-4">
            <h3 className="text-base font-semibold">
              Organization Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col text-sm">
                Organization Name
                <input
                  name="orgName"
                  required
                  className="mt-1 rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm">
                Website (optional)
                <input
                  name="website"
                  className="mt-1 rounded border p-2"
                  placeholder="https://"
                />
              </label>
              <label className="flex flex-col text-sm">
                Contact Person
                <input
                  name="contactPerson"
                  required
                  className="mt-1 rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm">
                Contact Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm">
                Phone Number
                <input
                  name="phone"
                  required
                  className="mt-1 rounded border p-2"
                />
              </label>
              <label className="flex flex-col text-sm">
                Partnership Type
                <select
                  name="type"
                  required
                  className="mt-1 h-[40px] rounded border p-2"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>School Partnership</option>
                  <option>Corporate Training</option>
                  <option>EdTech Collaboration</option>
                  <option>Sponsorship</option>
                  <option>Internship/Placement</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-base font-semibold">Proposal </h3>
            <label className="flex flex-col text-sm">
              Brief Description
              <textarea
                name="description"
                rows={4}
                className="mt-1 rounded border p-2"
                placeholder="Tell us about your partnership idea..."
              ></textarea>
            </label>
          </section>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded border"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-100 text-white hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
