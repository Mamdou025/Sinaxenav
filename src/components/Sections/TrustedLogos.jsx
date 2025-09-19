import React from "react";

export default function TrustedLogos() {
  return (
    <section className="py-8">
      <h3 className="text-center text-slate-500 font-semibold mb-6">Trusted by teams at</h3>
      <div className="flex flex-wrap justify-center gap-8 grayscale opacity-80">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="TV" className="h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8" />
      </div>
    </section>
  );
}