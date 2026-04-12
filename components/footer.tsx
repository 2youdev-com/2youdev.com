'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navLinks, footerContent } from '@/lib/data';
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
              className="h-10 w-10 rounded-2xl object-contain"
            />
            <div>
              <p className="font-semibold text-white">2youdev</p>
              <p className="text-sm text-slate-400">{c.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">{c.p}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
