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
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_12px_rgba(112,79,98,0.05)]">
      <div className="h-20 max-w-max-width-canvas mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-space-sm shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center p-1.5 border border-outline-variant/40 group-hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-primary text-[24px]">spa</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-headline-sm text-[22px] text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors font-serif">
                SoulfulI
              </span>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant font-medium mt-1">
                Mindful Sanctuary
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          <Link
            to="/"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/') ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            The Sanctuary
          </Link>
          <Link
            to="/our-story"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/our-story') ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Our Story
          </Link>
          <Link
            to="/why-soulfuli"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/why-soulfuli') ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Why SoulfulI
          </Link>
          <Link
            to="/living-offerings"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/living-offerings') ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Living Offerings
          </Link>
          <Link
            to="/eq-audit/assessment"
            className={`font-body-sm text-[14px] transition-colors tracking-wide ${
              isActive('/eq-audit') ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            EQ Audit
          </Link>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-space-md shrink-0">
          <Link
            to="/join-community"
            className="hidden sm:inline-block font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors tracking-wide px-2"
          >
            Sign In
          </Link>
          
          <Link
            to="/eq-audit/assessment"
            className="inline-flex items-center justify-center rounded-full bg-primary-container px-space-lg py-2.5 font-body-sm text-body-sm font-medium text-on-primary shadow-[0_4px_20px_-2px_rgba(112,79,98,0.2)] hover:bg-primary transition-all duration-300 transform hover:-translate-y-0.5"
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

          {/* Mobile Menu Hamburger */}
          <button
            onClick={onOpenMobileMenu}
            className="xl:hidden p-2 rounded-full text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Open Mobile Menu"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        </div>

      </div>
    </header>
  );
}
