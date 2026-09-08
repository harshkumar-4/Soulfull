import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PillTag from '../components/PillTag';
import Button from '../components/Button';

export default function JoinConfirmation() {
  const location = useLocation();
  const state = location.state || {};
  const name = state.name || 'Kindred Spirit';
  const tier = state.tier === 'FULL' ? 'Full Sanctuary Practice ($18/mo)' : 'Free Monthly Monograph Letter';

  return (
    <div className="w-full pt-20 bg-surface min-h-screen">
      
      {/* Banner */}
      <section className="w-full py-space-3xl bg-surface-container-low border-b border-outline-variant/30 text-center">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-md">
          <PillTag icon="task_alt" variant="secondary">
            Circle Membership Confirmed
          </PillTag>

          <h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-[56px] text-on-surface font-serif">
            Welcome to the Circle, {name}.
          </h1>

          <p className="font-body-xl text-body-xl italic text-on-surface-variant max-w-xl mx-auto font-serif">
            Your sanctuary registration is complete. An unhurried welcome letter has been sent to your correspondence desk.
          </p>
        </div>
      </section>

      {/* Details Card */}
      <section className="w-full py-space-3xl">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="bg-surface-container rounded-3xl p-space-xl lg:p-space-2xl border border-outline-variant/50 shadow-sm space-y-space-lg text-center">
            
            <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-[32px]">mark_email_read</span>
            </div>

            <div className="space-y-1">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Selected Tier</span>
              <p className="font-headline-sm text-headline-sm text-on-surface font-serif">{tier}</p>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
              You are now part of an unhurried circle of kindred minds across oceans. You will receive our quiet Sunday monograph every week.
            </p>

            <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-center gap-space-md">
              <Link to="/living-offerings">
                <Button variant="primary" icon="arrow_forward">
                  Explore Living Offerings
                </Button>
              </Link>

              <Link to="/">
                <Button variant="secondary">
                  Return to Home Sanctuary
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
