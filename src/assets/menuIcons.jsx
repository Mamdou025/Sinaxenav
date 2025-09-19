import React from "react";

export function ProductsIcon({ className = "h-4 w-4 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}

export function SolutionsIcon({ className = "h-4 w-4 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 3h4v4h-4zM4 10h4v4H4zM16 10h4v4h-4zM10 16h4v4h-4z"/>
    </svg>
  );
}

export function DevelopersIcon({ className = "h-4 w-4 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18l-6-6 6-6"/>
      <path d="M15 6l6 6-6 6"/>
    </svg>
  );
}

export function CompanyIcon({ className = "h-4 w-4 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="7" width="7" height="13" rx="1"/>
      <rect x="14" y="3" width="7" height="17" rx="1"/>
      <path d="M6.5 10h0M6.5 13h0M17.5 7h0M17.5 10h0M17.5 13h0M17.5 16h0"/>
    </svg>
  );
}