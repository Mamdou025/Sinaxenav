import React from "react";
import { Icon } from "./Icons";

export default function DevelopersPanel() {
  return (
    <div className="w-[680px]">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="text-base font-semibold mb-2">Docs &amp; SDKs</div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { t: "API Reference", icon: "api" },
              { t: "Quickstart", icon: "quickstart" },
              { t: "Webhooks", icon: "webhooks" },
              { t: "CLI", icon: "cli" },
              { t: "Stripe.js", icon: "stripejs" },
              { t: "Mobile SDKs", icon: "mobile" }
            ].map((x) => (
              <a key={x.t} href="#" className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 hover:bg-slate-50 hover:border-slate-300 transition text-base">
                <Icon name={x.icon} className="h-6 w-6 text-black" />
                <span>{x.t}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-base font-semibold mb-2">Resources</div>
          <ul className="space-y-2 text-base">
            {[
              { t: "Changelog", icon: "changelog" },
              { t: "Status", icon: "status" },
              { t: "Sample apps", icon: "sampleapps" },
              { t: "Support", icon: "support" }
            ].map((x) => (
              <li key={x.t}>
                <a href="#" className="flex items-center gap-3 hover:underline">
                  <Icon name={x.icon} className="h-5 w-5 text-black" />
                  <span>{x.t}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
