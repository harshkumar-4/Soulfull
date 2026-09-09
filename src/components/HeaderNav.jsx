import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HeaderNav({ onOpenMobileMenu }) {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/85 backdrop-blur-xl border-b border-[#E8E2DA]/60 shadow-[0_1px_12px_rgba(31,27,24,0.03)]">
      <div className="h-20 max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-space-sm shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center p-1.5 border border-gold-subtle/60 group-hover:border-primary transition-colors shadow-2xs">
              <span className="material-symbols-outlined text-primary text-[24px]">spa</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-headline-sm text-[22px] text-charcoal tracking-tight leading-none group-hover:text-primary transition-colors font-serif">
                SoulfulI
              </span>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-charcoal-muted font-medium mt-1">
                Mindful Sanctuary
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links (Visible on 1024px+) */}
        <nav className="hidden lg:flex items-center gap-space-md xl:gap-space-lg">
          <Link
            to="/"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/') ? 'text-primary font-semibold' : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            The Sanctuary
          </Link>
          <Link
            to="/our-story"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/our-story') ? 'text-primary font-semibold' : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            Our Story
          </Link>
          <Link
            to="/why-soulfuli"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/why-soulfuli') ? 'text-primary font-semibold' : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            Why SoulfulI
          </Link>
          <Link
            to="/living-offerings"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/living-offerings') ? 'text-primary font-semibold' : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            Living Offerings
          </Link>
          <Link
            to="/eq-audit/assessment"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/eq-audit') ? 'text-primary font-semibold' : 'text-charcoal-muted hover:text-charcoal'
            }`}
          >
            EQ Audit
          </Link>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
          <Link
            to="/join-community"
            className="hidden sm:inline-block font-body-sm text-body-sm text-charcoal-muted hover:text-charcoal transition-colors tracking-wide px-2"
          >
            Sign In
          </Link>
          
          <Link
            to="/eq-audit/assessment"
            className="hidden xs:inline-flex items-center justify-center rounded-full bg-primary-container px-3.5 sm:px-space-lg py-2 sm:py-2.5 font-body-sm text-[12px] sm:text-body-sm font-medium text-on-primary shadow-[0_4px_16px_rgba(87,56,74,0.18)] hover:bg-primary transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Begin Practice
          </Link>

          {/* User Profile Avatar Icon */}
          <Link
            to="/join-community"
            className="hidden md:flex w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-secondary transition-colors"
            title="Sanctuary Account"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </Link>

          {/* Mobile & Tablet Menu Button (Visible on < 1024px) */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF8F5] border border-[#E8E2DA] text-[#57384A] font-medium text-[12px] uppercase tracking-wider hover:bg-[#FAF7F2] transition-colors shadow-2xs"
            aria-label="Open Sanctuary Menu"
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
            <span className="font-sans font-semibold">Menu</span>
          </button>
        </div>

      </div>
    </header>
  );
}
