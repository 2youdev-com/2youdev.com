import { FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Website Development', href: '#services' },
      { label: 'Mobile App Development', href: '#services' },
      { label: 'Custom Software Development', href: '#services' },
      { label: 'Business Systems Development', href: '#services' },
      { label: 'AI Integration', href: '#services' },
      { label: 'Intelligent Automation', href: '#services' },
    ],
  },
  {
    title: 'AI Operating Systems',
    links: [
      { label: 'AI Integration', href: '#ai-systems' },
      { label: 'Business Systems', href: '#ai-systems' },
      { label: 'Workflow Automation', href: '#ai-systems' },
      { label: 'AI Document Processing', href: '#ai-systems' },
      { label: 'Knowledge Systems', href: '#ai-systems' },
      { label: 'R&D & Prototyping', href: '#ai-systems' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Logistics & Supply Chain', href: '#industries' },
      { label: 'Financial Services', href: '#industries' },
      { label: 'Retail & E-Commerce', href: '#industries' },
      { label: 'Healthcare', href: '#industries' },
      { label: 'Real Estate', href: '#industries' },
      { label: 'Education', href: '#industries' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#blog' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/2youdev/',
    Icon: FiLinkedin,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1bMKSAiGcL/?mibextid=wwXIfr',
    Icon: FiFacebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/2you.dev?igsh=MThpMnRjOTFtbzZoeg%3D%3D&utm_source=qr',
    Icon: FiInstagram,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@2you.dev?_r=1&_t=ZS-95o611pGdyS',
    Icon: FaTiktok,
  },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return;

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#050918] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="2YouDev" className="h-8 w-auto" />
              <span className="text-white font-semibold text-lg">2YouDev</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              We build software and AI operating systems that make businesses run better.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
                {col.title}
              </h4>

              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Let's Talk Column */}
          <div>
            <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
              Let's Talk
            </h4>

            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:2youdev@gmail.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  2youdev@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:0000000"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                >
                  00000000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-100 pt-6">
          <p className="text-xs text-slate-500 text-center">
            &copy; 2026 2YouDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}