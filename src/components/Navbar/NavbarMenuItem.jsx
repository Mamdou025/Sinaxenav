import React, { forwardRef } from "react";

const NavbarMenuItem = forwardRef(({ children, active, onMouseEnter, Icon }, ref) => (
  <li
    ref={ref}
    className={`flex items-center gap-2 font-semibold cursor-pointer px-2 py-1 transition ${
      active ? "text-blue-600" : "hover:text-blue-600"
    }`}
    onMouseEnter={onMouseEnter}
  >
    {Icon && <Icon className="h-4 w-4" />}
    {children}
  </li>
));

export default NavbarMenuItem;