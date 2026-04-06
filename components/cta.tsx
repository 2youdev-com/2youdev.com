'use client';

import Link from 'next/link';
import { trustPoints, ctaContent } from '@/lib/data';
import { useLang } from '@/lib/lang-context';

export default function CTA() {
  const { lang } = useLang();
  const c = ctaContent[lang];
  const points = trustPoints[lang];

  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.88),rgba(30,64,175,0.22))] p-8 md:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="section-eyebrow">{c.eyebrow}</p>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-copy">{c.p}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              {c.cta1}
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              {c.cta2}
            </Link>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 backdrop-blur-sm">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{c.whyLabel}</p>
          <ul className="mt-6 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-200">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
