import React from "react";

export default function SinaxeLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="8" y="4" width="32" height="10" rx="2.5" fill="#22C55E" />
      <rect x="8" y="19" width="32" height="10" rx="2.5" fill="#2563EB" />
      <rect x="8" y="34" width="32" height="10" rx="2.5" fill="#EF4444" />
    </svg>
  );
}