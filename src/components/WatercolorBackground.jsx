import React from 'react';

/**
 * Watercolor & Paper Background System
 * Uses the provided wide landscape watercolor artwork asset directly:
 * Asset: /assets/soulfuli-hero-watercolor.png (1983x793)
 * STRICT RULE: Absolutely NO generated SVG turbulence or competing watercolor layers.
 * STRICT RULE: Absolutely NO leaves, flowers, or botanical illustrations.
 */
export default function WatercolorBackground({ children, className = '' }) {
  return (
    <div className={`relative w-full min-h-screen bg-[#FAF7F2] text-[#1F1B18] ${className}`}>
      
      {/* Base Layer: Warm Ivory Paper Color */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#FAF7F2] -z-30" />

      {/* Single Primary Hero Watercolor Artwork Background Layer */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[650px] sm:h-[850px] lg:h-[1050px] pointer-events-none -z-20 bg-[url('/assets/soulfuli-hero-watercolor.png')] bg-cover bg-center sm:bg-top bg-no-repeat opacity-95"
      />

      {/* Soft Bottom Fade for Seamless Transition into Lower Page */}
      <div
        aria-hidden="true"
        className="absolute top-[500px] sm:top-[680px] lg:top-[850px] left-0 right-0 h-[180px] sm:h-[250px] pointer-events-none -z-15 bg-gradient-to-b from-transparent via-[#FAF7F2]/75 to-[#FAF7F2]"
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


