import React from "react";

export default function SinaxeLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img 
      src="/src/assets/my-logo2.png" 
      alt="Sinaxe" 
      className={className}
    />
  );
}