import React from "react";

export default function NavbarCaret({ caretX = 0, visible = false }) {
  return (
    <div
      className="absolute bottom-0 left-0 h-1 w-full pointer-events-none"
      style={{ height: "4px" }}
    >
      {visible && (
        <div
          className="bg-blue-600 rounded-full transition-all duration-300"
          style={{
            position: "absolute",
            left: caretX - 16,
            width: 32,
            height: 4,
            transition: "left 0.3s cubic-bezier(.4,0,.2,1)",
          }}
        />
      )}
    </div>
  );
}