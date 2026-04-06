'use client';

import Link from 'next/link';
import BackgroundAnimation from '@/components/background-animation';
import { stats, heroContent } from '@/lib/data';
import { useLang } from '@/lib/lang-context';

export default function Hero() {
  const { lang } = useLang();
  const s = stats[lang];
  const h = heroContent[lang];

  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pb-20 pt-16 scroll-mt-28 lg:px-8 lg:pb-28 lg:pt-24">
      <BackgroundAnimation />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative z-10 max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
            {h.badge}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {h.h1}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {h.p}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-slate-100"
            >
              {h.cta1}
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {h.cta2}
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {s.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 animate-fade-up-delayed">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/90 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">{h.previewLabel}</p>
                  <p className="text-lg font-semibold text-white">{h.previewTitle}</p>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  {h.previewBadge}
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(15,23,42,0.2),rgba(34,211,238,0.12))] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-blue-200/80">{h.previewHeroLabel}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{h.previewHeroTitle}</h3>
                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">{h.previewDesignLabel}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{h.previewDesignTitle}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">{h.previewDevLabel}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{h.previewDevTitle}</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{h.previewScoreLabel}</span>
                    <span>{h.previewScoreValue}</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="h-3 flex-1 rounded-full bg-blue-400" />
                    <span className="h-3 flex-1 rounded-full bg-cyan-300" />
                    <span className="h-3 flex-1 rounded-full bg-violet-400" />
                    <span className="h-3 flex-1 rounded-full bg-emerald-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
