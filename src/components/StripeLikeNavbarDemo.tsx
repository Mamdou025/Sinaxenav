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
                    className={`relative rounded-xl px-3 py-2 text-sm font-medium transition hover:text-slate-900 ${
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
                <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Docs</a>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
                <a href="#" className="rounded-xl border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-900 hover:text-white transition">Sign in</a>
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
        <h1 className="text-3xl font-bold tracking-tight">Stripe‑style morphing navbar demo</h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Hover the navigation items above. Notice how a single dropdown morphs its size and the caret tracks the hovered item. Panels have different dimensions to demonstrate fluid resizing.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-24 rounded-xl bg-slate-100" />
              <div className="mt-4 h-3 w-2/3 rounded bg-slate-200" />
              <div className="mt-2 h-3 w-1/2 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}