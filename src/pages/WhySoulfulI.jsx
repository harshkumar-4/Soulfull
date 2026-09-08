import React from 'react';
import { Link } from 'react-router-dom';
import PillTag from '../components/PillTag';
import Button from '../components/Button';

export default function WhySoulfulI() {
  return (
    <div className="w-full pt-20 bg-surface min-h-screen">
      
      {/* Header Banner */}
      <section className="relative w-full py-space-3xl bg-surface-container-low border-b border-outline-variant/30 text-center">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <PillTag icon="psychology" variant="secondary" className="mb-space-md">
            Philosophy & Differentiators
          </PillTag>
          
          <h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-[56px] text-on-surface font-serif leading-tight">
            What Makes Us Different
          </h1>
          
          <p className="font-body-xl text-body-xl italic text-on-surface-variant max-w-2xl mx-auto mt-space-md font-serif">
            A comparative perspective on why unhurried somatic inquiry produces enduring emotional clarity where fast self-help apps fail.
          </p>
        </div>
      </section>

      {/* Comparison Grid Section */}
      <section className="w-full py-space-3xl lg:py-space-4xl">
        <div className="max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop">
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-space-xl">
            
            {/* Standard Apps Card */}
            <div className="bg-surface-container-high/40 rounded-3xl p-space-xl border border-outline-variant/40 space-y-space-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-outline-variant/30 flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined text-[20px]">block</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface-variant font-serif">
                  Standard Self-Care Apps
                </h3>
              </div>

              <ul className="space-y-space-md font-body-md text-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[18px] mt-1 shrink-0">close</span>
                  <span>Gamified daily streaks that induce guilt upon a missed day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[18px] mt-1 shrink-0">close</span>
                  <span>Intrusive push notifications interrupting focus for mandatory check-ins</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[18px] mt-1 shrink-0">close</span>
                  <span>5-minute "hacks" that attempt to bypass deep somatic processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error text-[18px] mt-1 shrink-0">close</span>
                  <span>Synthetic audio loops and clinical metric dashboards</span>
                </li>
              </ul>
            </div>

            {/* SoulfulI Sanctuary Card */}
            <div className="bg-surface-container rounded-3xl p-space-xl border border-primary/30 shadow-md space-y-space-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-on-primary font-label-sm text-[10px] uppercase tracking-widest rounded-bl-xl">
                The Sanctuary Way
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">spa</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                  SoulfulI Sanctuary
                </h3>
              </div>

              <ul className="space-y-space-md font-body-md text-body-md text-on-surface">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
                  <span>Unhurried, voluntary rhythm respecting your body's natural readiness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
                  <span>Zero notifications or artificial demands—enter only when called</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
                  <span>Somatic EQ Audits identifying real physiological tension markers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
                  <span>Acoustic 432Hz soundscapes recorded in live Copenhagen sanctuaries</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4 Pillars of Differentiation */}
      <section className="w-full py-space-3xl bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="max-w-3xl mx-auto space-y-space-2xl">
            
            <div className="text-center space-y-2">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Architectural Principles</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif">Four Anchors of Emotional Dignity</h2>
            </div>

            <div className="space-y-space-lg">
              
              <div className="p-space-xl rounded-3xl bg-surface border border-outline-variant/40 space-y-space-xs">
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">1. Somatic Inquiry vs. Cognitive Overload</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Most wellness tools treat emotions as logical puzzles to solve through cognitive journaling. We begin with the nervous system: breathing pattern, chest tension, jaw tightness, and visceral resonance.
                </p>
              </div>

              <div className="p-space-xl rounded-3xl bg-surface border border-outline-variant/40 space-y-space-xs">
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">2. Tactical Slowness vs. Micro-optimization</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We design layout white space to physically slow your scroll speed, allowing paragraphs and audio notes time to land deeply rather than skim rapidly.
                </p>
              </div>

              <div className="p-space-xl rounded-3xl bg-surface border border-outline-variant/40 space-y-space-xs">
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">3. Acoustic Integrity vs. Synthesized Audio</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our soundscapes are uncompressed acoustic recordings of rain, timber, bronze bowls, and organ pipes in quiet Copenhagen stone halls—never synthetic digital noise loops.
                </p>
              </div>

              <div className="p-space-xl rounded-3xl bg-surface border border-outline-variant/40 space-y-space-xs">
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">4. Print Tactility vs. SaaS Metrics</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  SoulfulI uses mineral ink colors, classical serif typography, and unlined paper textures to evoke the dignity of an enduring literary journal.
                </p>
              </div>

            </div>

            {/* Bottom Callout */}
            <div className="text-center pt-space-xl">
              <Link to="/eq-audit/assessment">
                <Button variant="primary" size="lg" icon="arrow_forward">
                  Experience the Difference • Take EQ Audit
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
