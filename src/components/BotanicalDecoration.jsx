import React from 'react';

/**
 * Reusable Botanical & Floral Line-Art Illustration Component
 * Inspired by the SoulfulI brochure editorial artwork.
 * Rendered as inline accessible SVG line art (aria-hidden="true").
 */
export default function BotanicalDecoration({ 
  variant = 'stem', 
  className = '', 
  color = 'stroke-secondary/40' 
}) {
  if (variant === 'stem') {
    // Delicate Botanical Branch / Leaves Stem
    return (
      <svg
        aria-hidden="true"
        className={`w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 pointer-events-none fill-none ${color} ${className}`}
        viewBox="0 0 200 200"
      >
        <path d="M40 170 Q70 120 120 40" strokeWidth="1.2" strokeLinecap="round" />
        {/* Leaves */}
        <path d="M70 125 C60 110 45 115 52 130 C60 140 70 132 70 125 Z" strokeWidth="1" strokeLinecap="round" />
        <path d="M85 105 C95 90 110 95 103 110 C95 120 85 112 85 105 Z" strokeWidth="1" strokeLinecap="round" />
        <path d="M100 80 C90 65 75 70 82 85 C90 95 100 87 100 80 Z" strokeWidth="1" strokeLinecap="round" />
        <path d="M112 60 C122 45 137 50 130 65 C122 75 112 67 112 60 Z" strokeWidth="1" strokeLinecap="round" />
        <circle cx="120" cy="40" r="3" className="fill-secondary/30" />
      </svg>
    );
  }

  if (variant === 'lotus') {
    // Serene Floral Lotus Bloom
    return (
      <svg
        aria-hidden="true"
        className={`w-40 h-40 sm:w-52 sm:h-52 pointer-events-none fill-none ${color} ${className}`}
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
        {/* Lotus Petals */}
        <path d="M100 35 C80 65 70 95 100 155 C130 95 120 65 100 35 Z" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M100 155 C65 135 45 95 70 75 C85 95 92 125 100 155 Z" strokeWidth="1" strokeLinecap="round" />
        <path d="M100 155 C135 135 155 95 130 75 C115 95 108 125 100 155 Z" strokeWidth="1" strokeLinecap="round" />
        <circle cx="100" cy="100" r="6" className="fill-mauve-brand/30 stroke-none" />
      </svg>
    );
  }

  if (variant === 'wreath') {
    // Circular Organic Botanical Ring
    return (
      <svg
        aria-hidden="true"
        className={`w-48 h-48 sm:w-64 sm:h-64 pointer-events-none fill-none ${color} ${className}`}
        viewBox="0 0 200 200"
      >
        <path d="M100 20 A80 80 0 1 1 99.9 20" strokeWidth="1" strokeLinecap="round" />
        <path d="M100 30 A70 70 0 1 1 99.9 30" strokeWidth="0.8" strokeDasharray="2 4" />
        <circle cx="100" cy="20" r="3" className="fill-secondary/40" />
        <circle cx="180" cy="100" r="3" className="fill-secondary/40" />
        <circle cx="100" cy="180" r="3" className="fill-secondary/40" />
        <circle cx="20" cy="100" r="3" className="fill-secondary/40" />
      </svg>
    );
  }

  return null;
}
