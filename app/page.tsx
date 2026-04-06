'use client';

import Link from 'next/link';
import Hero from '@/components/hero';
import ServicesSection from '@/components/services-section';
import ProjectsSection from '@/components/projects-section';
import ProcessSection from '@/components/process-section';
import Testimonials from '@/components/testimonials';
import CTA from '@/components/cta';
import { aboutPillars, aboutContent, contactMethods, contactContent } from '@/lib/data';
import { useLang } from '@/lib/lang-context';

export default function HomePage() {
  const { lang } = useLang();
  const ab = aboutContent[lang];
  const pillars = aboutPillars[lang];
  const cc = contactContent[lang];

  return (
    <>
      <Hero />

      <section id="about" className="px-6 py-20 scroll-mt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="section-eyebrow">{ab.eyebrow}</p>
              <h2 className="section-title">{ab.title}</h2>
              <p className="section-copy">{ab.p1}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{ab.p2}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{ab.pillarsLabel}</p>
              <div className="mt-8 space-y-6">
                {pillars.map((pillar, index) => (
                  <div key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-sm font-semibold text-blue-100">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                        <p className="mt-2 text-slate-300">{pillar.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {ab.points.map((point) => (
              <div key={point} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-lg text-slate-200">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <Testimonials />
      <CTA />

      <section id="contact" className="px-6 py-20 scroll-mt-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <section>
            <p className="section-eyebrow">{cc.eyebrow}</p>
            <h2 className="section-title">{cc.title}</h2>
            <p className="section-copy">{cc.p}</p>

            <div className="mt-10 space-y-4">
              {contactMethods.map((item) => (
                <Link
                  key={item.value}
                  href={item.href}
                  className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.07]"
                >
                  <div>
                    <p className="text-sm text-slate-400">{item.label[lang]}</p>
                    <p className="mt-1 text-lg font-medium text-white">{item.value}</p>
                  </div>
                  <span className="text-slate-400">↗</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{cc.formLabel}</p>
            <div className="mt-8 grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">{cc.nameLabel}</label>
                <input
                  id="name"
                  type="text"
                  placeholder={cc.namePlaceholder}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">{cc.emailLabel}</label>
                <input
                  id="email"
                  type="email"
                  placeholder={cc.emailPlaceholder}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>
              <div>
                <label htmlFor="business" className="mb-2 block text-sm text-slate-300">{cc.businessLabel}</label>
                <input
                  id="business"
                  type="text"
                  placeholder={cc.businessPlaceholder}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>
              <div>
                <label htmlFor="details" className="mb-2 block text-sm text-slate-300">{cc.detailsLabel}</label>
                <textarea
                  id="details"
                  rows={6}
                  placeholder={cc.detailsPlaceholder}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/40"
                />
              </div>
              <button
                type="button"
                className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                {cc.submitBtn}
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
