import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/5 to-transparent p-10 text-center backdrop-blur">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Turn ideas into scroll‑stopping ads
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Start free. No credit card required. Upgrade only when you’re ready to scale.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-400/10 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-400/20"
          >
            Create your first ad
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Explore features
          </a>
        </div>
        <p className="mt-4 text-xs text-white/60">Free plan includes 5 exports per month • No watermark</p>
      </div>
      <footer className="mx-auto mt-10 max-w-5xl text-center text-xs text-white/50">
        © {new Date().getFullYear()} Flux UGC. All rights reserved.
      </footer>
    </section>
  );
}
