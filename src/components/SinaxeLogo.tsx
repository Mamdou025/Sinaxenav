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
      <rect x="4" y="8" width="10" height="32" rx="2.5" fill="#22C55E" />
      <rect x="19" y="8" width="10" height="32" rx="2.5" fill="#2563EB" />
      <rect x="34" y="8" width="10" height="32" rx="2.5" fill="#EF4444" />
    </svg>
  );
}