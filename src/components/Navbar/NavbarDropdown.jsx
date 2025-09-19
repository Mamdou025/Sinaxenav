import React from "react";

export default function NavbarDropdown({ isOpen, children }) {
  if (!isOpen) return null;
  return (
    <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg rounded-xl z-50 animate-fadeIn">
      {children}
    </div>
  );
}