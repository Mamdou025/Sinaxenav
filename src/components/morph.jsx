import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Put your logo file at public/logo.svg to display it in the navbar.
// You can change the alt text and brand name below.

// Inline logo matching the image you sent (three stacked rounded rectangles)
function SinaxeLogo({ className = "h-6 w-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="8" y="4" width="32" height="10" rx="2.5" fill="#22C55E"/>
      <rect x="8" y="19" width="32" height="10" rx="2.5" fill="#2563EB"/>
      <rect x="8" y="34" width="32" height="10" rx="2.5" fill="#EF4444"/>
    </svg>
  );
}

// --- Simple black icons for menu items ---
function ProductsIcon({ className = "h-4 w-4 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}
function SolutionsIcon({ className = "h-4 w-4 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 3h4v4h-4zM4 10h4v4H4zM16 10h4v4h-4zM10 16h4v4h-4z"/>
    </svg>
  );
}
function DevelopersIcon({ className = "h-4 w-4 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18l-6-6 6-6"/>
      <path d="M15 6l6 6-6 6"/>
    </svg>
  );
}
function CompanyIcon({ className = "h-4 w-4 text-black" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="7" width="7" height="13" rx="1"/>
      <rect x="14" y="3" width="7" height="17" rx="1"/>
      <path d="M6.5 10h0M6.5 13h0M17.5 7h0M17.5 10h0M17.5 13h0M17.5 16h0"/>
    </svg>
  );
}

// --- Item icons used inside dropdown panels (black, outline) ---
function Icon({ name, className = "h-5 w-5 text-black" }) {
  const map = {
    // Products panel
    payments: PaymentsIcn,
    checkout: CheckoutIcn,
    elements: ElementsIcn,
    terminal: PosIcn,
    radar: RadarIcn,
    billing: ReceiptIcn,
    // Solutions
    saas: CloudIcn,
    marketplaces: NetworkIcn,
    ecommerce: CartIcn,
    embedded: LayersIcn,
    platforms: CubesIcn,
    crypto: CryptoIcn,
    // Devs left
    api: BracketsIcn,
    quickstart: RocketIcn,
    webhooks: SignalIcn,
    cli: TerminalIcn,
    stripejs: FileJsIcn,
    mobile: PhoneIcn,
    // Resources right
    changelog: HistoryIcn,
    status: StatusIcn,
    sampleapps: WindowIcn,
    support: LifebuoyIcn,
    // Company
    about: InfoIcn,
    careers: BriefcaseIcn,
    press: MegaphoneIcn,
    blog: PenIcn,
  };
  const C = map[name];
  return C ? <C className={className} /> : null;
}

// --- SVG icon primitives ---
function PaymentsIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h5"/></svg>);} // card
function CheckoutIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2h12l2 6H4L6 2z"/><path d="M4 8l2 12h12l2-12"/><circle cx="10" cy="20" r="1.5"/><circle cx="16" cy="20" r="1.5"/></svg>);} // bag/cart
function ElementsIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="8" y="13" width="8" height="8" rx="1"/></svg>);} // grid
function PosIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 6h6M8 11h8M10 16h4"/></svg>);} // terminal/phone
function RadarIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5"/></svg>);} // radar
function ReceiptIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 3l1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1v18l-1-1-1 1-1-1-1 1-1-1-1 1-1-1-1 1-1-1-1 1V3z"/><path d="M8 8h8M8 12h8M8 16h6"/></svg>);} // receipt

function CloudIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.5 18a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1A4 4 0 0 0 6 18h11.5z"/></svg>);} // cloud
function NetworkIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 12h8M17 7l-2 3M17 17l-2-3"/></svg>);} // nodes
function CartIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 6h15l-1.5 8H7.5L6 6z"/><circle cx="9" cy="19" r="1.5"/><circle cx="18" cy="19" r="1.5"/></svg>);} // cart
function LayersIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/></svg>);} // layers
function CubesIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="8.5" y="14" width="7" height="7" rx="1"/></svg>);} // cubes
function CryptoIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 21 7 21 17 12 22 3 17 3 7"/></svg>);} // token

function BracketsIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 4L3 8v8l4 4"/><path d="M17 4l4 4v8l-4 4"/></svg>);} // api
function RocketIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 19c3-1 6-4 7-7 3-1 6-4 7-7-3 1-6 4-7 7-3 1-6 4-7 7z"/><path d="M4 13l7 7"/></svg>);} // quickstart
function SignalIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12a10 10 0 0 1 20 0"/><path d="M5 12a7 7 0 0 1 14 0"/><path d="M8 12a4 4 0 0 1 8 0"/></svg>);} // webhooks
function TerminalIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 7l5 5-5 5"/><path d="M13 17h7"/></svg>);} // cli
function FileJsIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 2H6v20h12V8z"/><path d="M14 2v6h6"/><path d="M9 17c0 1 .5 2 2 2s2-.7 2-1.7V16"/></svg>);} // JS file
function PhoneIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>);} // phone

function HistoryIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v6h6"/><path d="M12 7v5l3 3"/></svg>);} // history
function StatusIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 12h4v8H4zM10 8h4v12h-4zM16 4h4v16h-4z"/></svg>);} // status bars
function WindowIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18"/></svg>);} // window/app
function LifebuoyIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M4.9 4.9l3.2 3.2M19.1 4.9l-3.2 3.2M4.9 19.1l3.2-3.2M19.1 19.1l-3.2-3.2"/></svg>);} // support

function InfoIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h2v4h-2z"/></svg>);} // info
function BriefcaseIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>);} // briefcase
function MegaphoneIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 11l14-5v12L3 13z"/><path d="M10 13v6a3 3 0 0 0 6 0"/></svg>);} // press
function PenIcn(props){return(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 19l7-7 3 3-7 7H8v-3z"/><path d="M18 5l3 3"/></svg>);} // blog

// --- Demo content for each dropdown panel ---
function ProductsPanel() {
  return (
    <div className="w-[900px] grid grid-cols-3 gap-8">
      <div className="space-y-4">
        <div className="text-[11px] uppercase tracking-wider text-slate-500">Global payments</div>
        <a href="#" className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
          <Icon name="payments" className="h-5 w-5" />
          <div>
            <div className="text-sm font-semibold">Payments</div>
            <div className="text-xs text-slate-500">Online payments</div>
          </div>
        </a>
        <a href="#" className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
          <Icon name="terminal" className="h-5 w-5" />
          <div>
            <div className="text-sm font-semibold">Terminal</div>
            <div className="text-xs text-slate-500">In‑person payments</div>
          </div>
        </a>
        <a href="#" className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
          <Icon name="radar" className="h-5 w-5" />
          <div>
            <div className="text-sm font-semibold">Radar</div>
            <div className="text-xs text-slate-500">Fraud prevention</div>
          </div>
        </a>
        <a href="#" className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
          <Icon name="api" className="h-5 w-5" />
          <div>
            <div className="text-sm font-semibold">Authorization</div>
            <div className="text-xs text-slate-500">Acceptance optimisation</div>
          </div>
        </a>
      </div>
      <div className="space-y-4">
        <div className="text-[11px] uppercase tracking-wider text-slate-500">Money management</div>
        <a href="#" className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
          <Icon name="platforms" className="h-5 w-5" />
          <div>
            <div className="text-sm font-semibold">Connect</div>
            <div className="text-xs text-slate-500">Payments for platforms</div>
          </div>
        </a>
        <a href="#" className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
          <Icon name="embedded" className="h-5 w-5" />
          <div>
            <div className="text-sm font-semibold">Global Payouts</div>
            <div className="text-xs text-slate-500">Send money to third parties</div>
          </div>
        </a>

        <div className="pt-2 text-[11px] uppercase tracking-wider text-slate-500">More</div>
        {[
          { t: "Payment methods" },
          { t: "Link" },
          { t: "Financial Connections" },
          { t: "Identity" },
          { t: "Atlas" },
          { t: "Climate" },
          { t: "Treasury" },
          { t: "Verified" }
        ].map((x) => (
          <a key={x.t} href="#" className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50 text-sm">
            <Icon name="elements" className="h-4 w-4" />
            <span>{x.t}</span>
          </a>
        ))}
      </div>

      <div className="space-y-4">
        <div className="text-[11px] uppercase tracking-wider text-slate-500">Revenue & finance automation</div>
        {[
          { t: "Billing", d: "Subscriptions and usage‑based", icon: "billing" },
          { t: "Invoicing", d: "Online invoices", icon: "billing" },
          { t: "Revenue Recognition", d: "Accounting automation", icon: "receipt" },
          { t: "Sigma", d: "Custom reports", icon: "cubes" },
          { t: "Tax", d: "Sales tax & VAT", icon: "status" },
          { t: "Data Pipeline", d: "Data sync", icon: "layers" }
        ].map((x) => (
          <a key={x.t} href="#" className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
            <Icon name={x.icon || "billing"} className="h-5 w-5" />
            <div>
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="text-xs text-slate-500">{x.d}</div>
            </div>
          </a>
        ))}

        <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
          <div className="text-sm font-semibold mb-2">Quick links</div>
          <div className="flex flex-wrap gap-2 text-xs">
            <a href="#" className="rounded-lg border border-slate-200 px-2 py-1">Pricing</a>
            <a href="#" className="rounded-lg border border-slate-200 px-2 py-1">Docs</a>
            <a href="#" className="rounded-lg border border-slate-200 px-2 py-1">Contact sales</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionsPanel() {
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

function DevelopersPanel() {
  return (
    <div className="w-[680px]">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="text-sm font-semibold mb-2">Docs & SDKs</div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { t: "API Reference", icon: "api" },
              { t: "Quickstart", icon: "quickstart" },
              { t: "Webhooks", icon: "webhooks" },
              { t: "CLI", icon: "cli" },
              { t: "Stripe.js", icon: "stripejs" },
              { t: "Mobile SDKs", icon: "mobile" }
            ].map((x) => (
              <a key={x.t} href="#" className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 hover:bg-slate-50 hover:border-slate-300 transition text-sm">
                <Icon name={x.icon} className="h-5 w-5 text-black" />
                <span>{x.t}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-sm font-semibold mb-2">Resources</div>
          <ul className="space-y-2 text-sm">
            {[
              { t: "Changelog", icon: "changelog" },
              { t: "Status", icon: "status" },
              { t: "Sample apps", icon: "sampleapps" },
              { t: "Support", icon: "support" }
            ].map((x) => (
              <li key={x.t}>
                <a href="#" className="flex items-center gap-3 hover:underline">
                  <Icon name={x.icon} className="h-4 w-4 text-black" />
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

function ResourcesPanel() {
  return (
    <div className="w-[520px] grid gap-3">
      {[{t:"Docs",icon:"api"},{t:"Guides",icon:"quickstart"},{t:"Support",icon:"support"},{t:"Status",icon:"status"},{t:"Changelog",icon:"changelog"},{t:"Blog",icon:"blog"}].map((x)=> (
        <a key={x.t} href="#" className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 hover:bg-slate-50 hover:border-slate-300 transition text-sm">
          <Icon name={x.icon} className="h-5 w-5 text-black" />
          <span>{x.t}</span>
        </a>
      ))}
    </div>
  );
}

function PricingPanel() {
  return (
    <div className="w-[420px] grid gap-3">
      {[{t:"Pricing overview"},{t:"Calculator"},{t:"Volume discounts"},{t:"Contact sales"}].map((x)=> (
        <a key={x.t} href="#" className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 hover:bg-slate-50 hover:border-slate-300 transition text-sm">
          <span className="flex items-center gap-3">
            <Icon name="billing" className="h-5 w-5 text-black" />
            <span>{x.t}</span>
          </span>
          <span className="text-xs text-slate-500">→</span>
        </a>
      ))}
    </div>
  );
}


const MENU = [
  { label: "Products", Panel: ProductsPanel, Icon: ProductsIcon },
  { label: "Solutions", Panel: SolutionsPanel, Icon: SolutionsIcon },
  { label: "Developers", Panel: DevelopersPanel, Icon: DevelopersIcon },
  { label: "Resources", Panel: ResourcesPanel, Icon: CompanyIcon },
  { label: "Pricing", Panel: PricingPanel, Icon: ProductsIcon }
];

export default function StripeLikeNavbarDemo() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const [caretX, setCaretX] = useState(0);

const wrapperRef = useRef(null);
const dropdownRef = useRef(null);
const itemRefs = useRef([]);
const closeTimer = useRef(null);

const handleEnterItem = (i) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActive(i);
    setOpen(true);
  };

  const handleMouseLeaveAll = () => {
    // Small delay to make pointer transitions forgiving
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      setActive((prev) => prev);
    }, 120);
  };

  // Compute caret position under the active tab (relative to wrapper)
  const recomputeCaret = () => {
    if (active == null) return;
    const wrap = wrapperRef.current;
    const item = itemRefs.current[active];
    if (!wrap || !item) return;
    const wRect = wrap.getBoundingClientRect();
    const iRect = item.getBoundingClientRect();
    const x = iRect.left + iRect.width / 2 - wRect.left; // center of item inside wrapper
    setCaretX(x);
  };

  useEffect(() => {
    recomputeCaret();
    const onResize = () => recomputeCaret();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, open]);

  const ActivePanel = useMemo(() => (active != null ? MENU[active].Panel : null), [active]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto max-w-6xl px-6">
          <div
            ref={wrapperRef}
            className="relative"
            onMouseLeave={handleMouseLeaveAll}
          >
            {/* Navbar row */}
            <nav className="grid h-16 grid-cols-[auto_1fr_auto] items-center">
              {/* left: logo */}
              <a href="#" className="flex items-center gap-2" aria-label="Sinaxe">
                <SinaxeLogo className="h-6 w-6" />
                 <span
          style={{
            fontFamily: "'Manifold', sans-serif",
            fontWeight: 800,
            fontSize: "2rem",
            letterSpacing: "0.03em",
            lineHeight: 1,
          }}
          className="ml-2 text-slate-900"
        >
          Sinaxe
        </span>
              </a>

              {/* center: menu */}
              <div className="justify-self-center flex items-center gap-2">
                {MENU.map((item, i) => (
                  <button
                    key={item.label}
                    ref={(el) => (itemRefs.current[i] = el)}
                    onMouseEnter={() => handleEnterItem(i)}
                    className={`relative rounded-xl px-3 py-2 text-sm font-medium transition hover:text-slate-900 ${
                      active === i ? "text-slate-900" : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.label}</span>
                    </span>
                    {active === i && (
                      <motion.span
                        layoutId="active-underline"
                        className="pointer-events-none absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-slate-900"
                        transition={{ type: "spring", stiffness: 600, damping: 40 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* right: actions */}
              <div className="justify-self-end flex items-center gap-2">
                <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Sign in</a>
                <a href="#" className="rounded-xl bg-slate-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-black transition">Contact sales</a>
              </div>
            </nav>

            {/* Dropdown container (positioned under the nav) */}
            <AnimatePresence>
              {open && active != null && ActivePanel && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.6 }}
                  className="absolute left-0 top-full"
                  onMouseEnter={() => setOpen(true)}
                >
                  {/* Morphing background */}
                  <motion.div
                    layout
                    className="relative rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 overflow-hidden"
                  >
                    {/* caret */}
                    <motion.span
                      aria-hidden
                      className="absolute -top-2 h-4 w-4 rotate-45 rounded-sm bg-white border-l border-t border-slate-200"
                      animate={{ left: Math.max(16, caretX - 8) }}
                      transition={{ type: "spring", stiffness: 600, damping: 40 }}
                    />

                    {/* subtle lower gray strip like Stripe */}
                    <motion.div layout className="absolute inset-x-0 bottom-0 h-10 bg-slate-50/70" />

                    {/* Panel contents */}
                    <motion.div layout className="relative p-6">
                      <ActivePanel />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Filler page content so you can scroll */}
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* full-bleed gradient background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-200 via-sky-100 to-cyan-200" />
          <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
          <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl" />

          {/* top banner */}
          <div className="mx-auto max-w-6xl px-6 pt-10">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur hover:bg-white">
              Sessions 2025 — Watch on demand <span>→</span>
            </a>
          </div>

          {/* constrained content */}
          <div className="mx-auto max-w-6xl px-6 pt-8 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
              {/* left copy */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Financial infrastructure to grow your revenue</h1>
                <p className="mt-4 text-slate-700 max-w-xl">Join millions of companies of all sizes using our platform to accept payments, send payouts, and manage their businesses online and in person.</p>
                {/* email cta */}
                <form className="mt-6 flex w-full max-w-md gap-2">
                  <input type="email" placeholder="Email address" className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <button className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-black">Start now</button>
                </form>
              </div>

              {/* right visuals */}
              <div className="relative h-[360px]">
                {/* payment form mock */}
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="absolute left-0 top-8 w-[300px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5">
                  <div className="h-4 w-24 rounded bg-slate-200" />
                  <div className="mt-3 space-y-2">
                    <div className="h-9 rounded-lg border border-slate-200" />
                    <div className="h-9 rounded-lg border border-slate-200" />
                    <div className="h-9 rounded-lg border border-slate-200" />
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-slate-900 py-2 text-white text-sm">Pay</button>
                </motion.div>
                {/* dashboard mock */}
                <motion.div initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.05, type: 'spring', stiffness: 300, damping: 30 }} className="absolute right-0 top-0 w-[420px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-28 rounded bg-slate-200" />
                    <div className="h-6 w-24 rounded-full bg-slate-100" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {Array.from({length:6}).map((_,i)=> (
                      <div key={i} className="h-16 rounded-lg bg-slate-100" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <section className="py-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center text-slate-500">
              {["OpenAI","Amazon","Google","Anthropic","Marriott","Shopify","Airbnb","NYT"].map((name)=> (
                <div key={name} className="text-center text-sm font-medium opacity-70">{name}</div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            {[
              {
                eyebrow: "Modular solutions",
                title: "A fully integrated suite of financial and payments products",
                desc: "Use our modular platform to accept payments globally, manage revenue, and handle reporting and tax.",
                seeAlso: ["Payments","Billing","Connect"],
              },
              {
                eyebrow: "Optimise revenue",
                title: "Tools to increase authorisation and reduce fraud",
                desc: "Improve acceptance with network‑level optimisations and machine‑learning fraud prevention.",
                seeAlso: ["Radar","Authorization","Payment methods"],
              }
            ].map((blk, i)=> (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i>0? 'mt-16':''}`}>
                {/* left text (yellow area) */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500">{blk.eyebrow}</div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{blk.title}</h2>
                  <p className="mt-3 text-slate-700 max-w-prose">{blk.desc}</p>
                  <div className="mt-5 flex gap-3">
                    <a href="#" className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white">Get started</a>
                    <a href="#" className="rounded-xl border border-slate-300 px-4 py-2 text-sm">Contact sales</a>
                  </div>
                  <div className="mt-3 text-xs text-slate-500">See also: {blk.seeAlso.join(' · ')}</div>
                </div>
                {/* right visuals (purple area) */}
                <div className="relative h-[320px]">
                  <div className="absolute inset-0 rounded-2xl border border-dashed border-slate-300/70 bg-slate-50/60 flex items-center justify-center text-slate-400 text-sm">ILLUSTRATION OR ANIMATION HERE</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
