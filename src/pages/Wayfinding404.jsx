import React from 'react';
import { Link } from 'react-router-dom';
import PillTag from '../components/PillTag';
import Button from '../components/Button';

export default function Wayfinding404() {
  return (
    <div className="w-full pt-20 bg-surface min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-3xl space-y-space-xl">
        
        <PillTag icon="explore" variant="secondary">
          404 Sanctuary Wayfinding
        </PillTag>

        <h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-[64px] text-on-surface font-serif">
          You Have Reached a Quiet Boundary.
        </h1>

        <p className="font-body-xl text-body-xl italic text-on-surface-variant max-w-xl mx-auto font-serif">
          The path or page you are seeking is unwritten or has dissolved back into stillness.
        </p>

        <div className="my-space-xl p-space-xl rounded-3xl bg-surface-container-low border border-outline-variant/40 max-w-md mx-auto">
          <blockquote className="font-headline-sm text-headline-sm text-on-surface font-serif italic">
            “Not all who wander in silence are lost; some are simply finding the doorway back to presence.”
          </blockquote>
          <p className="font-body-sm text-[12px] text-on-surface-variant mt-2">
            — Sanctuary Field Guide, 2026
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md pt-space-md">
          <Link to="/">
            <Button variant="primary" icon="home">
              Return to Home Sanctuary
            </Button>
          </Link>

          <Link to="/living-offerings">
            <Button variant="secondary" icon="self_improvement">
              Explore Offerings
            </Button>
          </Link>

          <Link to="/eq-audit/assessment">
            <Button variant="ghost" icon="checklist">
              Take EQ Audit
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
