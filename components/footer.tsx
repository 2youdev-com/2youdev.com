'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navLinks, footerContent, contactMethods } from '@/lib/data';
import { useLang } from '@/lib/lang-context';

export default function Footer() {
  const { lang } = useLang();
  const c = footerContent[lang];
  const links = navLinks[lang];

  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="2youdev logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-white">2youdev</p>
              <p className="text-sm text-slate-400">{c.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{c.p}</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-3">
            <a href="mailto:2youdev@gmail.com" aria-label="Email" className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://www.instagram.com/2you.dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/2you-dev-a41418401" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574439557855" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:bg-white/5 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
