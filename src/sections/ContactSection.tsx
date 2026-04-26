import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiFileText,
  FiLock,
  FiMail,
  FiMessageCircle,
  FiMessageSquare,
  FiSend,
  FiUser,
  FiAlertCircle,
} from 'react-icons/fi';

const projectTypes = [
  'Website Development',
  'Mobile App Development',
  'Custom Software Development',
  'AI Operating System',
  'Business Systems Development',
  'AI Integration',
];

const nextSteps = [
  'We review your request',
  'We schedule a discovery call',
  'We propose the best solution',
];

const faqs = [
  {
    q: 'What is the cost of building custom software?',
    a: 'It depends on the scope, complexity, and features. We provide a tailored estimate after understanding your needs.',
  },
  {
    q: 'How long does a project take?',
    a: 'Timelines vary, but most projects range from a few weeks to a few months.',
  },
  {
    q: 'Can you integrate AI into existing systems?',
    a: 'Yes. We specialize in adding AI capabilities without requiring a full rebuild.',
  },
  {
    q: 'Do you work with startups or only large companies?',
    a: 'We work with startups, SMEs, and enterprises.',
  },
];

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const inputClass =
  'h-14 w-full rounded-xl border border-purple-100 bg-[rgba(6,11,26,0.72)] pl-12 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-purple-300 focus:shadow-[0_0_0_4px_rgba(45,91,255,0.12)]';

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company || 'Not provided',
          project_type: form.projectType || 'Not selected',
          message: form.message,
          to_email: '2youdev@gmail.com',
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus('success');
      setForm({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 3500);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 3500);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-navy-900 py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-[260px] w-[260px] rounded-full bg-purple-50 blur-[110px]" />
        <div className="absolute right-[10%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-purple-50 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mb-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_320px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-purple">
              <span className="h-2 w-2 rounded-full bg-purple shadow-[0_0_16px_rgba(45,91,255,0.8)]" />
              Contact Us
            </p>

            <h2 className="mb-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[56px]">
              Let&apos;s Build the Right
              <br />
              System for Your Business
            </h2>

            <p className="max-w-3xl text-base leading-relaxed text-slate-400">
              Whether you need a website, a custom platform, or an AI operating
              system — we help you design and build the right solution based on
              your business goals.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full lg:justify-self-end"
          >
            <div className="rounded-2xl border border-purple-100 bg-[rgba(18,22,58,0.4)] p-6 transition-all duration-300 hover:border-purple-300">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-50">
                  <FiClock className="text-purple" size={30} />
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-purple">
                    Response Time
                  </p>
                  <p className="text-base font-medium leading-snug text-white">
                    We usually reply
                    <br />
                    within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.18fr_0.94fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="rounded-2xl border border-purple-100 bg-[rgba(18,22,58,0.4)] p-6 transition-all duration-300 hover:border-purple-300 sm:p-8"
          >
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                <FiUser className="text-purple" size={22} />
              </div>

              <div>
                <h3 className="mb-1 text-2xl font-semibold text-white">
                  Send Us a Message
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Tell us about your project and we&apos;ll get back to you.
                </p>
              </div>
            </div>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="mb-5 flex items-center gap-3 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3"
                >
                  <FiCheckCircle className="text-purple" size={20} />
                  <span className="text-sm text-white">
                    Your message has been sent successfully.
                  </span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="mb-5 flex items-center gap-3 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3"
                >
                  <FiAlertCircle className="text-red-400" size={20} />
                  <span className="text-sm text-white">
                    Message could not be sent. Please check the required fields or try again.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit}>
              <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    Full Name <span className="text-purple">*</span>
                  </label>

                  <div className="relative">
                    <FiUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-purple"
                      size={18}
                    />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    Email <span className="text-purple">*</span>
                  </label>

                  <div className="relative">
                    <FiMail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-purple"
                      size={18}
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    Company
                  </label>

                  <div className="relative">
                    <FiBriefcase
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-purple"
                      size={18}
                    />
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    Project Type
                  </label>

                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="h-14 w-full rounded-xl border border-purple-100 bg-[rgba(6,11,26,0.72)] px-4 text-sm text-white outline-none transition-all duration-200 focus:border-purple-300 focus:shadow-[0_0_0_4px_rgba(45,91,255,0.12)]"
                  >
                    <option
                      value=""
                      className="bg-navy-900 text-slate-500"
                    >
                      Select project type
                    </option>

                    {projectTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-navy-900 text-white"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  Brief Description <span className="text-purple">*</span>
                </label>

                <div className="relative">
                  <FiFileText
                    className="absolute left-4 top-5 text-purple"
                    size={18}
                  />
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project, challenge, or goal..."
                    className="w-full resize-none rounded-xl border border-purple-100 bg-[rgba(6,11,26,0.72)] py-4 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-purple-300 focus:shadow-[0_0_0_4px_rgba(45,91,255,0.12)]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gradient flex h-14 w-full items-center justify-center gap-2 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:scale-[1.01] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <FiSend size={16} />
              </button>

              <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
                <FiLock size={14} />
                No spam. Just a clear reply about your project.
              </p>
            </form>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="rounded-2xl border border-purple-100 bg-[rgba(18,22,58,0.4)] p-6 transition-all duration-300 hover:border-purple-300 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
                  <FiMessageSquare className="text-purple" size={20} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Contact Options
                </h3>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:2youdev@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50 transition-all duration-200 group-hover:bg-purple-100">
                    <FiMail className="text-purple" size={22} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                      Email
                    </p>

                    <p className="text-base text-slate-400 transition-colors duration-200 group-hover:text-white">
                      2youdev@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/201069424220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50 transition-all duration-200 group-hover:bg-purple-100">
                    <FiMessageCircle className="text-purple" size={22} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                      WhatsApp
                    </p>

                    <p className="text-base text-slate-400 transition-colors duration-200 group-hover:text-white">
                      Start a direct conversation
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="relative overflow-hidden rounded-2xl border border-purple-100 bg-[rgba(18,22,58,0.4)] p-6 transition-all duration-300 hover:border-purple-300 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
                  <FiArrowRight className="text-purple" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  What Happens Next
                </h3>
              </div>

              <div className="relative z-10 space-y-5">
                {nextSteps.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className="btn-gradient flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {index !== nextSteps.length - 1 && (
                        <div className="mt-1 h-8 w-px bg-gradient-to-b from-purple-light to-transparent" />
                      )}
                    </div>

                    <p className="pt-1 text-base leading-relaxed text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 opacity-70">
                <svg
                  viewBox="0 0 800 210"
                  className="h-auto w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 150C60 110 120 110 180 150C240 190 300 190 360 150C420 110 480 110 540 150C600 190 660 190 720 145C752 123 776 106 800 96"
                    stroke="url(#line1)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="line1"
                      x1="0"
                      y1="0"
                      x2="800"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2D5BFF" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#6EA8FF" />
                      <stop offset="1" stopColor="#2D5BFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-6 rounded-2xl border border-purple-100 bg-[rgba(18,22,58,0.4)] p-6 transition-all duration-300 hover:border-purple-300 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50">
              <FiChevronDown className="text-purple" size={20} />
            </div>

            <h3 className="text-2xl font-semibold text-white">
              Common Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-xl border border-purple-100 bg-[rgba(6,11,26,0.72)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-white">
                      {faq.q}
                    </span>

                    <FiChevronDown
                      size={18}
                      className={`shrink-0 text-purple transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className="grid transition-all duration-200 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-sm leading-relaxed text-slate-400">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}