import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-[#FAF7F2] border-t border-gold-subtle/60 pt-space-3xl pb-space-2xl relative z-10">
      <div className="max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-2xl pb-space-3xl">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-space-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center border border-gold-subtle/60 shadow-2xs">
                <span className="material-symbols-outlined text-primary text-[24px]">spa</span>
              </div>
              <span className="font-headline-md text-headline-md text-charcoal font-serif">SoulfulI</span>
            </div>

            <p className="font-body-md text-body-md text-charcoal-muted max-w-sm leading-relaxed">
              A digital sanctuary for unhurried emotional inquiry, somatic presence, and quiet inwardness—borrowing the poetry of print publications.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                Unhurried by Design • Copenhagen & Coastal Studios
              </span>
            </div>
          </div>

          {/* Sanctuary Links Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-space-md">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-charcoal font-semibold">
              The Sanctuary
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-charcoal-muted">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">The Sanctuary Home</Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-primary transition-colors">Origin & Founder Story</Link>
              </li>
              <li>
                <Link to="/why-soulfuli" className="hover:text-primary transition-colors">Why SoulfulI Philosophy</Link>
              </li>
              <li>
                <Link to="/living-offerings" className="hover:text-primary transition-colors">Living Offerings Overview</Link>
              </li>
              <li>
                <Link to="/eq-audit/assessment" className="hover:text-primary transition-colors">Interactive Somatic EQ Audit</Link>
              </li>
            </ul>
          </div>

          {/* Living Practices Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-space-md">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-charcoal font-semibold">
              Practices
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-charcoal-muted">
              <li>
                <Link to="/living-offerings/eq-audit" className="hover:text-primary transition-colors">EQ Audit</Link>
              </li>
              <li>
                <Link to="/living-offerings" className="hover:text-primary transition-colors">Somatic Soundscapes</Link>
              </li>
              <li>
                <Link to="/living-offerings" className="hover:text-primary transition-colors">Guided Stillness</Link>
              </li>
              <li>
                <Link to="/living-offerings" className="hover:text-primary transition-colors">Reflective Prose</Link>
              </li>
              <li>
                <Link to="/join-community" className="hover:text-primary transition-colors">Join Circle</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-space-md">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-charcoal font-semibold">
              Sanctuary Monograph
            </h4>
            <p className="font-body-sm text-body-sm text-charcoal-muted">
              Receive our quiet monthly letter on somatic inquiry and emotional stillness.
            </p>

            {subscribed ? (
              <div className="p-space-md rounded-2xl bg-parchment border border-gold-subtle/60 text-primary font-body-sm">
                <p className="font-medium font-serif italic text-[16px]">You are now welcomed into the circle.</p>
                <p className="text-[12px] text-charcoal-muted mt-1">Look for our monthly monograph in your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-space-xs">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-parchment border border-gold-subtle/60 rounded-xl px-4 py-2.5 font-body-sm text-body-sm text-charcoal placeholder:text-outline focus:outline-none focus:border-secondary transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-primary-container text-on-primary font-body-sm font-medium hover:bg-primary transition-colors shadow-2xs"
                >
                  Receive Letter
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="pt-space-lg border-t border-gold-subtle/60 flex flex-col md:flex-row items-center justify-between gap-space-md text-charcoal-muted font-body-sm text-[13px]">
          <p>© 2026 SoulfulI Sanctuary. All rights reserved. Unhurried by design.</p>
          <div className="flex items-center gap-space-lg">
            <Link to="/our-story" className="hover:text-primary transition-colors">Privacy Principles</Link>
            <Link to="/why-soulfuli" className="hover:text-primary transition-colors">Sanctuary Charter</Link>
            <Link to="/join-community" className="hover:text-primary transition-colors">Contact Atelier</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
