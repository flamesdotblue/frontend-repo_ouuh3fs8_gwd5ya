import React from 'react';

const items = [
  {
    title: 'Product demo with bold captions',
    tag: 'Direct response',
    gradient: 'from-emerald-400/20 via-emerald-400/5 to-transparent'
  },
  {
    title: 'Creator POV unboxing sequence',
    tag: 'Storytelling',
    gradient: 'from-fuchsia-400/20 via-fuchsia-400/5 to-transparent'
  },
  {
    title: 'Before/after transformation reel',
    tag: 'Social proof',
    gradient: 'from-cyan-400/20 via-cyan-400/5 to-transparent'
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative w-full bg-gradient-to-b from-black to-[#07090B] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Real ad formats that convert
          </h2>
          <p className="mt-3 text-white/70">
            Explore winning templates adapted from top‑performing UGC creatives.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
              {/* Mock video frame */}
              <div className="aspect-[9/16] w-full overflow-hidden rounded-xl border border-white/10 bg-black/60">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="animate-pulse rounded-full border border-white/20 p-4 text-xs text-white/60">
                    Preview
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">{card.title}</h3>
                  <p className="mt-1 text-xs text-white/60">{card.tag}</p>
                </div>
                <a
                  href="#get-started"
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium hover:bg-white/10"
                >
                  Use template
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
