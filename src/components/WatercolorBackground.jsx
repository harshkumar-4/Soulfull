import React from 'react';

/**
 * Reusable Layered Watercolor Background System
 * Inspired by the SoulfulI brochure paper aesthetic.
 * Combines warm ivory paper, soft organic lavender & blush watercolor washes,
 * subtle gold atmospheric accents, and delicate paper grain.
 */
export default function WatercolorBackground({ children, className = '' }) {
  return (
    <div className={`relative w-full overflow-hidden bg-ivory ${className}`}>
      
      {/* Layer 1 & 2: Soft Lavender Wash (Top Left / Hero Area) */}
      <div 
        aria-hidden="true"
        className="absolute -top-32 -left-20 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full bg-gradient-to-br from-lavender via-lavender-light/40 to-transparent blur-3xl pointer-events-none opacity-75 mix-blend-multiply"
      />

      {/* Layer 3: Soft Dusty Blush Wash (Top Right & Mid Right) */}
      <div 
        aria-hidden="true"
        className="absolute top-40 -right-32 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-gradient-to-bl from-blush via-blush-soft/50 to-transparent blur-3xl pointer-events-none opacity-70 mix-blend-multiply"
      />

      {/* Layer 4: Subtle Muted Beige / Gold Watercolor Accent (Mid Left) */}
      <div 
        aria-hidden="true"
        className="absolute top-[35%] -left-36 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-r from-gold-subtle/35 via-mauve-muted/20 to-transparent blur-3xl pointer-events-none opacity-60 mix-blend-multiply"
      />

      {/* Layer 5: Soft Lavender-Blush Wash (Lower Footer Section) */}
      <div 
        aria-hidden="true"
        className="absolute -bottom-28 left-1/3 w-[600px] sm:w-[800px] h-[400px] sm:h-[550px] rounded-full bg-gradient-to-t from-blush-soft/40 via-lavender/30 to-transparent blur-3xl pointer-events-none opacity-65 mix-blend-multiply"
      />

      {/* Layer 6: Subtle Tactile Paper Texture Overlay */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#1f1b18_1px,transparent_1px)] [background-size:16px_16px]"
      />

      {/* Foreground Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
