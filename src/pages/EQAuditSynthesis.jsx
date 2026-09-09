import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AudioPlayerWidget from '../components/AudioPlayerWidget';

export default function EQAuditSynthesis() {
  const [loading, setLoading] = useState(true);
  const [answers] = useState(() => {
    try {
      const stored = sessionStorage.getItem('soulfuli_audit_answers');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    // Simulate 1.8s synthesis calculation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full pt-20 bg-surface min-h-screen flex items-center justify-center">
        <div className="text-center space-y-space-md p-space-xl">
          <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto animate-pulse">
            <span className="material-symbols-outlined text-[32px]">graphic_eq</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif">
            Synthesizing Your Somatic Landscape...
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
            Mapping physiological tension markers, respiratory cadence, and emotional capacity.
          </p>
          <div className="w-48 h-1 bg-surface-container-highest rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-primary animate-pulse w-3/4 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20 bg-surface min-h-screen">
      
      {/* Banner Header */}
      <section className="w-full py-space-2xl bg-surface-container-low border-b border-outline-variant/30 text-center">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="inline-flex items-center gap-2 px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-widest mb-space-xs">
            <span className="material-symbols-outlined text-[14px]">task_alt</span>
            <span>Diagnostic Synthesis Complete</span>
          </div>

          <h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-[52px] text-on-surface font-serif">
            Your Somatic Archetype Summary
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant font-serif italic">
            Evaluated on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Results Container */}
      <section className="w-full py-space-3xl">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-2xl">
          
          {/* Main Archetype Card */}
          <div className="bg-surface-container rounded-3xl p-space-xl lg:p-space-2xl border border-outline-variant/50 shadow-sm space-y-space-lg">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md border-b border-outline-variant/40 pb-space-lg">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                  Primary Somatic Profile
                </span>
                <h2 className="font-headline-lg text-[32px] text-on-surface font-serif">
                  The Contemplative Sanctuary Seeker
                </h2>
              </div>
              <div className="px-space-lg py-2 rounded-full bg-primary-container text-on-primary font-body-sm font-medium self-start md:self-auto">
                Emotional Capacity: 78 / 100
              </div>
            </div>

            {/* Tension & Breath Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              <div className="bg-surface p-space-lg rounded-2xl border border-outline-variant/40 space-y-1">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-outline">Primary Tension Anchor</span>
                <p className="font-headline-sm text-headline-sm text-on-surface font-serif">
                  {answers?.tensionLocation || 'Upper Shoulders & Thoracic Guarding'}
                </p>
                <p className="font-body-sm text-[13px] text-on-surface-variant pt-1">
                  Physiological stress is primarily concentrated in upper posture and shallow breathing.
                </p>
              </div>

              <div className="bg-surface p-space-lg rounded-2xl border border-outline-variant/40 space-y-1">
                <span className="font-label-sm text-[11px] uppercase tracking-wider text-outline">Respiratory Cadence</span>
                <p className="font-headline-sm text-headline-sm text-on-surface font-serif">
                  {answers?.breathCadence || 'Guarded Diaphragmatic Flow'}
                </p>
                <p className="font-body-sm text-[13px] text-on-surface-variant pt-1">
                  Nervous system benefits from extended 4-sec inhale / 6-sec exhale unhurried cycles.
                </p>
              </div>
            </div>

            {/* Prescribed Somatic Protocol */}
            <div className="space-y-space-sm pt-space-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                Prescribed Practice Protocol
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Based on your synthesis, we recommend starting with this 18-minute acoustic resonance soundscape followed by 10 minutes of quiet unlined journaling.
              </p>
            </div>

            <AudioPlayerWidget
              title="Copenhagen Evening Tide (432Hz)"
              subtitle="Prescribed Somatic Soundscape"
              duration="18:00"
            />

          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md pt-space-md">
            <Link
              to="/join-community"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary-container px-space-2xl py-3.5 font-body-md font-medium text-on-primary shadow-md hover:bg-primary transition-all"
            >
              Download PDF Report & Join Circle
              <span className="material-symbols-outlined ml-2 text-[20px]">download</span>
            </Link>

            <Link
              to="/eq-audit/assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-outline-variant/80 bg-surface px-space-xl py-3.5 font-body-md font-medium text-on-surface hover:bg-surface-container transition-colors"
            >
              Retake Assessment
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
