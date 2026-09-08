import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayerWidget from '../components/AudioPlayerWidget';

export default function EQAuditDetail() {
  return (
    <div className="w-full pt-20 bg-surface min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative w-full py-space-3xl bg-surface-container-low border-b border-outline-variant/30 overflow-hidden">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop text-center space-y-space-md">
          <div className="inline-flex items-center gap-2 px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-widest border border-outline-variant/40">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            <span>Diagnostic Offering Overview</span>
          </div>

          <h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-[56px] text-on-surface font-serif leading-tight">
            Somatic Emotional Intelligence (EQ) Audit
          </h1>

          <p className="font-body-xl text-body-xl italic text-on-surface-variant max-w-2xl mx-auto font-serif">
            A 3-minute diagnostic exploration designed to map internal physiological tension markers, nervous system state, and emotional capacity.
          </p>

          <div className="pt-space-md flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <Link
              to="/eq-audit/assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary-container px-space-2xl py-3.5 font-body-md font-medium text-on-primary shadow-md hover:bg-primary transition-all"
            >
              Launch Assessment Tool
              <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
            </Link>

            <Link
              to="/join-community"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-outline-variant/80 bg-surface px-space-xl py-3.5 font-body-md font-medium text-on-surface hover:bg-surface-container transition-colors"
            >
              Join Sanctuary Circle
            </Link>
          </div>
        </div>
      </section>

      {/* Audio Sample Section */}
      <section className="w-full py-space-2xl bg-surface-container border-b border-outline-variant/30">
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <AudioPlayerWidget 
            title="EQ Audit Audio Prelude"
            subtitle="Somatic Centering Guidance • Dr. Clara E."
            duration="03:40"
          />
        </div>
      </section>

      {/* Diagnostic Modules Grid */}
      <section className="w-full py-space-3xl lg:py-space-4xl">
        <div className="max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-3xl">
          
          <div className="text-center space-y-2">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Assessment Framework</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif">What the EQ Audit Measures</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl max-w-5xl mx-auto">
            
            <div className="p-space-xl rounded-3xl bg-surface-container-low border border-outline-variant/40 space-y-space-md">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-[18px]">1</div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Diaphragmatic & Chest Constriction</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Identifies shallow breathing patterns, thoracic tightness, and physical defense postures adopted during high-stress periods.
              </p>
            </div>

            <div className="p-space-xl rounded-3xl bg-surface-container-low border border-outline-variant/40 space-y-space-md">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-[18px]">2</div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Cognitive Velocity & Overwhelm Index</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Evaluates mental rumination rates, decision fatigue, and the speed at which your mind processes daily inputs.
              </p>
            </div>

            <div className="p-space-xl rounded-3xl bg-surface-container-low border border-outline-variant/40 space-y-space-md">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-[18px]">3</div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Vagus Nerve Rest & Recovery</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Measures your parasympathetic recovery time after emotional turbulence and your ability to return to baseline calm.
              </p>
            </div>

            <div className="p-space-xl rounded-3xl bg-surface-container-low border border-outline-variant/40 space-y-space-md">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-serif text-[18px]">4</div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Relational Boundaries & Energy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Maps emotional absorption from external environments and evaluates your personal boundary clarity.
              </p>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center pt-space-lg">
            <Link
              to="/eq-audit/assessment"
              className="inline-flex items-center justify-center rounded-full bg-primary text-on-primary px-space-2xl py-4 font-body-md font-medium shadow-md hover:bg-secondary transition-all"
            >
              Start 3-Minute EQ Audit Now
              <span className="material-symbols-outlined ml-2 text-[20px]">play_circle</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
