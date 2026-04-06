'use client';

import { processSteps, processContent } from '@/lib/data';
import { useLang } from '@/lib/lang-context';

export default function ProcessSection() {
  const { lang } = useLang();
  const c = processContent[lang];
  const steps = processSteps[lang];

  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{c.eyebrow}</p>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-copy">{c.p}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {steps.map((item) => (
            <article key={item.step} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 text-lg font-semibold text-blue-100">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
