import type { Metadata } from 'next';
import { Inter, Manrope, Cairo } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { LangProvider } from '@/lib/lang-context';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: '2youdev | Premium Web Development Studio',
  description:
    '2youdev builds premium websites for cafés, restaurants, startups, educational platforms, teachers, and modern businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} ${cairo.variable} bg-slate-950 text-white antialiased`}>
        <LangProvider>
          <div className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#020817_45%,#030c1d_100%)]">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
