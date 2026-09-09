import React from 'react';

/**
 * Watercolor & Paper Background System
 * Uses the reference background image asset directly to guarantee 100% visual fidelity:
 * 1. Warm Ivory paper base (#FAF7F2).
 * 2. Real reference watercolor artwork layer (lavender, blush pink, gold stippling, paper texture).
 * 3. Soft translucent overlays for seamless content contrast.
 * STRICT RULE: Absolutely NO leaves, flowers, or botanical illustrations.
 */
export default function WatercolorBackground({ children, className = '' }) {
  return (
    <div className={`relative w-full min-h-screen bg-[#FAF7F2] text-[#1F1B18] ${className}`}>
      
      {/* Base Layer: Warm Ivory Paper Color */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#FAF7F2] -z-30" />

      {/* Primary Hero Reference Watercolor Artwork Background Layer */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[850px] sm:h-[1050px] lg:h-[1200px] pointer-events-none -z-20 bg-[url('/assets/hero-reference-bg.jpg')] bg-cover bg-top bg-no-repeat opacity-95"
      />

      {/* Soft Bottom Fade for Seamless Transition into Lower Page */}
      <div
        aria-hidden="true"
        className="absolute top-[600px] sm:top-[800px] lg:top-[950px] left-0 right-0 h-[250px] sm:h-[300px] pointer-events-none -z-15 bg-gradient-to-b from-transparent via-[#FAF7F2]/60 to-[#FAF7F2]"
      />

      {/* Tactile Fine Paper Grain Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035] -z-10 bg-[radial-gradient(#1F1B18_1px,transparent_1px)] [background-size:18px_18px]"
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>

    </div>
  );
}

