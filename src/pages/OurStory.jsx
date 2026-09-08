import React from 'react';
import { Link } from 'react-router-dom';
import PillTag from '../components/PillTag';

export default function OurStory() {
  return (
    <div className="w-full pt-20 bg-surface min-h-screen">
      
      {/* Top Breathing Space & Ambient Glow */}
      <section className="relative w-full overflow-hidden border-b border-outline-variant/30">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-max-width-reading mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-3xl pb-space-2xl text-center">
          <PillTag icon="spa" variant="default" className="mb-space-lg">
            Origin & Intent • Vol. I
          </PillTag>

          <h1 className="font-headline-lg lg:font-display-lg text-headline-lg lg:text-[56px] text-on-surface max-w-4xl mx-auto leading-tight tracking-tight font-serif font-normal">
            Born from the quiet spaces between rushed breaths.
          </h1>

          <p className="font-body-xl text-body-xl italic text-on-surface-variant max-w-2xl mx-auto mt-space-lg leading-relaxed font-serif">
            How an unhurried search for emotional clarity grew into a digital sanctuary for conscious inwardness.
          </p>

          <div className="flex items-center justify-center gap-3 mt-space-xl text-outline-variant">
            <span className="w-8 h-px bg-outline-variant/60"></span>
            <span className="material-symbols-outlined text-[14px] text-secondary">spa</span>
            <span className="w-8 h-px bg-outline-variant/60"></span>
          </div>
        </div>
      </section>

      {/* Main Editorial Reading Column */}
      <section className="w-full py-space-3xl">
        <div className="max-w-max-width-prose mx-auto px-gutter-mobile lg:px-gutter-desktop">
          
          {/* Narrative Paragraph with Drop Cap */}
          <div className="space-y-space-lg text-on-surface leading-relaxed">
            <p className="font-body-lg text-body-lg leading-[32px] text-on-surface">
              <span className="float-left font-headline-lg text-[68px] leading-[0.8] pr-space-xs pt-space-2xs text-primary font-serif font-semibold">I</span>
              n an age that commodifies attention and turns internal states into measurable output, the act of simply sitting with one’s interior life has become an act of radical preservation. For years, we observed how modern digital environments operated: fast, fluorescent, relentlessly optimized to harvest the nervous system’s instinctive alarms. Even the modern tools crafted for mindfulness gradually succumbed to the logic of the stopwatch—daily streaks, gamified badges, and gentle vibrations that still functioned as demands.
            </p>

            <p className="font-body-lg text-body-lg leading-[32px] text-on-surface-variant">
              SoulfulI did not begin as an application or an enterprise. It began on a scarred oak desk in a northern coastal studio, where tea grew cold alongside stacks of field notebooks and somatic observations. What we sought was not an instrument of self-optimization, but a refuge from it: a space whose primary design principle was the preservation of dignity, slowness, and uncoerced human presence.
            </p>
          </div>

          {/* High-Impact Pull Quote */}
          <div className="my-space-3xl py-space-xl px-space-xl lg:px-space-2xl bg-surface-container-low rounded-3xl relative overflow-hidden border border-outline-variant/40 shadow-xs">
            <div className="absolute -right-6 -bottom-8 opacity-10 select-none pointer-events-none text-primary font-serif text-[180px]">
              “
            </div>
            <div className="relative z-10 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Core Realization
              </span>
              <blockquote className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface italic font-serif leading-snug">
                “We did not need another productivity tool disguised as self-care. We needed a place to lay down the burden of constant becoming.”
              </blockquote>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic pt-space-xs">
                — Field Notes on Stillness, Autumn 2021
              </p>
            </div>
          </div>

          {/* Mid-Narrative Prose */}
          <div className="space-y-space-lg text-on-surface leading-relaxed mb-space-2xl">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif text-[26px]">
              Moving Beyond the Mechanics of the Streak
            </h3>
            
            <p className="font-body-lg text-body-lg leading-[32px] text-on-surface-variant">
              When mindfulness is measured in unbroken streaks, silence transforms into a performance. A missed day becomes a subtle shame trigger; an introspective hour becomes a transaction logged against a database of self-improvement. True contemplation, by contrast, possesses the seasonal rhythm of tides and soil. It accepts absence as readily as presence.
            </p>
            
            <p className="font-body-lg text-body-lg leading-[32px] text-on-surface-variant">
              We began crafting an architecture stripped of urgency. No push notifications masquerading as gentle reminders. No leaderboards. No artificial dopamine loops. Instead, we prioritized open tactile white space, typographic rhythm that decelerates the resting pulse, and living audio offerings recorded in acoustic sanctuaries rather than synthetic studios.
            </p>
          </div>

          {/* Still Life Editorial Photo */}
          <figure className="my-space-3xl space-y-space-sm">
            <div className="overflow-hidden rounded-3xl bg-surface-container shadow-sm group border border-outline-variant/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8dLAuiIf12eJuSHZxxN1nQhmidXO9hRREdIsaAOcff7SftRuNUtpAmCnUdykt-FTsIIf2wHueQAepBhAXCAGZ74PnG8KDPjc9geLVdaBhxAnOSVEhowEWErg3f-HHcBrL-Qz9lKOkArTqSz0JYdcMDAzBqN0CNBo0lR9Gl-lKgfIDHOBTcuxAjDH2RIop88pCV1zHxhNXZ1bfJybuaoTl_aJZOBJQ2lz_hTmPyXLZRIk5iK3gioitPg"
                alt="Warm ceramic mug with herbal infusion alongside an open linen-bound journal"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
            <figcaption className="flex items-center justify-between text-on-surface-variant font-body-sm text-[13px] px-space-xs pt-1">
              <span className="italic">Still life at the original Copenhagen retreat studio. Notes on quiet attention, 2021.</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Plate 04</span>
            </figcaption>
          </figure>

        </div>
      </section>

      {/* Founder Letter Section */}
      <section className="w-full bg-surface-container py-space-3xl lg:py-space-4xl border-y border-outline-variant/30">
        <div className="max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="max-w-max-width-reading mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
            
            {/* Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-md">
                <div className="overflow-hidden rounded-3xl shadow-sm bg-surface-container-high border border-outline-variant/40">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1Xx91KKMTv9DE_FgFuITt9IX1nqq40gqhLEPvOrlqWQAW_jjzl9QG-wSE7CdWG85byQ65U2rHpgC8C3VGgBCGRdhaCVxw8wWpaJhEviDeYXGvWfHf2UpE0-0ZJbdiwczZIgvSAtscGDjaFn5iK8s0KceyUeW_Xd7-7LSkrG_o_tK49RZcJWjYH--brHZs49p4oOiSF1-Nez6vYuoab6qidlAVyCGUNzMuehPDJiL-zW8uxOj33eU75stPIE"
                    alt="Dr. Clara E. sitting quietly in natural daylight"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 bg-surface px-space-md py-space-sm rounded-2xl shadow-sm border border-outline-variant/50 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">psychology_alt</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">Dr. Clara E.</p>
                    <p className="font-label-sm text-[11px] text-on-surface-variant">Somatic Research & Inquiry</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Letter Content */}
            <div className="lg:col-span-7 space-y-space-md pt-space-lg lg:pt-0">
              <div className="inline-flex items-center gap-2 px-space-md py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                <span>A Note from the Founder</span>
              </div>
              
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif">
                Moving beyond clinical walls into an unhurried circle.
              </h2>
              
              <div className="space-y-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
                <p>
                  “In twelve years of clinical somatic practice, the most profound breakthroughs never occurred during high-intensity cognitive exercises. They arrived in the unscripted three minutes between therapeutic prompts—when a client would gently exhale, drop their shoulders, and allow silence to settle in the room.
                </p>
                <p>
                  SoulfulI was born to protect those three minutes. We wanted to build an environment that would feel less like a modern app and more like a heavy, unblemished monograph left on an oak table—inviting you to open it without demand, linger without judgment, and return to the physical world quietly replenished.”
                </p>
              </div>

              <div className="pt-space-md">
                <p className="font-headline-sm text-[24px] text-primary font-serif italic">
                  Clara E.
                </p>
                <p className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant mt-1">
                  Founder & Somatic Guide • SoulfulI
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Living Tenets Grid */}
      <section className="w-full py-space-3xl lg:py-space-4xl">
        <div className="max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="max-w-2xl mx-auto text-center space-y-space-xs mb-space-3xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-medium">The Living Pillars</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif">Our Guiding Sanctuary Tenets</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The quiet commitments that govern our architecture, rhythm, and presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg lg:gap-space-xl">
            <div className="bg-surface-container-low rounded-3xl p-space-xl flex flex-col justify-between border border-outline-variant/40 shadow-xs">
              <div className="space-y-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">hourglass_empty</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Slowness as a Compass</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We reject urgency as a default setting. Our audio, text, and sensory explorations are paced for digestion, allowing emotional depth rather than superficial completion.
                </p>
              </div>
              <div className="pt-space-xl mt-auto">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Principle 01</span>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-space-xl flex flex-col justify-between border border-outline-variant/40 shadow-xs">
              <div className="space-y-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Hospitality toward Feeling</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We do not treat difficult emotions as bugs to be repaired. Sorrow, ambivalence, tenderness, and fatigue are welcomed as legitimate guests in consciousness.
                </p>
              </div>
              <div className="pt-space-xl mt-auto">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Principle 02</span>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-space-xl flex flex-col justify-between border border-outline-variant/40 shadow-xs">
              <div className="space-y-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">do_not_disturb_on</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">Dignity over Optimization</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We refuse gamification. No daily streaks, no points, no push notifications demanding your attention. Your presence is strictly voluntary.
                </p>
              </div>
              <div className="pt-space-xl mt-auto">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Principle 03</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
