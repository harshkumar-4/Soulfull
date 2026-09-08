import React from 'react';

export default function PillTag({ children, icon = null, variant = 'default', className = '' }) {
  const variants = {
    default: "bg-surface-container-high text-on-surface-variant border-outline-variant/40",
    primary: "bg-primary-container text-on-primary border-primary/30",
    secondary: "bg-secondary-container text-on-secondary-container border-secondary/30"
  };

  return (
    <div className={`inline-flex items-center gap-2 px-space-md py-1 rounded-full font-label-sm text-[11px] uppercase tracking-widest border font-medium ${variants[variant] || variants.default} ${className}`}>
      {icon ? (
        <span className="material-symbols-outlined text-[14px]">{icon}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
      )}
      <span>{children}</span>
    </div>
  );
}
