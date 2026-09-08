import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MobileNavDrawer({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onClose();
      navigate('/living-offerings');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-on-surface/40 backdrop-blur-sm transition-opacity duration-300">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-surface h-full shadow-2xl flex flex-col p-space-lg overflow-y-auto border-l border-outline-variant/30">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-space-md border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">spa</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-serif">Sanctuary Menu</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="mt-space-lg">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search practices, audio, prose..."
              className="w-full bg-surface-container-low border border-outline-variant/60 rounded-xl pl-11 pr-4 py-3 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
        </form>

        {/* Nav Links */}
        <nav className="flex flex-col gap-space-sm mt-space-xl">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px]">home</span>
              <span className="font-headline-sm text-[20px] text-on-surface font-serif">The Sanctuary</span>
            </div>
            <span className="material-symbols-outlined text-outline text-[18px] group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </Link>

          <Link
            to="/our-story"
            onClick={onClose}
            className="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px]">auto_stories</span>
              <span className="font-headline-sm text-[20px] text-on-surface font-serif">Our Story & Intent</span>
            </div>
            <span className="material-symbols-outlined text-outline text-[18px] group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </Link>

          <Link
            to="/why-soulfuli"
            onClick={onClose}
            className="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px]">psychology</span>
              <span className="font-headline-sm text-[20px] text-on-surface font-serif">Why SoulfulI</span>
            </div>
            <span className="material-symbols-outlined text-outline text-[18px] group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </Link>

          <Link
            to="/living-offerings"
            onClick={onClose}
            className="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px]">self_improvement</span>
              <span className="font-headline-sm text-[20px] text-on-surface font-serif">Living Offerings</span>
            </div>
            <span className="material-symbols-outlined text-outline text-[18px] group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </Link>

          <Link
            to="/eq-audit/assessment"
            onClick={onClose}
            className="flex items-center justify-between p-3 rounded-2xl bg-surface-container-high/60 border border-outline-variant/40 hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">checklist</span>
              <span className="font-headline-sm text-[20px] text-primary font-serif font-medium">Somatic EQ Audit</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px]">
              Take Audit
            </span>
          </Link>

          <Link
            to="/join-community"
            onClick={onClose}
            className="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px]">groups</span>
              <span className="font-headline-sm text-[20px] text-on-surface font-serif">Join Circle</span>
            </div>
            <span className="material-symbols-outlined text-outline text-[18px] group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </Link>
        </nav>

        {/* Audio Mini Preview Widget */}
        <div className="mt-auto pt-space-xl">
          <div className="bg-surface-container-low p-space-md rounded-2xl border border-outline-variant/40 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                <span className="material-symbols-outlined text-[20px]">graphic_eq</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-semibold">Copenhagen Evening Tide</p>
                <p className="font-label-sm text-[11px] text-on-surface-variant">Somatic Soundscape • 18 min</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-[16px]">play_arrow</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
