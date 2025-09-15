import React from "react";
import { Icon } from "./Icons";

export default function SolutionsPanel() {
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
            <Icon name={item.icon} className="h-6 w-6 text-black" />
            <span className="text-base font-medium">{item.t}</span>
          </span>
          <span className="text-base text-slate-500">Explore →</span>
        </a>
      ))}
    </div>
  );
}
