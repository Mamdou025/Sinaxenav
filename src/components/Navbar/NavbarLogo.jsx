import React from "react";
import SinaxeLogo from "../SinaxeLogo"; // Adjust path if needed

export default function NavbarLogo() {
  return (
    <div className="flex items-center">
      <SinaxeLogo className="h-8 w-8" />
      <span
        className="ml-2 text-slate-900"
        style={{
          fontFamily: '"manifold", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
          fontWeight: 900,
          fontSize: "2rem",
          letterSpacing: "0.03em",
          lineHeight: 1,
        }}
      >
        Sinaxe
      </span>
    </div>
  );
}