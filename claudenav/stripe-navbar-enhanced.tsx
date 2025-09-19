import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Logo Component
function SinaxeLogo({ className = "h-8 w-auto" }) {
  return (
    <div className={`${className} flex items-center`}>
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="4" width="32" height="10" rx="2.5" fill="#22C55E" />
        <rect x="8" y="19" width="32" height="10" rx="2.5" fill="#2563EB" />
        <rect x="8" y="34" width="32" height="10" rx="2.5" fill="#EF4444" />
      </svg>
      <span className="ml-2 text-xl font-bold text-slate-900">Sinaxe</span>
    </div>
  );
}

// Icons
function ProductsIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}

function SolutionsIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 3h4v4h-4zM4 10h4v4H4zM16 10h4v4h-4zM10 16h4v4h-4z"/>
    </svg>
  );
}

function DevelopersIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l-6-6 6-6"/>
      <path d="M15 6l6 6-6 6"/>
    </svg>
  );
}

function CompanyIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="7" width="7" height="13" rx="1"/>
      <rect x="14" y="3" width="7" height="17" rx="1"/>
      <path d="M6.5 10h0M6.5 13h0M17.5 7h0M17.5 10h0M17.5 13h0M17.5 16h0"/>
    </svg>
  );
}

// Panel Icons
function Icon({ name, className = "h-6 w-6 text-slate-700" }) {
  const icons = {
    payments: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
      </svg>
    ),
    checkout: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2h12l2 6H4L6 2z"/><path d="M4 8l2 12h12l2-12"/>
      </svg>
    ),
    elements: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/>
      </svg>
    ),
    terminal: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 6h6"/>
      </svg>
    ),
    radar: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3"/>
      </svg>
    ),
    billing: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 3l1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1 1 1 1-1v18l-1-1"/>
      </svg>
    ),
    // Solutions icons
    saas: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 18a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1A4 4 0 0 0 6 18h11.5z"/>
      </svg>
    ),
    marketplaces: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/>
      </svg>
    ),
    ecommerce: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 6h15l-1.5 8H7.5L6 6z"/><circle cx="9" cy="19" r="1.5"/>
      </svg>
    ),
    // Developer icons  
    api: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 4L3 8v8l4 4"/><path d="M17 4l4 4v8l-4 4"/>
      </svg>
    ),
    docs: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6v20h12V8z"/><path d="M14 2v6h6"/>
      </svg>
    ),
    // Company icons
    about: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h2v4h-2z"/>
      </svg>
    ),
    careers: () => (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      </svg>
    )
  };
  
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent /> : null;
}

// Panel Components
function ProductsPanel() {
  const items = [
    { 
      title: "Payments", 
      desc: "Online, in‑person, subscriptions", 
      icon: "payments",
      badge: null
    },
    { 
      title: "Checkout", 
      desc: "Prebuilt payment form", 
      icon: "checkout",
      badge: null
    },
    { 
      title: "Elements", 
      desc: "Composable UI components", 
      icon: "elements",
      badge: "Popular"
    },
    { 
      title: "Terminal", 
      desc: "In‑person POS", 
      icon: "terminal",
      badge: null
    },
    { 
      title: "Radar", 
      desc: "Fraud & risk management", 
      icon: "radar",
      badge: null
    },
    { 
      title: "Billing", 
      desc: "Subscriptions & invoices", 
      icon: "billing",
      badge: null
    }
  ];

  return (
    <div className="w-[520px]">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <a 
            key={item.title} 
            href="#" 
            className="group relative rounded-lg p-4 hover:bg-slate-50 transition-colors duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Icon name={item.icon} className="h-6 w-6 text-violet-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</div>
                <div className="text-sm font-medium text-violet-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more →
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-100">
        <div className="text-sm text-slate-600 leading-relaxed">
          Accept payments online, in person, and around the world with a payments solution built for any business.
        </div>
        <a href="#" className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-700 mt-3">
          Start with our guide →
        </a>
      </div>
    </div>
  );
}

function SolutionsPanel() {
  const items = [
    { title: "SaaS", icon: "saas", desc: "Subscription businesses" },
    { title: "Marketplaces", icon: "marketplaces", desc: "Multi-party payments" },
    { title: "E‑commerce", icon: "ecommerce", desc: "Online retail" }
  ];

  return (
    <div className="w-[380px]">
      <div className="space-y-1">
        {items.map((item) => (
          <a 
            key={item.title} 
            href="#" 
            className="group flex items-center justify-between rounded-lg p-3 hover:bg-slate-50 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <Icon name={item.icon} className="h-5 w-5 text-slate-700" />
              <div>
                <div className="font-medium text-slate-900 text-sm">{item.title}</div>
                <div className="text-xs text-slate-600 mt-0.5">{item.desc}</div>
              </div>
            </div>
            <div className="text-sm text-slate-400 group-hover:text-slate-600 transition-colors duration-200">
              →
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-100">
        <div className="text-sm text-slate-600 leading-relaxed">
          Find the right solution for your business type and scale.
        </div>
        <a href="#" className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-700 mt-3">
          Explore all solutions →
        </a>
      </div>
    </div>
  );
}

function DevelopersPanel() {
  return (
    <div className="w-[480px]">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="font-semibold text-slate-900 text-sm mb-3">Documentation</div>
          <div className="space-y-2">
            {[
              { title: "API Reference", icon: "api" },
              { title: "Quickstart guide", icon: "docs" }
            ].map((item) => (
              <a key={item.title} href="#" className="group flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 transition-colors duration-200">
                <Icon name={item.icon} className="h-5 w-5 text-slate-700" />
                <span className="text-sm font-medium text-slate-900">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <div className="font-semibold text-slate-900 text-sm mb-3">Resources</div>
          <div className="space-y-2 text-sm">
            <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors duration-200">Support center</a>
            <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors duration-200">Changelog</a>
            <a href="#" className="block text-slate-600 hover:text-slate-900 transition-colors duration-200">Community</a>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-100">
        <div className="text-sm text-slate-600 leading-relaxed">
          Everything you need to integrate Sinaxe and build your payments flow.
        </div>
      </div>
    </div>
  );
}

function CompanyPanel() {
  const items = [
    { title: "About", icon: "about" },
    { title: "Careers", icon: "careers" }
  ];

  return (
    <div className="w-[300px]">
      <div className="space-y-1">
        {items.map((item) => (
          <a 
            key={item.title} 
            href="#" 
            className="group flex items-center gap-3 rounded-lg p-3 hover:bg-slate-50 transition-colors duration-200"
          >
            <Icon name={item.icon} className="h-5 w-5 text-slate-700" />
            <span className="text-sm font-medium text-slate-900">{item.title}</span>
          </a>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-100">
        <div className="text-sm text-slate-600 leading-relaxed">
          Learn more about our company and team.
        </div>
      </div>
    </div>
  );
}

// Main Navigation Component
const MENU = [
  { label: "Products", Panel: ProductsPanel, Icon: ProductsIcon },
  { label: "Solutions", Panel: SolutionsPanel, Icon: SolutionsIcon },
  { label: "Developers", Panel: DevelopersPanel, Icon: DevelopersIcon },
  { label: "Company", Panel: CompanyPanel, Icon: CompanyIcon }
];

export default function StripeNavbarDemo() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const [caretX, setCaretX] = useState(0);

  const wrapperRef = useRef(null);
  const itemRefs = useRef([]);
  const closeTimer = useRef(null);

  const handleEnterItem = (i) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActive(i);
    setOpen(true);
  };

  const handleMouseLeaveAll = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const recomputeCaret = () => {
    if (active == null) return;
    const wrap = wrapperRef.current;
    const item = itemRefs.current[active];
    if (!wrap || !item) return;
    const wRect = wrap.getBoundingClientRect();
    const iRect = item.getBoundingClientRect();
    const x = iRect.left + iRect.width / 2 - wRect.left;
    setCaretX(x);
  };

  useEffect(() => {
    recomputeCaret();
    const onResize = () => recomputeCaret();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, open]);

  const ActivePanel = useMemo(() => (active != null ? MENU[active].Panel : null), [active]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4">
          <div
            ref={wrapperRef}
            className="relative"
            onMouseLeave={handleMouseLeaveAll}
          >
            {/* Main Navigation Bar */}
            <nav className="flex h-16 items-center">
              {/* Logo */}
              <div className="flex items-center">
                <a href="#" className="flex items-center" aria-label="Sinaxe">
                  <SinaxeLogo />
                </a>
              </div>

              {/* Navigation Items */}
              <div className="flex items-center ml-8">
                {MENU.map((item, i) => (
                  <button
                    key={item.label}
                    ref={(el) => (itemRefs.current[i] = el)}
                    onMouseEnter={() => handleEnterItem(i)}
                    className={`relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      active === i 
                        ? "text-slate-900" 
                        : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <item.Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                    
                    {/* Active underline */}
                    {active === i && (
                      <motion.div
                        layoutId="active-underline"
                        className="absolute -bottom-4 left-1/2 h-0.5 w-8 rounded-full bg-violet-600"
                        style={{ x: "-50%" }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Right Side Navigation */}
              <div className="ml-auto flex items-center gap-6">
                <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200">
                  Pricing
                </a>
                <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200">
                  Docs
                </a>
                <div className="flex items-center gap-3">
                  <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200">
                    Sign in
                  </a>
                  <a 
                    href="#" 
                    className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors duration-200"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </nav>

            {/* Dropdown Panel */}
            <AnimatePresence>
              {open && active != null && ActivePanel && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30,
                    mass: 0.8
                  }}
                  className="absolute left-0 top-full pt-3"
                  onMouseEnter={() => setOpen(true)}
                >
                  <motion.div
                    layout
                    className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
                  >
                    {/* Caret */}
                    <motion.div
                      className="absolute -top-2 h-4 w-4 rotate-45 border-l border-t border-slate-200 bg-white"
                      animate={{ 
                        left: Math.max(12, Math.min(caretX - 8, 400))
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />

                    {/* Panel Content */}
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

      {/* Page Content */}
      <main className="mx-auto max-w-7xl px-4 py-16">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Supercharge Your Business with{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              AI & Data
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Sinaxe delivers next-generation analytics, automation, and cloud solutions 
            to help you scale faster, smarter, and more securely than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="rounded-full bg-slate-900 px-8 py-3 text-white font-medium text-lg hover:bg-slate-800 transition-colors duration-200"
            >
              Get started
            </a>
            <a
              href="#"
              className="rounded-full border border-slate-300 px-8 py-3 text-slate-700 font-medium text-lg hover:border-slate-400 hover:bg-slate-50 transition-colors duration-200"
            >
              Learn more
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to grow
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From AI-powered analytics to secure cloud infrastructure, 
              we provide the tools your business needs to thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Analytics",
                description: "Unlock actionable insights and automate reporting with our advanced AI analytics platform.",
                icon: "🤖"
              },
              {
                title: "Cloud Infrastructure", 
                description: "Secure, scalable infrastructure and expert IT consulting to keep your business running 24/7.",
                icon: "☁️"
              },
              {
                title: "Smart Automation",
                description: "Connect your favorite tools and automate workflows to save time and boost productivity.",
                icon: "⚡"
              }
            ].map((feature, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}