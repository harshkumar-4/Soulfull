import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WatercolorBackground from '../components/WatercolorBackground';

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
    <WatercolorBackground className="min-h-screen pt-20 flex flex-col">
      <div className="w-full max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-3xl pb-space-3xl">

        <section className="relative w-full rounded-2xl sm:rounded-[2.2rem] lg:rounded-[2.5rem] bg-[url('/assets/soulfuli-hero.png')] bg-cover bg-center sm:bg-top bg-no-repeat p-4 sm:p-8 lg:p-12 mt-2 sm:mt-4 border border-[#E8E2DA]/60 overflow-hidden shadow-xs">
          
          {/* Subtle Contrast Tint Overlay */}
          <div aria-hidden="true" className="absolute inset-0 bg-[#FFF8F5]/30 backdrop-blur-[1px] pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">

              {/* Editorial Eyebrow Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF1F5]/90 text-[#704F62] font-label-sm text-[10px] sm:text-[11px] tracking-widest uppercase border border-[#D8C4D9]/60 shadow-2xs backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#704F62] inline-block animate-pulse"></span>
                <span>Issue Nº 14 · Morning Edition</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="text-[28px] xs:text-[34px] sm:text-[44px] lg:text-[54px] text-[#1F1B18] tracking-tight leading-[1.15] font-serif font-normal">
                Return to what is <span className="italic font-normal text-[#704F62]">quiet</span> within you.
              </h1>

              {/* Supporting Paragraph */}
              <p className="font-body-md text-[#4E4449] leading-relaxed max-w-xl font-sans text-[14px] sm:text-[16px]">
                Cultivating emotional clarity, grounded presence, and conscious inner stillness in a hurried world.
              </p>

              {/* Primary & Secondary Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/eq-audit/assessment"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#57384A] text-white font-label-md text-[12px] sm:text-[13px] tracking-wider uppercase font-medium shadow-[0_6px_20px_rgba(87,56,74,0.25)] hover:bg-[#704F62] transition-all duration-300 transform active:scale-[0.98] text-center"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2">energy_savings_leaf</span>
                  Begin Your Practice
                </Link>

                <Link
                  to="/our-story"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#FFF8F5]/90 text-[#57384A] font-label-md text-[12px] sm:text-[13px] tracking-wider uppercase font-medium border border-[#E8E2DA] hover:bg-[#FAF7F2] transition-colors duration-300 shadow-2xs backdrop-blur-xs text-center"
                >
                  <span className="material-symbols-outlined text-[18px] mr-1.5 text-[#704F62]">play_circle</span>
                  Watch Our Story
                </Link>
              </div>

            </div>

            {/* Right Column: Breathwork Widget */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0 relative">

              {/* Editorial Breathwork Card */}
              <div className="relative w-full max-w-sm p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FFF8F5]/90 border border-[#E8E2DA]/90 shadow-xs backdrop-blur-xs flex flex-col items-center text-center space-y-4">

                {/* Soft Glowing Outer Ring */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-[#F5F1FB] via-[#FBF1F5] to-[#FFF8F5] p-1 border border-[#E8E2DA]/80 shadow-2xs">
                  <div className={`w-full h-full rounded-full bg-[#FAF7F2] flex flex-col items-center justify-center p-3 sm:p-4 transition-transform duration-1000 ${breatheState === 'inhale' ? 'scale-110 bg-[#FBF1F5]' : breatheState === 'hold' ? 'scale-105 bg-[#F5F1FB]' : 'scale-100'
                    }`}>
                    <span className="material-symbols-outlined text-[#704F62] text-[28px] sm:text-[32px] mb-1">air</span>
                    <span className="font-label-sm text-[10px] sm:text-[11px] uppercase tracking-widest text-[#704F62] font-semibold">
                      {breatheState === 'idle' && 'Focus'}
                      {breatheState === 'inhale' && `Inhale (${breatheCount})`}
                      {breatheState === 'hold' && 'Stillness'}
                      {breatheState === 'exhale' && 'Release'}
                      {breatheState === 'restored' && 'Restored'}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-headline-sm text-[18px] sm:text-[20px] text-[#1F1B18] font-serif">Somatic Breathing Pause</h3>
                  <p className="font-body-sm text-[12px] sm:text-[13px] text-[#4E4449] leading-relaxed">
                    Take one unhurried breath cycle to settle your resting heart rate.
                  </p>
                </div>

                <button
                  onClick={startBreathing}
                  disabled={breatheState !== 'idle'}
                  className={`w-full py-3 rounded-full font-label-md text-[11px] sm:text-[12px] uppercase tracking-wider transition-all duration-300 ${breatheState !== 'idle'
                    ? 'bg-[#FBF1F5] text-[#704F62] opacity-80 cursor-wait'
                    : 'bg-[#57384A] text-white hover:bg-[#704F62] shadow-2xs'
                    }`}
                >
                  {breatheState === 'idle' ? 'One Conscious Breath' : 'Breathing in Progress...'}
                </button>

              </div>
            </div>

          </div>

        </section>

        {/* --------------------------------------------------
            2. FOUR PRACTICE CARDS (1 Row Desktop, 2x2 Tablet, 1 Col Mobile)
        -------------------------------------------------- */}
        <section className="space-y-space-md">

          <div className="flex items-end justify-between px-space-2xs">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#4E4449] font-semibold">Pillars of Stillness</span>
              <h2 className="font-headline-sm text-headline-sm text-[#57384A] font-serif">Four Practice Foundations</h2>
            </div>
            <Link
              to="/living-offerings"
              className="font-label-md text-label-md text-[#704F62] hover:text-[#57384A] transition-colors flex items-center"
            >
              Explore All <span className="material-symbols-outlined text-[14px] ml-0.5">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

            {/* Card 1: Emotional Intelligence */}
            <div className="rounded-3xl bg-[#FFF8F5]/90 p-space-lg border border-[#E8E2DA] shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow group">
              <div className="space-y-space-sm">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#57384A] shadow-2xs border border-[#E8E2DA]/60">
                  <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
                </div>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#704F62] font-semibold block">Somatic Inquiry</span>
                <h3 className="font-headline-sm text-[20px] text-[#57384A] font-serif group-hover:text-[#704F62] transition-colors">
                  Emotional Intelligence
                </h3>
                <p className="font-body-sm text-[13px] text-[#4E4449] leading-relaxed">
                  Guided diagnostic inquiry to locate physical tension markers and restore balance.
                </p>
              </div>
              <div className="pt-space-md border-t border-[#E8E2DA]/60 mt-space-md">
                <Link to="/living-offerings/eq-audit" className="font-label-md text-[11px] uppercase tracking-wider text-[#57384A] flex items-center justify-between group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Module</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Mindful Practices */}
            <div className="rounded-3xl bg-[#FFF8F5]/90 p-space-lg border border-[#E8E2DA] shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow group">
              <div className="space-y-space-sm">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#57384A] shadow-2xs border border-[#E8E2DA]/60">
                  <span className="material-symbols-outlined text-[20px]">graphic_eq</span>
                </div>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#704F62] font-semibold block">Acoustic Soundscapes</span>
                <h3 className="font-headline-sm text-[20px] text-[#57384A] font-serif group-hover:text-[#704F62] transition-colors">
                  Mindful Practices
                </h3>
                <p className="font-body-sm text-[13px] text-[#4E4449] leading-relaxed">
                  Rhythmic 432Hz ambient audio recordings captured in serene Copenhagen stone halls.
                </p>
              </div>
              <div className="pt-space-md border-t border-[#E8E2DA]/60 mt-space-md">
                <Link to="/living-offerings" className="font-label-md text-[11px] uppercase tracking-wider text-[#57384A] flex items-center justify-between group-hover:translate-x-0.5 transition-transform">
                  <span>Listen Preview</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Holistic Wellbeing */}
            <div className="rounded-3xl bg-[#FFF8F5]/90 p-space-lg border border-[#E8E2DA] shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow group">
              <div className="space-y-space-sm">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#57384A] shadow-2xs border border-[#E8E2DA]/60">
                  <span className="material-symbols-outlined text-[20px]">edit_note</span>
                </div>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#704F62] font-semibold block">Reflective Prose</span>
                <h3 className="font-headline-sm text-[20px] text-[#57384A] font-serif group-hover:text-[#704F62] transition-colors">
                  Holistic Wellbeing
                </h3>
                <p className="font-body-sm text-[13px] text-[#4E4449] leading-relaxed">
                  Stream-of-consciousness journal prompts borrowing the rhythm of unlined monographs.
                </p>
              </div>
              <div className="pt-space-md border-t border-[#E8E2DA]/60 mt-space-md">
                <Link to="/our-story" className="font-label-md text-[11px] uppercase tracking-wider text-[#57384A] flex items-center justify-between group-hover:translate-x-0.5 transition-transform">
                  <span>Open Journal</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Meaningful Experiences */}
            <div className="rounded-3xl bg-[#FFF8F5]/90 p-space-lg border border-[#E8E2DA] shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow group">
              <div className="space-y-space-sm">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#57384A] shadow-2xs border border-[#E8E2DA]/60">
                  <span className="material-symbols-outlined text-[20px]">diversity_1</span>
                </div>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#704F62] font-semibold block">Communal Circles</span>
                <h3 className="font-headline-sm text-[20px] text-[#57384A] font-serif group-hover:text-[#704F62] transition-colors">
                  Meaningful Experiences
                </h3>
                <p className="font-body-sm text-[13px] text-[#4E4449] leading-relaxed">
                  Quiet physical gatherings and intimate guided discourse for kindred spirits.
                </p>
              </div>
              <div className="pt-space-md border-t border-[#E8E2DA]/60 mt-space-md">
                <Link to="/join-community" className="font-label-md text-[11px] uppercase tracking-wider text-[#57384A] flex items-center justify-between group-hover:translate-x-0.5 transition-transform">
                  <span>Join Circle</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

          </div>

        </section>

        {/* --------------------------------------------------
            3. EMERSON QUOTE SECTION (Editorial Magazine Style)
        -------------------------------------------------- */}
        <section className="relative my-space-2xl py-space-3xl px-space-lg rounded-[2.5rem] bg-gradient-to-r from-[#FBF1F5]/70 via-[#FFF8F5] to-[#F5F1FB]/70 border border-[#E8E2DA] text-center shadow-2xs overflow-hidden">

          <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-10 select-none pointer-events-none text-[#57384A] font-serif text-[180px] leading-none">
            “
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#704F62] font-semibold">
              Editorial Contemplation
            </span>

            <blockquote className="font-headline-md lg:font-headline-lg text-[24px] sm:text-[32px] lg:text-[36px] text-[#1F1B18] leading-relaxed font-serif italic font-normal">
              “The world offers endless places to look. Perhaps the most important one is within.”
            </blockquote>

            <cite className="font-label-sm text-label-sm text-[#4E4449] tracking-widest uppercase not-italic block pt-space-xs">
              — Ralph Waldo Emerson
            </cite>
          </div>

        </section>

        {/* --------------------------------------------------
            4. PHILOSOPHY SECTION WITH IMAGE (MUST STAY)
        -------------------------------------------------- */}
        <section className="my-space-2xl p-space-lg sm:p-space-2xl rounded-[2.5rem] bg-[#FFF8F5]/95 border border-[#E8E2DA] shadow-xs">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">

            {/* Left Column: Philosophy Statement & Copy */}
            <div className="lg:col-span-7 space-y-space-md text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF1F5] text-[#704F62] font-label-sm text-[11px] uppercase tracking-widest border border-[#704F62]/20">
                <span className="material-symbols-outlined text-[14px]">spa</span>
                <span>Our Philosophy</span>
              </div>

              <h2 className="font-headline-lg text-[28px] sm:text-[36px] lg:text-[40px] text-[#1F1B18] font-serif leading-tight">
                Because the way we live outwardly is shaped by what we carry within.
              </h2>

              <p className="font-body-md text-body-md text-[#4E4449] leading-relaxed font-sans">
                In an age that commodifies attention and turns internal states into measurable output, SoulfulI crafts spaces for deep somatic presence, emotional dignity, and unhurried human connection. We believe true self-awareness arises not from cognitive metrics, but from honoring the quiet intelligence of the body.
              </p>

              <div className="pt-space-xs">
                <Link
                  to="/our-story"
                  className="inline-flex items-center justify-center h-12 px-space-xl rounded-full bg-[#57384A] text-white font-label-md text-[13px] tracking-wider uppercase font-medium hover:bg-[#704F62] transition-all shadow-xs"
                >
                  Explore Our Story
                  <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Editorial Still-Life Image with Layered Framing */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">

                {/* Background Layer Frame */}
                <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-tr from-[#F5F1FB] via-[#FBF1F5] to-[#FFF8F5] border border-[#E8E2DA] -rotate-1 opacity-80 pointer-events-none" />

                {/* Main Still Life Image */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-sm bg-surface-container border border-[#E8E2DA] aspect-[4/3]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8dLAuiIf12eJuSHZxxN1nQhmidXO9hRREdIsaAOcff7SftRuNUtpAmCnUdykt-FTsIIf2wHueQAepBhAXCAGZ74PnG8KDPjc9geLVdaBhxAnOSVEhowEWErg3f-HHcBrL-Qz9lKOkArTqSz0JYdcMDAzBqN0CNBo0lR9Gl-lKgfIDHOBTcuxAjDH2RIop88pCV1zHxhNXZ1bfJybuaoTl_aJZOBJQ2lz_hTmPyXLZRIk5iK3gioitPg"
                    alt="Warm ceramic mug with herbal infusion alongside an open linen-bound journal"
                    className="w-full h-full object-cover max-w-full"
                  />
                </div>

                <div className="mt-2 text-center">
                  <span className="font-label-sm text-[11px] text-[#4E4449]/80 italic font-serif">
                    Still life at Copenhagen retreat studio • Notes on quiet attention
                  </span>
                </div>

              </div>
            </div>

          </div>

        </section>

        {/* --------------------------------------------------
            5. NEWSLETTER / INNER CIRCLE (Soft Lavender/Blush Band)
        -------------------------------------------------- */}
        <section className="w-full rounded-[2.5rem] bg-gradient-to-b from-[#FBF1F5] via-[#F8EDEE] to-[#EAE1F5]/40 p-space-lg sm:p-space-2xl text-center flex flex-col items-center shadow-xs border border-[#E8E2DA] relative overflow-hidden">

          <div className="w-12 h-12 rounded-full bg-[#FFF8F5] flex items-center justify-center mb-space-sm shadow-2xs text-[#57384A] border border-[#E8E2DA]/60">
            <span className="material-symbols-outlined text-[22px]">mark_email_unread</span>
          </div>

          <h2 className="font-headline-md text-headline-sm lg:text-headline-md text-[#57384A] leading-tight font-serif font-normal">
            Step softly into the sanctuary.
          </h2>

          <p className="font-body-sm text-body-sm text-[#4E4449] max-w-sm mt-space-2xs mb-space-md leading-relaxed">
            A weekly pause sent directly to your reflection desk every Sunday morning. Words on presence, silence, and emotional grace.
          </p>

          {/* Subscription Form */}
          {newsletterSubscribed ? (
            <div className="p-3.5 px-space-lg rounded-full bg-[#FFF8F5] text-[#57384A] font-label-sm text-label-sm tracking-wide shadow-2xs border border-[#704F62]/20">
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
                  className="w-full h-12 px-space-md rounded-full bg-[#FFF8F5] text-[#1F1B18] font-body-md text-body-sm placeholder:italic placeholder:text-outline focus:outline-none shadow-2xs transition-all border border-[#E8E2DA]"
                />
              </div>

              <button
                type="submit"
                className="h-12 w-full rounded-full bg-[#57384A] text-white font-label-md text-label-md tracking-wider uppercase transition-all duration-300 hover:bg-[#704F62] active:scale-[0.99] flex items-center justify-center shadow-[0_4px_16px_rgba(87,56,74,0.15)]"
              >
                <span>Receive the Letters</span>
                <span className="material-symbols-outlined text-[16px] ml-1.5">north_east</span>
              </button>
            </form>
          )}

          <p className="font-label-sm text-[11px] text-[#4E4449]/75 mt-space-md">
            No noise. No algorithmic tracking. Just quiet reflections every Sunday.
          </p>

        </section>

      </div>
    </WatercolorBackground>
  );
}
