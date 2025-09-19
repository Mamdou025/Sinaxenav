import React from "react";

export default function DevelopersPanel() {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Developers</h3>
      <ul>
        <li className="mb-1">API Reference</li>
        <li className="mb-1">Quickstart</li>
        <li className="mb-1">Webhooks</li>
        <li className="mb-1">CLI</li>
        <li className="mb-1">Mobile SDKs</li>
      </ul>
    </div>
  );
}