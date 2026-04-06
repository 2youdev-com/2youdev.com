'use client';

import { services, servicesContent } from '@/lib/data';
import { useLang } from '@/lib/lang-context';

export default function ServicesSection() {
  const { lang } = useLang();
  const c = servicesContent[lang];
  const s = services[lang];

  return (
    <section id="services" className="px-6 py-20 scroll-mt-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-eyebrow">{c.eyebrow}</p>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-copy">{c.p}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {s.map((service) => (
            <article key={service.title} className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]">
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                {c.badge}
              </div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
