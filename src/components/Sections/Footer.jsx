import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-100 text-center text-slate-500 mt-12">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Sinaxe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}