import React from 'react';
import { Rocket, Sparkles, Video, Users } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Performance presets',
    desc: 'Proven hooks, cuts, captions, and CTAs tuned for ROAS across TikTok, Reels, and Shorts.'
  },
  {
    icon: Sparkles,
    title: 'AI assist',
    desc: 'Generate scripts, voiceovers, and visual directions that feel native to creator content.'
  },
  {
    icon: Video,
    title: 'Instant variations',
    desc: 'Auto‑remix formats, aspect ratios, and colorways to test faster and scale winners.'
  },
  {
    icon: Users,
    title: 'Creator workflow',
    desc: 'Share brief links, collect takes, and approve edits in one streamlined flow.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative w-full bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Built for modern UGC ad teams
          </h2>
          <p className="mt-3 text-white/70">
            Everything you need to concept, cut, and convert — from first hook to final export.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-400/20" />
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
