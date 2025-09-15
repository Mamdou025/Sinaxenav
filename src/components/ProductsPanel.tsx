import React from "react";
import { Icon } from "./Icons";

export default function ProductsPanel() {
  const items = [
    { t: "Payments", d: "Online, in‑person, subscriptions", icon: "payments" },
    { t: "Checkout", d: "Prebuilt payment form", icon: "checkout" },
    { t: "Elements", d: "Composable UI components", icon: "elements" },
    { t: "Terminal", d: "In‑person POS", icon: "terminal" },
    { t: "Radar", d: "Fraud & risk", icon: "radar" },
    { t: "Billing", d: "Subscriptions & invoices", icon: "billing" }
  ];
  return (
    <div className="grid grid-cols-2 gap-6 w-[560px]">
      {items.map((item) => (
        <a key={item.t} href="#" className="group rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:bg-slate-50 transition">
          <div className="flex items-start gap-3">
            <Icon name={item.icon} className="h-5 w-5 text-black mt-0.5" />
            <div>
              <div className="text-sm font-semibold">{item.t}</div>
              <div className="text-xs text-slate-500 mt-1 leading-snug">{item.d}</div>
              <div className="mt-3 text-xs font-medium text-slate-900 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}