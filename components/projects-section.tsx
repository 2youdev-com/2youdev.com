'use client';

import { featuredProjects, projectsContent } from '@/lib/data';
import { useLang } from '@/lib/lang-context';

export default function ProjectsSection() {
  const { lang } = useLang();
  const c = projectsContent[lang];
  const projects = featuredProjects[lang];

  return (
    <section id="projects" className="px-6 py-20 scroll-mt-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow">{c.eyebrow}</p>
            <h2 className="section-title">{c.title}</h2>
            <p className="section-copy">{c.p}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className={`h-52 border-b border-white/10 p-6 ${index % 3 === 0 ? 'bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))]' : index % 3 === 1 ? 'bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.24),transparent_50%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))]' : 'bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))]'}`}>
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-black/10 p-5 backdrop-blur-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-300/80">{project.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="h-2 rounded-full bg-blue-400" />
                    <span className="h-2 rounded-full bg-cyan-300" />
                    <span className="h-2 rounded-full bg-violet-400" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-base leading-7 text-slate-300">{project.summary}</p>
                <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-sm text-slate-400">{c.impactLabel}</p>
                  <p className="mt-2 text-base font-medium text-white">{project.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
