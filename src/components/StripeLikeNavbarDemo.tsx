import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SinaxeLogo from "./SinaxeLogo";
import { ProductsIcon, SolutionsIcon, DevelopersIcon, CompanyIcon } from "./Icons";
import ProductsPanel from "./ProductsPanel";
import SolutionsPanel from "./SolutionsPanel";
import DevelopersPanel from "./DevelopersPanel";
import CompanyPanel from "./CompanyPanel";

// Define the menu with labels, icons, and the panel component to render.
const MENU = [
  { label: "Products", Panel: ProductsPanel, Icon: ProductsIcon },
  { label: "Solutions", Panel: SolutionsPanel, Icon: SolutionsIcon },
  { label: "Developers", Panel: DevelopersPanel, Icon: DevelopersIcon },
  { label: "Company", Panel: CompanyPanel, Icon: CompanyIcon }
];

export default function StripeLikeNavbarDemo() {
  const [active, setActive] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [caretX, setCaretX] = useState(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeTimer = useRef<number | null>(null);

  const handleEnterItem = (i: number) => {
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
            <nav className="flex h-16 items-center gap-6">
              <a href="#" className="flex items-center gap-2" aria-label="Sinaxe">
                <SinaxeLogo className="w-32 h-auto" /> 

                <span className="sr-only">Sinaxe</span>
              </a>
              <div className="flex items-center gap-2">
                {MENU.map((item, i) => (
                  <button
                    key={item.label}
                    ref={(el) => (itemRefs.current[i] = el)}
                    onMouseEnter={() => handleEnterItem(i)}
                    className={`relative rounded-xl px-3 py-2 text-sm font-bold transition hover:text-slate-900 ${
                      active === i ? "text-slate-900" : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <item.Icon className="h-4 w-4 text-black" />
                      <span>{item.label}</span>
                    </span>
                    {active === i && (
                      <motion.span
                        layoutId="active-underline"
                        className="pointer-events-none absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-slate-900"
                        transition={{ type: "spring", stiffness: 600, damping: 40 }}
                      />)
                    }
                  </button>
                ))}
              </div>
              <div className="ml-auto flex items-center gap-2">
                <a href="#" className="text-sm font-bold text-slate-600 hover:text-slate-900">Docs</a>
                <a href="#" className="text-sm font-bold text-slate-600 hover:text-slate-900">Pricing</a>
                <a href="#" className="rounded-xl border border-slate-300 px-3 py-1.5 text-sm font-bold hover:bg-slate-900 hover:text-white transition">Sign in</a>
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
     <main className="mx-auto max-w-6xl px-6 py-16">
  {/* Hero Section */}
  <section className="text-center py-20">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
      Supercharge Your Business with <span className="text-blue-600">AI, Data & IT</span>
    </h1>
    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
      Sinaxe delivers next-gen analytics, automation, and cloud solutions to help you scale faster, smarter, and more securely.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
      <a
        href="#contact"
        className="rounded-xl bg-blue-600 px-8 py-3 text-white font-bold text-lg shadow hover:bg-blue-700 transition"
      >
        Get Started
      </a>
      <a
        href="#features"
        className="rounded-xl border border-blue-600 px-8 py-3 text-blue-600 font-bold text-lg hover:bg-blue-50 transition"
      >
        See Features
      </a>
    </div>

  </section>

  {/* Trusted Logos */}
  <section className="py-8">
    <h3 className="text-center text-slate-500 font-semibold mb-6">Trusted by teams at</h3>
    <div className="flex flex-wrap justify-center gap-8 grayscale opacity-80">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="TV" className="h-8" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-8" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8" />
    </div>
  </section>

  {/* Features Section */}
  <section className="py-20" id="features">
    <h2 className="text-4xl font-bold mb-8 text-center">Everything you need to grow</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow hover:shadow-lg transition">
        <div className="mb-4 text-blue-600">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2v20m10-10H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </div>
        <h3 className="text-xl font-bold mb-2">AI-Powered Analytics</h3>
        <p className="text-slate-600">
          Unlock actionable insights and automate reporting with our advanced AI analytics platform.
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow hover:shadow-lg transition">
        <div className="mb-4 text-blue-600">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Cloud & IT Solutions</h3>
        <p className="text-slate-600">
          Secure, scalable infrastructure and expert IT consulting to keep your business running 24/7.
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow hover:shadow-lg transition">
        <div className="mb-4 text-blue-600">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Automation & Integrations</h3>
        <p className="text-slate-600">
          Connect your favorite tools and automate workflows to save time and boost productivity.
        </p>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="py-20" id="about">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Why Sinaxe?</h2>
      <p className="text-slate-600 text-lg mb-6">
        We’re a team of passionate engineers, data scientists, and IT experts dedicated to helping you succeed. From startups to enterprises, we deliver solutions that are secure, scalable, and tailored to your needs.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
        <div>
          <div className="text-3xl font-extrabold text-blue-600">99.99%</div>
          <div className="text-slate-500">Uptime Guarantee</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-blue-600">24/7</div>
          <div className="text-slate-500">Expert Support</div>
        </div>
        <div>
          <div className="text-3xl font-extrabold text-blue-600">1000+</div>
          <div className="text-slate-500">Happy Clients</div>
        </div>
      </div>
    </div>
  </section>

  {/* Call to Action / Contact */}
  <section className="py-20" id="contact">
    <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-10 shadow text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-slate-600 mb-8">
        Book a free consultation or send us a message. Our team will get back to you within 24 hours.
      </p>
      <form className="space-y-4 text-left">
        <div>
          <label className="block text-slate-700 font-bold mb-1">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-slate-700 font-bold mb-1">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@email.com" />
        </div>
        <div>
          <label className="block text-slate-700 font-bold mb-1">Message</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="How can we help?"></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-3 text-white font-bold text-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</main>
    </div>
  );
}