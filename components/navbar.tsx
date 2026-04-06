'use client';

import Link from 'next/link';
import { useEffect, useState, useRef, useCallback } from 'react';
import { navLinks } from '@/lib/data';
import { useLang } from '@/lib/lang-context';

export default function Navbar() {
  const { lang, setLang, isRtl } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const links = navLinks[lang];

  const updatePill = useCallback(() => {
    const el = linkRefs.current.get(active);
    const nav = navRef.current;
    if (el && nav) {
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
      });
    }
  }, [active]);

  useEffect(() => {
    updatePill();
  }, [active, lang, updatePill]);

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;

      let currentId = sectionIds[0];
      for (const section of sections) {
        if (section.offsetTop <= scrollY) {
          currentId = section.id;
        }
      }
      setActive(`#${currentId}`);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  // Update html dir attribute when lang changes
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const bookCallLabel = lang === 'ar' ? 'احجز مكالمة مشروع' : 'Book a project call';

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.18)]">
            2Y
          </div>
          <div>
            <p className="text-base font-semibold tracking-wide text-white">2youdev</p>
            <p className="text-xs text-slate-400">
              {lang === 'ar' ? 'استوديو تطوير ويب متميز' : 'Premium web development studio'}
            </p>
          </div>
        </Link>

        <nav ref={navRef} className="relative hidden items-center gap-2 md:flex">
          {pillStyle && (
            <span
              className="absolute top-0 h-full rounded-full bg-white/10 transition-all duration-300 ease-in-out"
              style={{ left: pillStyle.left, width: pillStyle.width }}
            />
          )}
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => { if (el) linkRefs.current.set(link.href, el); }}
                className={`relative z-10 rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'عربي' : 'English'}
          </button>

          <Link
            href="#contact"
            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-100 transition hover:border-blue-300/50 hover:bg-blue-500/20"
          >
            {bookCallLabel}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  active === link.href
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setOpen(false); }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-300 text-start"
            >
              {lang === 'en' ? 'عربي 🌐' : 'English 🌐'}
            </button>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-100"
            >
              {bookCallLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
