import React from "react";

export default function HeroSection() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
        Supercharge Your Business with <span className="text-blue-600">AI, Data & IT</span>
      </h1>
      <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        Sinaxe delivers next-gen analytics, automation, and cloud solutions to help you scale faster, smarter, and more securely.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <a
          href="#contact"
          className="rounded-xl bg-blue-600 px-8 py-3 text-white font-bold text-lg shadow hover:bg-blue-700 transition"
        >
          Get Started
        </a>
        <a
          href="#features"
          className="rounded-xl border border-blue-600 px-8 py-3 text-blue-600 font-bold text-lg hover:bg-blue-50 transition"
        >
          See Features
        </a>
      </div>
      <img
        src="https://assets-global.website-files.com/65e5d2e7e6e7b7e7d7e7e7e7/65e5d2e7e6e7b7e7d7e7e7e8_dashboard-hero.png"
        alt="Dashboard preview"
        className="mx-auto rounded-2xl shadow-lg w-full max-w-3xl"
        style={{ background: "#f8fafc" }}
      />
    </section>
  );
}