import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PillTag from '../components/PillTag';
import WatercolorBackground from '../components/WatercolorBackground';
import BotanicalDecoration from '../components/BotanicalDecoration';

export default function HomeSanctuary() {
  // Micro-interaction: Guided Breath Timer State
  const [breatheState, setBreatheState] = useState('idle'); // 'idle' | 'inhale' | 'hold' | 'exhale' | 'restored'
  const [breatheCount, setBreatheCount] = useState(4);

  // Micro-interaction: Newsletter Subscription State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const startBreathing = () => {
    if (breatheState !== 'idle') return;
    setBreatheState('inhale');
    setBreatheCount(4);

    let count = 4;
    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        setBreatheCount(count);
      } else {
        clearInterval(interval);
        setBreatheState('hold');
        setTimeout(() => {
          setBreatheState('exhale');
          setTimeout(() => {
            setBreatheState('restored');
            setTimeout(() => {
              setBreatheState('idle');
            }, 2500);
          }, 3000);
        }, 3000);
      }
    }, 1000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <WatercolorBackground className="min-h-screen pt-16 flex flex-col">
      <div className="flex flex-col w-full pb-28 px-gutter-mobile select-none max-w-max-width-canvas mx-auto">
        
        {/* 1. Hero Section with Soft Lavender-Blush Watercolor Atmosphere */}
        <div className="relative w-full overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-parchment/90 via-blush/40 to-lavender/30 shadow-sm p-space-lg sm:p-space-2xl mt-space-sm border border-gold-subtle/50 backdrop-blur-xs">
          
          {/* Asymmetrical Botanical Line-Art Decoration */}
          <BotanicalDecoration 
            variant="stem" 
            className="absolute -top-6 -right-6 opacity-40 rotate-12 hidden sm:block" 
          />

          {/* Editorial Header Badge */}
          <div className="flex items-center gap-space-xs mb-space-md">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blush-soft/80 text-mauve-brand font-label-sm text-label-sm tracking-widest uppercase border border-mauve-brand/20 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5 animate-pulse"></span>
              Issue Nº 14 · Morning Edition
            </span>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col relative z-10 max-w-lg">
            <h1 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-[44px] text-charcoal tracking-tight leading-tight mb-space-sm font-serif font-normal">
              Return to what is <span className="italic font-normal text-mauve-brand">quiet</span> within you.
            </h1>

            <p className="font-body-md text-body-md text-charcoal-muted leading-relaxed mb-space-xl">
              Cultivating emotional clarity, grounded presence, and conscious inner stillness in a hurried world.
            </p>

            {/* Primary Action & Guided Breath Interactive Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
              <Link
                to="/eq-audit/assessment"
                className="inline-flex items-center justify-center h-12 px-space-xl rounded-full bg-primary-container text-on-primary font-label-md text-label-md tracking-wide shadow-[0_8px_20px_rgba(87,56,74,0.18)] hover:bg-primary transition-all duration-300 transform active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-[18px] mr-2">energy_savings_leaf</span>
                Begin Your Practice
              </Link>

              {/* Guided Breath Micro-interaction Button */}
              <button
                onClick={startBreathing}
                className={`inline-flex items-center justify-center h-12 px-space-lg rounded-full font-label-md text-label-md transition-all duration-300 border border-gold-subtle/60 ${
                  breatheState !== 'idle'
                    ? 'bg-secondary-container text-on-secondary-container shadow-xs'
                    : 'bg-parchment/80 text-primary hover:bg-surface-container-highest'
                }`}
              >
                <span className="material-symbols-outlined text-[18px] mr-1.5 text-secondary">air</span>
                <span>
                  {breatheState === 'idle' && 'One Conscious Breath'}
                  {breatheState === 'inhale' && `Inhale deeply... (${breatheCount})`}
                  {breatheState === 'hold' && 'Hold softly in stillness...'}
                  {breatheState === 'exhale' && 'Release and let go...'}
                  {breatheState === 'restored' && '✨ Presence restored.'}
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* 2. Editorial Pull-Quote Section with Floral Wreath Accent */}
        <section className="my-space-2xl px-space-sm flex flex-col items-center text-center relative py-space-md">
          
          <BotanicalDecoration 
            variant="wreath" 
            className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-25 hidden md:block" 
          />

          <span className="material-symbols-outlined text-secondary/30 text-4xl mb-space-xs select-none">
            format_quote
          </span>

          <blockquote className="font-headline-md text-headline-sm lg:text-headline-md text-charcoal max-w-md mx-auto leading-relaxed font-serif font-normal italic relative z-10">
            “Emotional intelligence is not the mastery over feeling, but the courageous willingness to inhabit every breath with gentle curiosity.”
          </blockquote>

          <cite className="mt-space-md font-label-sm text-label-sm text-charcoal-muted tracking-widest uppercase not-italic">
            — Notes on Inwardness, Vol. I
          </cite>
          
          <div className="w-16 h-0.5 rounded-full bg-gold-subtle/80 mt-space-lg"></div>
        </section>

        {/* 3. Section: Living Offerings Sanctuary */}
        <section className="flex flex-col gap-space-sm mt-space-xs relative">
          <div className="flex items-end justify-between px-space-xs mb-space-xs">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-charcoal-muted">The Path</span>
              <h2 className="font-headline-sm text-headline-sm text-primary font-serif">Living Offerings</h2>
            </div>
            <Link
              to="/living-offerings"
              className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center"
            >
              Explore All <span className="material-symbols-outlined text-[14px] ml-0.5">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            
            {/* Card 1: Somatic Inquiry (Soft Lavender Tint) */}
            <div className="w-full rounded-[28px] bg-gradient-to-br from-lavender/70 via-parchment to-surface-container-low p-space-lg shadow-sm transition-all duration-300 hover:shadow-md border border-gold-subtle/60 group">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center shadow-sm text-primary border border-gold-subtle/40">
                  <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-parchment text-secondary font-label-sm text-label-sm border border-gold-subtle/40">
                  Somatic Inquiry
                </span>
              </div>
              <div className="mt-space-md">
                <h3 className="font-headline-sm text-headline-sm text-primary font-serif group-hover:text-tertiary transition-colors">
                  Emotional Attunement
                </h3>
                <p className="font-body-md text-body-md text-charcoal-muted mt-space-2xs leading-relaxed">
                  Guided contemplative inquiry, nervous system regulation, and gentle frameworks for naming the unsaid.
                </p>
              </div>
              <div className="mt-space-lg flex items-center justify-between pt-space-xs text-charcoal-muted">
                <span className="font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span> 15–20 min / day
                </span>
                <Link
                  to="/living-offerings/eq-audit"
                  className="font-label-md text-label-md text-primary group-hover:translate-x-1 transition-transform inline-flex items-center"
                >
                  Begin Module <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Soundscapes (Soft Blush Pink Tint) */}
            <div className="w-full rounded-[28px] bg-gradient-to-br from-blush/70 via-parchment to-surface-container-low p-space-lg shadow-sm transition-all duration-300 hover:shadow-md border border-gold-subtle/60 group">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center shadow-sm text-primary border border-gold-subtle/40">
                  <span className="material-symbols-outlined text-[20px]">graphic_eq</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-parchment text-secondary font-label-sm text-label-sm border border-gold-subtle/40">
                  Soundscapes
                </span>
              </div>
              <div className="mt-space-md">
                <h3 className="font-headline-sm text-headline-sm text-primary font-serif group-hover:text-tertiary transition-colors">
                  Mindful Stillness
                </h3>
                <p className="font-body-md text-body-md text-charcoal-muted mt-space-2xs leading-relaxed">
                  Rhythmic breath sequences, micro-meditations, and tactile organic recordings gathered across ancient Japanese cedar forests.
                </p>
              </div>
              <div className="mt-space-lg flex items-center justify-between pt-space-xs text-charcoal-muted">
                <span className="font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">headphones</span> 432Hz Resonance
                </span>
                <Link
                  to="/living-offerings"
                  className="font-label-md text-label-md text-primary group-hover:translate-x-1 transition-transform inline-flex items-center"
                >
                  Listen Now <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Reflective Prose (Warm Cream Tint) */}
            <div className="w-full rounded-[28px] bg-gradient-to-br from-surface-container via-parchment to-surface-container-low p-space-lg shadow-sm transition-all duration-300 hover:shadow-md border border-gold-subtle/60 group">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center shadow-sm text-primary border border-gold-subtle/40">
                  <span className="material-symbols-outlined text-[20px]">edit_note</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-parchment text-secondary font-label-sm text-label-sm border border-gold-subtle/40">
                  Reflective Prose
                </span>
              </div>
              <div className="mt-space-md">
                <h3 className="font-headline-sm text-headline-sm text-primary font-serif group-hover:text-tertiary transition-colors">
                  Inner Architecture
                </h3>
                <p className="font-body-md text-body-md text-charcoal-muted mt-space-2xs leading-relaxed">
                  Deep journal prompts grounded in spiritual psychology and unhurried self-observation without judgment.
                </p>
              </div>
              <div className="mt-space-lg flex items-center justify-between pt-space-xs text-charcoal-muted">
                <span className="font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">history_edu</span> 34 Contemplations
                </span>
                <Link
                  to="/our-story"
                  className="font-label-md text-label-md text-primary group-hover:translate-x-1 transition-transform inline-flex items-center"
                >
                  Open Journal <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Sacred Circles (Warm Mauve Tint) */}
            <div className="w-full rounded-[28px] bg-gradient-to-br from-[#f8edee] via-parchment to-surface-container p-space-lg shadow-sm transition-all duration-300 hover:shadow-md border border-gold-subtle/60 group">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center shadow-sm text-primary border border-gold-subtle/40">
                  <span className="material-symbols-outlined text-[20px]">diversity_1</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-parchment text-secondary font-label-sm text-label-sm border border-gold-subtle/40">
                  Communal Space
                </span>
              </div>
              <div className="mt-space-md">
                <h3 className="font-headline-sm text-headline-sm text-primary font-serif group-hover:text-tertiary transition-colors">
                  Sacred Circles
                </h3>
                <p className="font-body-md text-body-md text-charcoal-muted mt-space-2xs leading-relaxed">
                  Quiet, intimate guided gatherings and slow communal discourse for kindred spirits across oceans.
                </p>
              </div>
              <div className="mt-space-lg flex items-center justify-between pt-space-xs text-charcoal-muted">
                <span className="font-label-sm text-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-secondary">groups</span> Bi-weekly Gatherings
                </span>
                <Link
                  to="/join-community"
                  className="font-label-md text-label-md text-primary group-hover:translate-x-1 transition-transform inline-flex items-center"
                >
                  Join Circle <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Editorial Values & Philosophy Anchor with Botanical Lotus Decoration */}
        <section className="my-space-xl p-space-lg sm:p-space-xl rounded-[28px] bg-parchment/90 shadow-sm border border-gold-subtle/60 relative overflow-hidden backdrop-blur-xs">
          
          <BotanicalDecoration 
            variant="lotus" 
            className="absolute -bottom-10 -right-10 opacity-30 hidden sm:block" 
          />

          <div className="flex items-center gap-2 mb-space-sm">
            <span className="material-symbols-outlined text-secondary text-[20px]">spa</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">The SoulfulI Way</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary font-serif mb-space-md">Guiding Tenets</h3>
          
          <div className="flex flex-col gap-space-md relative z-10">
            <div className="flex items-start gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-blush-soft text-mauve-brand flex items-center justify-center shrink-0 font-label-md text-label-md mt-0.5 border border-mauve-brand/20">
                I
              </div>
              <div>
                <h4 className="font-headline-sm text-[18px] text-charcoal font-serif">Slowness over Urgency</h4>
                <p className="font-body-sm text-body-sm text-charcoal-muted leading-normal mt-0.5">
                  Depth requires uncompressed moments. We build spaces meant for lingering, not swift consumption.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-blush-soft text-mauve-brand flex items-center justify-center shrink-0 font-label-md text-label-md mt-0.5 border border-mauve-brand/20">
                II
              </div>
              <div>
                <h4 className="font-headline-sm text-[18px] text-charcoal font-serif">Compassion before Critique</h4>
                <p className="font-body-sm text-body-sm text-charcoal-muted leading-normal mt-0.5">
                  Meeting internal turbulence with hospitality rather than discipline transforms awareness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-blush-soft text-mauve-brand flex items-center justify-center shrink-0 font-label-md text-label-md mt-0.5 border border-mauve-brand/20">
                III
              </div>
              <div>
                <h4 className="font-headline-sm text-[18px] text-charcoal font-serif">Wholeness beyond Perfection</h4>
                <p className="font-body-sm text-body-sm text-charcoal-muted leading-normal mt-0.5">
                  Honoring the full register of human feeling—both luminous dawn and quiet dusk.
                </p>
              </div>
            </div>
          </div>

          {/* Human Testimonial Capsule */}
          <div className="mt-space-lg p-space-md rounded-2xl bg-ivory/80 flex flex-col gap-space-xs border border-gold-subtle/40 relative z-10">
            <p className="font-body-sm text-body-sm text-charcoal italic leading-relaxed font-serif">
              “SoulfulI feels less like an application and more like opening an unhurried letter from an old, gentle friend who truly listens.”
            </p>
            <div className="flex items-center justify-between text-charcoal-muted pt-1">
              <span className="font-label-sm text-label-sm font-medium">Clara E. · Copenhagen</span>
              <span className="font-label-sm text-label-sm opacity-70">Practicing 180 Days</span>
            </div>
          </div>
        </section>

        {/* 5. Closing Newsletter Sanctuary Band with Delicate Watercolor Gradient */}
        <section className="w-full rounded-[28px] bg-gradient-to-b from-blush via-blush-soft to-lavender-light/40 p-space-lg sm:p-space-xl text-center flex flex-col items-center shadow-sm border border-gold-subtle/60 relative overflow-hidden">
          
          <div className="w-12 h-12 rounded-full bg-parchment flex items-center justify-center mb-space-sm shadow-sm text-primary border border-gold-subtle/40">
            <span className="material-symbols-outlined text-[22px]">mark_email_unread</span>
          </div>

          <h2 className="font-headline-md text-headline-sm lg:text-headline-md text-primary leading-tight font-serif font-normal">
            Step softly into the sanctuary.
          </h2>

          <p className="font-body-sm text-body-sm text-charcoal-muted max-w-sm mt-space-2xs mb-space-md leading-relaxed">
            A weekly pause sent directly to your reflection desk every Sunday morning. Words on presence, silence, and emotional grace.
          </p>

          {/* Subscription Form */}
          {newsletterSubscribed ? (
            <div className="p-3 rounded-full bg-parchment text-primary font-label-sm text-label-sm tracking-wide shadow-xs border border-mauve-brand/20">
              ✨ Welcome to our quiet sanctuary. Check your correspondence soon.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="w-full max-w-sm flex flex-col gap-space-xs">
              <div className="relative w-full">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your.email@gentlethought.com"
                  className="w-full h-12 px-space-md rounded-full bg-parchment text-charcoal font-body-md text-body-sm placeholder:italic placeholder:text-outline focus:outline-none shadow-sm transition-all border border-gold-subtle/50"
                />
              </div>

              <button
                type="submit"
                className="h-12 w-full rounded-full bg-primary text-on-primary font-label-md text-label-md tracking-wider uppercase transition-all duration-300 hover:bg-primary-container active:scale-[0.99] flex items-center justify-center shadow-[0_4px_16px_rgba(87,56,74,0.15)]"
              >
                <span>Receive the Letters</span>
                <span className="material-symbols-outlined text-[16px] ml-1.5">north_east</span>
              </button>
            </form>
          )}

          <p className="font-label-sm text-[11px] text-charcoal-muted/75 mt-space-md">
            No noise. No algorithmic tracking. Just quiet reflections every Sunday.
          </p>
        </section>

      </div>
    </WatercolorBackground>
  );
}
