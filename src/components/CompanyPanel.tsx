import React from "react";
import { Icon } from "./Icons";

export default function CompanyPanel() {
  return (
    <div className="w-[380px] grid gap-3">
      {[
        { t: "About", icon: "about" },
        { t: "Careers", icon: "careers" },
        { t: "Press", icon: "press" },
        { t: "Blog", icon: "blog" }
      ].map((x) => (
        <a key={x.t} href="#" className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 hover:bg-slate-50 hover:border-slate-300 transition text-sm">
          <Icon name={x.icon} className="h-4 w-4 text-black" />
          <span>{x.t}</span>
        </a>
      ))}
      <p className="text-xs text-slate-500 leading-snug mt-2">
        This panel is intentionally shorter to show the dropdown smoothly resizing to different content heights.
      </p>
    </div>
  );
}