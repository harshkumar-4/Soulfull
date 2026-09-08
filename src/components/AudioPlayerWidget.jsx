import React, { useState } from 'react';

export default function AudioPlayerWidget({ title = "Copenhagen Evening Tide", subtitle = "Somatic Soundscape", duration = "18:00" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30); // 30% default

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="bg-surface-container-low border border-outline-variant/40 rounded-3xl p-space-md lg:p-space-lg shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
        
        {/* Track Metadata */}
        <div className="flex items-center gap-space-md w-full md:w-auto">
          <button
            onClick={togglePlay}
            className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 transform hover:scale-105 ${
              isPlaying
                ? 'bg-primary text-on-primary shadow-[0_4px_20px_-2px_rgba(112,79,98,0.3)]'
                : 'bg-primary-container text-on-primary hover:bg-primary'
            }`}
            aria-label={isPlaying ? 'Pause Audio' : 'Play Audio'}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
          
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                {isPlaying ? 'Now Playing' : 'Audio Preview'}
              </span>
            </div>
            <h4 className="font-headline-sm text-[18px] text-on-surface font-serif">{title}</h4>
            <p className="font-body-sm text-[13px] text-on-surface-variant">{subtitle} • {duration}</p>
          </div>
        </div>

        {/* Waveform / Progress Slider */}
        <div className="w-full md:w-64 flex flex-col gap-1.5">
          <div className="flex items-center justify-between font-label-sm text-[11px] text-on-surface-variant">
            <span>05:24</span>
            <span>{duration}</span>
          </div>
          
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newProgress = Math.min(Math.max((clickX / rect.width) * 100, 0), 100);
              setProgress(newProgress);
            }}
            className="w-full h-2 rounded-full bg-surface-container-highest cursor-pointer relative overflow-hidden"
          >
            <div 
              className="h-full bg-secondary transition-all duration-150 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Ambient Badge */}
        <div className="hidden lg:flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px]">
          <span className="material-symbols-outlined text-[16px] text-secondary">graphic_eq</span>
          <span>432Hz Somatic Resonance</span>
        </div>

      </div>
    </div>
  );
}
