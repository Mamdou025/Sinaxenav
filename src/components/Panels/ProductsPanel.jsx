import React from "react";

export default function ProductsPanel() {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Products</h3>
      <ul>
        <li className="mb-1">Payments</li>
        <li className="mb-1">Checkout</li>
        <li className="mb-1">Elements</li>
        <li className="mb-1">Terminal</li>
        <li className="mb-1">Radar</li>
        <li className="mb-1">Billing</li>
      </ul>
    </div>
  );
}