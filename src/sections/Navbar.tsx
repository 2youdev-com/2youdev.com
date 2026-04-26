import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'AI Operating Systems', href: '#ai-systems' },
  { label: 'Industries', href: '#industries' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname !== '/') return;

      let currentSection = '#home';

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        /*
          مهم:
          هنا مش بنشترط إن السكشن يكون لسه ظاهر بالكامل.
          أي سكشن موجود في النافبار وعدّى من فوق نقطة 160px
          يبقى هو آخر active section.

          كده لو دخلت سكشن مش موجود في النافبار،
          المؤشر هيفضل على آخر سكشن موجود في النافبار
          لحد ما توصل للسكشن اللي بعده.
        */
        if (rect.top <= 160) {
          currentSection = link.href;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);

    if (href === '#home') {
      if (location.pathname !== '/') {
        navigate('/');

        window.setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      return;
    }

    if (location.pathname !== '/') {
      navigate(`/${href}`);

      window.setTimeout(() => {
        const el = document.querySelector(href);

        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 150);

      return;
    }

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(6,11,26,0.9)] backdrop-blur-xl border-b border-purple-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2 shrink-0"
          >
            <img src="/logo.png" alt="2YouDev" className="h-8 w-auto" />

            <span className="text-white font-semibold text-lg tracking-tight">
              2YouDev
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === '/' && activeSection === link.href;

              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-1 py-2 text-xs lg:text-sm font-medium transition-colors duration-200 tracking-wide whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-x-[-8px] inset-y-[5px] rounded-full bg-purple-50"
                    />
                  )}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-line"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute left-1/2 -bottom-1 h-[2px] w-6 -translate-x-1/2 rounded-full btn-gradient shadow-[0_0_14px_rgba(45,91,255,0.8)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="px-5 py-2.5 text-sm font-medium text-white btn-gradient rounded-lg hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden grid transition-all duration-200 ease-out bg-[rgba(6,11,26,0.98)] backdrop-blur-xl ${
          mobileOpen ? 'border-t border-purple-100' : ''
        }`}
        style={{
          gridTemplateRows: mobileOpen ? '1fr' : '0fr',
          willChange: 'grid-template-rows',
        }}
      >
        <div className="overflow-hidden">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === '/' && activeSection === link.href;

                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className={`relative block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-white bg-purple-50'
                        : 'text-slate-300 hover:text-white hover:bg-purple-50'
                    }`}
                  >
                    <span>{link.label}</span>

                    {isActive && (
                      <span
                        className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-purple shadow-[0_0_12px_rgba(45,91,255,0.9)]"
                      />
                    )}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-3 px-5 py-2.5 text-sm font-medium text-white btn-gradient rounded-lg"
              >
                Book a Call
              </button>
            </div>
        </div>
      </div>
    </motion.nav>
  );
}