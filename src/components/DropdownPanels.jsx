import React from "react";
import { Icon } from "../assets/iconHelpers";

// --- Products Panel ---
export function ProductsPanel() {
  return (
    <div className="w-[900px] grid grid-cols-3 gap-8">
      {/* ...copy the ProductsPanel JSX from your morph.jsx here... */}
    </div>
  );
}

// --- Solutions Panel ---
export function SolutionsPanel() {
  const items = [
    { t: "SaaS", icon: "saas" },
    { t: "Marketplaces", icon: "marketplaces" },
    { t: "E‑commerce", icon: "ecommerce" },
    { t: "Embedded finance", icon: "embedded" },
    { t: "Platforms", icon: "platforms" },
    { t: "Crypto", icon: "crypto" }
  ];
  return (
    <div className="w-[440px] grid gap-3">
      {items.map((item) => (
        <a key={item.t} href="#" className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 hover:bg-slate-50 hover:border-slate-300 transition">
          <span className="flex items-center gap-3">
            <Icon name={item.icon} className="h-5 w-5 text-black" />
            <span className="text-sm font-medium">{item.t}</span>
          </span>
          <span className="text-xs text-slate-500">Explore →</span>
        </a>
      ))}
    </div>
  );
}

// --- Developers Panel ---
export function DevelopersPanel() {
  return (
    <div className="w-[680px]">
      {/* ...copy the DevelopersPanel JSX from your morph.jsx here... */}
    </div>
  );
}

// --- Resources Panel ---
export function ResourcesPanel() {
  return (
    <div className="w-[520px] grid gap-3">
      {/* ...copy the ResourcesPanel JSX from your morph.jsx here... */}
    </div>
  );
}

// --- Pricing Panel ---
export function PricingPanel() {
  return (
    <div className="w-[420px] grid gap-3">
      {/* ...copy the PricingPanel JSX from your morph.jsx here... */}
    </div>
  );
}