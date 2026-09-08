import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinCommunity() {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState('FREE');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    intention: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Redirect to confirmation page
      navigate('/join-community/confirmation', { state: { name: formData.name, tier: selectedTier } });
    }
  };

  return (
    <div className="w-full pt-20 bg-surface min-h-screen">
      
      {/* Banner */}
      <section className="w-full py-space-3xl bg-surface-container-low border-b border-outline-variant/30 text-center">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="inline-flex items-center gap-2 px-space-md py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-space-xs border border-outline-variant/40">
            <span>Circle Membership</span>
          </div>

          <h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-[56px] text-on-surface font-serif">
            Join Our Community
          </h1>

          <p className="font-body-xl text-body-xl italic text-on-surface-variant max-w-2xl mx-auto mt-space-xs font-serif">
            Receive our monthly print-inspired monograph, diagnostic EQ audit updates, and priority invitations to coastal retreat gatherings.
          </p>
        </div>
      </section>

      {/* Main Form & Tier Selection Section */}
      <section className="w-full py-space-3xl">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-2xl">
          
          {/* Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
            
            {/* Free Tier */}
            <div
              onClick={() => setSelectedTier('FREE')}
              className={`p-space-xl rounded-3xl border transition-all cursor-pointer ${
                selectedTier === 'FREE'
                  ? 'bg-surface-container border-primary ring-2 ring-primary/20 shadow-md'
                  : 'bg-surface-container-low border-outline-variant/40 hover:border-secondary'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Free Circle
                </span>
                <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  selectedTier === 'FREE' ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant'
                }`}>
                  {selectedTier === 'FREE' && <span className="material-symbols-outlined text-[14px]">check</span>}
                </span>
              </div>

              <h3 className="font-headline-sm text-[24px] text-on-surface font-serif mt-2">
                Monthly Monograph Letter
              </h3>

              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                Includes our monthly email monograph, access to basic soundscape previews, and interactive EQ assessment tools.
              </p>

              <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 font-headline-sm text-[20px] text-on-surface font-serif">
                Complimentary
              </div>
            </div>

            {/* Paid Full Circle Tier */}
            <div
              onClick={() => setSelectedTier('FULL')}
              className={`p-space-xl rounded-3xl border transition-all cursor-pointer ${
                selectedTier === 'FULL'
                  ? 'bg-surface-container border-primary ring-2 ring-primary/20 shadow-md'
                  : 'bg-surface-container-low border-outline-variant/40 hover:border-secondary'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                  Full Sanctuary Practice
                </span>
                <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  selectedTier === 'FULL' ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant'
                }`}>
                  {selectedTier === 'FULL' && <span className="material-symbols-outlined text-[14px]">check</span>}
                </span>
              </div>

              <h3 className="font-headline-sm text-[24px] text-on-surface font-serif mt-2">
                Sanctuary Member Circle
              </h3>

              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                Unrestricted soundscape access, physical quarterly print monographs delivered to your door, and Copenhagen retreat invitations.
              </p>

              <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 font-headline-sm text-[20px] text-on-surface font-serif">
                $18 <span className="text-[14px] text-on-surface-variant font-sans">/ month</span>
              </div>
            </div>

          </div>

          {/* Registration Form */}
          <div className="bg-surface-container-low rounded-3xl p-space-xl lg:p-space-2xl border border-outline-variant/40 shadow-xs space-y-space-lg">
            
            <div className="border-b border-outline-variant/40 pb-space-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                Enter Your Sanctuary Information
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                We protect your data with complete privacy. No marketing spam.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-space-md">
              
              {/* Full Name */}
              <div>
                <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold mb-1">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Clara Elmqvist"
                  className={`w-full bg-surface border rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none transition-colors ${
                    errors.name ? 'border-error ring-1 ring-error' : 'border-outline-variant/60 focus:border-secondary'
                  }`}
                />
                {errors.name && (
                  <p className="font-body-sm text-[12px] text-error mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold mb-1">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="name@domain.com"
                  className={`w-full bg-surface border rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none transition-colors ${
                    errors.email ? 'border-error ring-1 ring-error' : 'border-outline-variant/60 focus:border-secondary'
                  }`}
                />
                {errors.email && (
                  <p className="font-body-sm text-[12px] text-error mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Intention Note */}
              <div>
                <label className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold mb-1">
                  Sanctuary Intention (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.intention}
                  onChange={(e) => setFormData(prev => ({ ...prev, intention: e.target.value }))}
                  placeholder="What brings you to the sanctuary today? (e.g., seeking quiet after burnout)..."
                  className="w-full bg-surface border border-outline-variant/60 rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline/70 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-space-md">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-primary-container text-on-primary font-body-md font-medium text-[16px] hover:bg-primary transition-all shadow-md transform hover:-translate-y-0.5"
                >
                  Join Sanctuary Circle ({selectedTier === 'FREE' ? 'Complimentary' : '$18/mo'})
                </button>
              </div>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}
