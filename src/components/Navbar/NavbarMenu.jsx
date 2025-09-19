import React from "react";
import NavbarMenuItem from "./NavbarMenuItem";

export default function NavbarMenu({ menu, active, onEnterItem, itemRefs }) {
  return (
    <ul className="flex gap-6 ml-8">
      {menu.map((item, i) => (
        <NavbarMenuItem
          key={item.label}
          ref={el => (itemRefs.current[i] = el)}
          active={active === i}
          onMouseEnter={() => onEnterItem(i)}
        >
          {item.label}
        </NavbarMenuItem>
      ))}
    </ul>
  );
}