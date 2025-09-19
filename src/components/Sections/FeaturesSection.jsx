import React from "react";

export default function FeaturesSection() {
  return (
    <section className="py-20" id="features">
      <h2 className="text-4xl font-bold mb-8 text-center">Everything you need to grow</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow hover:shadow-lg transition">
          <div className="mb-4 text-blue-600">
            {/* Example icon */}
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2v20m10-10H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">AI-Powered Analytics</h3>
          <p className="text-slate-600">
            Unlock actionable insights and automate reporting with our advanced AI analytics platform.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow hover:shadow-lg transition">
          <div className="mb-4 text-blue-600">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Cloud & IT Solutions</h3>
          <p className="text-slate-600">
            Secure, scalable infrastructure and expert IT consulting to keep your business running 24/7.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow hover:shadow-lg transition">
          <div className="mb-4 text-blue-600">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Automation & Integrations</h3>
          <p className="text-slate-600">
            Connect your favorite tools and automate workflows to save time and boost productivity.
          </p>
        </div>
      </div>
    </section>
  );
}