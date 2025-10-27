import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays for readability; do not block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_60px_rgba(0,0,0,0.5)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-24 sm:pt-36 md:pt-40 lg:pt-48">
        <div className="pointer-events-none text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            New: Interactive UGC ad builder
          </span>
          <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Launch thumb‑stopping UGC ads in minutes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Craft high‑performing, creator‑style ads with motion presets, voiceover prompts, and instant variations. Designed for modern brands and growth teams.
          </p>

          <div className="pointer-events-auto mx-auto mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-400/10 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-400/20"
            >
              Get started free
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              See live examples
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="pointer-events-none mt-16 grid w-full grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {['DTC+','GrowthLab','PixelWorks','NovaAds','Brightly','LaunchKit'].map((brand) => (
            <div key={brand} className="text-center text-xs uppercase tracking-widest text-white/60">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
