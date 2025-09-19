import React from "react";

export default function ContactSection() {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-10 shadow text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-slate-600 mb-8">
          Book a free consultation or send us a message. Our team will get back to you within 24 hours.
        </p>
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-slate-700 font-bold mb-1">Name</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-slate-700 font-bold mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-slate-700 font-bold mb-1">Message</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="How can we help?"></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-3 text-white font-bold text-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}