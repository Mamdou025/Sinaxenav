import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Sinaxe?</h2>
        <p className="text-slate-600 text-lg mb-6">
          We’re a team of passionate engineers, data scientists, and IT experts dedicated to helping you succeed. From startups to enterprises, we deliver solutions that are secure, scalable, and tailored to your needs.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
          <div>
            <div className="text-3xl font-extrabold text-blue-600">99.99%</div>
            <div className="text-slate-500">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-600">24/7</div>
            <div className="text-slate-500">Expert Support</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-600">1000+</div>
            <div className="text-slate-500">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}