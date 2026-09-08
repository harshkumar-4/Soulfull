import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  icon = null
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 transform font-body-sm focus:outline-none";
  
  const variants = {
    primary: "rounded-full bg-primary-container text-on-primary shadow-[0_4px_20px_-2px_rgba(112,79,98,0.2)] hover:bg-primary hover:-translate-y-0.5 disabled:bg-outline/40 disabled:cursor-not-allowed disabled:transform-none",
    secondary: "rounded-full border border-outline-variant/80 bg-surface-container-low text-on-surface hover:bg-surface-container hover:border-secondary disabled:opacity-50 disabled:cursor-not-allowed",
    ghost: "text-on-surface-variant hover:text-on-surface underline-offset-4 hover:underline disabled:opacity-50",
    pillTag: "rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container uppercase tracking-widest font-label-sm"
  };

  const sizes = {
    sm: "px-space-md py-1.5 text-[12px]",
    md: "px-space-lg py-2.5 text-[14px]",
    lg: "px-space-2xl py-3.5 text-[16px]"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
    >
      {children}
      {icon && <span className="material-symbols-outlined ml-2 text-[18px]">{icon}</span>}
    </button>
  );
}
