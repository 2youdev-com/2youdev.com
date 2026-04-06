'use client';

import { testimonials, testimonialsContent } from '@/lib/data';
import { useLang } from '@/lib/lang-context';

export default function Testimonials() {
  const { lang } = useLang();
  const c = testimonialsContent[lang];
  const items = testimonials[lang];

  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{c.eyebrow}</p>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-copy">{c.p}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.name} className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              <p className="text-lg leading-8 text-slate-200">"{item.quote}"</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
