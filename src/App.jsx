import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400 text-black font-bold">U</span>
          <span className="text-sm font-semibold tracking-tight">Flux UGC</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#showcase" className="hover:text-white">Showcase</a>
          <a href="#get-started" className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-medium backdrop-blur hover:bg-white/10">Get started</a>
        </nav>
      </header>

      <main>
        <Hero />
        <FeatureGrid />
        <Showcase />
        <CTA />
      </main>
    </div>
  );
}
