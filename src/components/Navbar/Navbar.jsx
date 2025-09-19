import React, { useState, useRef, useEffect, useMemo } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarCaret from "./NavbarCaret";
import NavbarDropdown from "./NavbarDropdown";

// Import your panels
import ProductsPanel from "../Panels/ProductsPanel";
import SolutionsPanel from "../Panels/SolutionsPanel";
import DevelopersPanel from "../Panels/DevelopersPanel";
import ResourcesPanel from "../Panels/ResourcesPanel";
import PricingPanel from "../Panels/PricingPanel";

import ProductsIcon from "./ProductsIcon";
import SolutionsIcon from "./SolutionsIcon";
import DevelopersIcon from "./DevelopersIcon";
import CompanyIcon from "./CompanyIcon";

const MENU = [
  { label: "Products", Icon: ProductsIcon, Panel: ProductsPanel },
  { label: "Solutions", Icon: SolutionsIcon, Panel: SolutionsPanel },
  { label: "Developers", Icon: DevelopersIcon, Panel: DevelopersPanel },
  { label: "Resources", Icon: CompanyIcon, Panel: ResourcesPanel },
  { label: "Pricing", Icon: ProductsIcon, Panel: PricingPanel }
];

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const [caretX, setCaretX] = useState(0);

  const wrapperRef = useRef(null);
  const itemRefs = useRef([]);
  const closeTimer = useRef(null);

  // Handle mouse enter on menu item
  const handleEnterItem = (i) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActive(i);
    setOpen(true);
  };

  // Handle mouse leave from navbar
  const handleMouseLeaveAll = () => {
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      setActive(null);
    }, 120);
  };

  // Compute caret position
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
    <nav
      className="relative flex items-center gap-3 px-6 py-4"
      ref={wrapperRef}
      onMouseLeave={handleMouseLeaveAll}
    >
      <NavbarLogo />
      <NavbarMenu
        menu={MENU}
        active={active}
        setActive={setActive}
        onEnterItem={handleEnterItem}
        itemRefs={itemRefs}
      />
      <NavbarCaret caretX={caretX} visible={open && active != null} />
      <NavbarDropdown isOpen={open && active != null}>
        {ActivePanel && <ActivePanel />}
      </NavbarDropdown>
    </nav>
  );
}