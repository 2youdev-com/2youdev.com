import { Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiX,
  FiChevronDown,
  FiZap,
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiLayers,
  FiTool,
} from 'react-icons/fi';
import { services } from '../data/services';

type ServiceFeature = {
  title: string;
  desc: string;
};

const approaches = [
  {
    num: '01',
    title: 'Custom platforms',
    desc: 'Tailored software platforms built specifically around your business workflows, teams, and operational needs.',
  },
  {
    num: '02',
    title: 'AI integration',
    desc: 'Practical AI capabilities added to your existing systems to improve automation, search, analysis, and decision-making.',
  },
  {
    num: '03',
    title: 'Workflow automation',
    desc: 'Automation that reduces repetitive work, improves speed, and helps teams execute with less manual effort.',
  },
  {
    num: '04',
    title: 'Business systems',
    desc: 'Operational systems that connect your teams, data, tools, and processes in one structured environment.',
  },
];

const outcomes = [
  {
    icon: FiTarget,
    title: 'Built around real workflows',
    desc: 'We design systems around how your business actually operates.',
  },
  {
    icon: FiZap,
    title: 'Less manual effort',
    desc: 'Automation reduces repetitive work and speeds up execution.',
  },
  {
    icon: FiTrendingUp,
    title: 'Measurable business value',
    desc: 'Every system is tied to cost, time, clarity, or operational impact.',
  },
  {
    icon: FiShield,
    title: 'Scalable long-term systems',
    desc: 'We build with structure, reliability, and future growth in mind.',
  },
];

const serviceDetails: Record<string, ServiceFeature[]> = {
  'Website Development': [
    {
      title: 'Corporate websites',
      desc: 'Professional websites that present your business clearly and build trust.',
    },
    {
      title: 'Landing pages',
      desc: 'Focused pages designed to increase inquiries, bookings, or conversions.',
    },
    {
      title: 'Performance optimization',
      desc: 'Fast, responsive experiences across all screen sizes and devices.',
    },
    {
      title: 'Content structure',
      desc: 'Clear sectioning and messaging that help users understand your value quickly.',
    },
  ],

  'Mobile App Development': [
    {
      title: 'iOS and Android apps',
      desc: 'Apps built for usability, reliability, and real-world business use cases.',
    },
    {
      title: 'Customer-facing experiences',
      desc: 'Applications that improve customer interaction and service access.',
    },
    {
      title: 'Operational apps',
      desc: 'Mobile tools for internal teams, logistics, and workflow execution.',
    },
    {
      title: 'Cross-platform development',
      desc: 'Efficient development for multiple platforms with consistent quality.',
    },
  ],

  'Custom Software Development': [
    {
      title: 'Admin dashboards',
      desc: 'Centralized interfaces for teams, reports, and operational monitoring.',
    },
    {
      title: 'Portals and internal tools',
      desc: 'Software built specifically for employees, managers, or business partners.',
    },
    {
      title: 'Workflow-based systems',
      desc: 'Platforms designed around how your business actually works.',
    },
    {
      title: 'Scalable architecture',
      desc: 'Systems structured for future expansion and easier maintenance.',
    },
  ],

  'Business Systems Development': [
    {
      title: 'Process organization',
      desc: 'Systems that reduce confusion and structure operations clearly.',
    },
    {
      title: 'Cross-team coordination',
      desc: 'Better visibility and smoother execution across departments.',
    },
    {
      title: 'Approvals and workflows',
      desc: 'More controlled operational flow with fewer manual bottlenecks.',
    },
    {
      title: 'Operational reporting',
      desc: 'Better insight into business performance and internal activity.',
    },
  ],

  'AI Operating Systems': [
    {
      title: 'Knowledge systems',
      desc: 'AI systems that help teams retrieve and use internal knowledge faster.',
    },
    {
      title: 'Decision support',
      desc: 'Smart systems that assist with analysis, insights, and action recommendations.',
    },
    {
      title: 'Task execution',
      desc: 'AI-powered workflows that reduce manual effort and speed up operations.',
    },
    {
      title: 'Business intelligence support',
      desc: 'Systems that transform data into more practical operational value.',
    },
  ],

  'AI Integration for Existing Systems': [
    {
      title: 'AI assistants',
      desc: 'Smart assistants embedded into your current software and workflows.',
    },
    {
      title: 'Search and retrieval',
      desc: 'Faster access to documents, records, and business information.',
    },
    {
      title: 'Classification and summarization',
      desc: 'AI tools that save time in reviewing and organizing data.',
    },
    {
      title: 'Low-friction integration',
      desc: 'AI added without forcing a full system rebuild.',
    },
  ],

  'AI Integration': [
    {
      title: 'AI assistants',
      desc: 'Smart assistants embedded into your current software and workflows.',
    },
    {
      title: 'Search and retrieval',
      desc: 'Faster access to documents, records, and business information.',
    },
    {
      title: 'Classification and summarization',
      desc: 'AI tools that save time in reviewing and organizing data.',
    },
    {
      title: 'Low-friction integration',
      desc: 'AI added without forcing a full system rebuild.',
    },
  ],

  'Intelligent Automation': [
    {
      title: 'Task automation',
      desc: 'Automation for repeated steps that slow teams down.',
    },
    {
      title: 'Approval flows',
      desc: 'Clear and automated routing for internal requests and processes.',
    },
    {
      title: 'Document handling',
      desc: 'Reduce manual work in forms, files, and recurring document processes.',
    },
    {
      title: 'Notifications and reports',
      desc: 'Automated updates and reporting that keep teams informed.',
    },
  ],

  'R&D and Prototyping': [
    {
      title: 'Idea validation',
      desc: 'Quick testing of product or system concepts before full implementation.',
    },
    {
      title: 'Prototype design',
      desc: 'Early interactive versions that help assess usability and direction.',
    },
    {
      title: 'AI experimentation',
      desc: 'Practical exploration of AI opportunities aligned with business value.',
    },
    {
      title: 'Risk reduction',
      desc: 'Test before investing heavily in development and rollout.',
    },
  ],
};

const process = [
  {
    step: '01',
    title: 'Identify Problems',
    desc: 'We analyze your workflows, bottlenecks, and inefficiencies.',
  },
  {
    step: '02',
    title: 'Design the System',
    desc: 'We define the right architecture, integrations, and automation opportunities.',
  },
  {
    step: '03',
    title: 'Build and Integrate',
    desc: 'We develop the system and connect it with your existing tools.',
  },
  {
    step: '04',
    title: 'Optimize and Improve',
    desc: 'We continuously improve performance, usability, and business value.',
  },
];

const whyUs = [
  'We focus on measurable outcomes',
  'We combine software and AI in one system',
  'We build for real operations, not demos',
  'We reduce cost, time, and manual effort',
];

const comparisonRows = [
  ['Built for your workflows', 'Generic features'],
  ['Scalable with your operations', 'Limited scalability'],
  ['Integrated with your tools', 'Often disconnected'],
  ['Higher ROI long-term', 'Lower upfront cost'],
];

const faqs = [
  {
    q: 'What is the difference between custom software and SaaS?',
    a: 'Custom software is built specifically for your business workflows, while SaaS tools are generic and may not fully match your needs.',
  },
  {
    q: 'How long does it take to build a system?',
    a: 'Most projects take between 1 to 3 weeks depending on complexity.',
  },
  {
    q: 'Can you integrate AI into existing systems?',
    a: 'Yes. We specialize in adding AI capabilities without requiring a full rebuild.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We work with startups, SMEs, and enterprises across multiple industries.',
  },
];

const sectionWrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12';
const sectionSpacing = 'py-24 lg:py-28';

const cardClass =
  'group rounded-2xl border border-purple-100 bg-[rgba(18,22,58,0.4)] p-6 transition-all duration-300 hover:border-purple-300 hover:shadow-[0_8px_32px_rgba(45,91,255,0.14)]';

const iconClass =
  'mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50';

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ServicesPage() {
  const navigate = useNavigate();

  const [openApproach, setOpenApproach] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] =
    useState<(typeof services)[number] | null>(null);

  const goToContact = () => {
    navigate('/');

    window.setTimeout(() => {
      const contact = document.querySelector('#contact');

      if (contact) {
        contact.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 150);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  const selectedDetails = selectedService
    ? serviceDetails[selectedService.title] || []
    : [];

  return (
    <div className="min-h-screen overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[8%] top-[10%] h-[360px] w-[360px] rounded-full bg-purple-50 blur-[130px]" />
        <div className="absolute right-[6%] top-[30%] h-[340px] w-[340px] rounded-full bg-purple-50 blur-[140px]" />
        <div className="absolute left-[35%] bottom-[8%] h-[260px] w-[260px] rounded-full bg-purple-50 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <section className={`${sectionWrap} pt-44 pb-24 lg:pt-48 lg:pb-28`}>
          <div className="mb-14 flex flex-col gap-6">
            <Link
              to="/"
              className="inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium text-white btn-gradient transition-all duration-200 hover:scale-[1.02] hover:brightness-110 shadow-[0_10px_35px_rgba(45,91,255,0.25)]"
            >
              <FiArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-purple shadow-[0_0_16px_rgba(45,91,255,0.8)]" />
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple">
                Our Services
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16"
          >
            <div className="space-y-8">
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]">
                Software Development and AI Services Built for Real Business Operations
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-400 lg:text-xl lg:leading-9">
                Most businesses don&apos;t need more tools — they need better
                systems. At 2YouDev, we design and build custom software, AI
                operating systems, and automation solutions that help businesses
                reduce operational cost, eliminate manual work, and improve
                execution across teams.
              </p>
            </div>

            <div className="relative">
              <div className={`${cardClass} relative overflow-hidden p-7 lg:p-8`}>
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-50 blur-[80px]" />

                <div className="relative z-10 mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                    <FiLayers className="text-purple" size={24} />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      System Approach
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      Software + AI + Operations
                    </h3>
                  </div>
                </div>

                <div className="relative z-10 space-y-4">
                  {approaches.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() =>
                        setOpenApproach(openApproach === index ? null : index)
                      }
                      className="w-full rounded-xl border border-purple-100 bg-[rgba(6,11,26,0.62)] px-5 py-5 text-left transition-all duration-200 hover:border-purple-300 hover:bg-[rgba(45,91,255,0.08)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 text-xs font-semibold text-purple">
                            {item.num}
                          </span>

                          <span className="text-sm font-medium text-slate-300 sm:text-base">
                            {item.title}
                          </span>
                        </div>

                        <FiChevronDown
                          className={`shrink-0 text-purple transition-transform duration-200 ${
                            openApproach === index ? 'rotate-180' : ''
                          }`}
                          size={18}
                        />
                      </div>

                      <AnimatePresence initial={false}>
                        {openApproach === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="pl-12 pt-4 text-sm leading-7 text-slate-400">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className={`${sectionWrap} ${sectionSpacing}`}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {outcomes.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className={cardClass}
              >
                <div className={iconClass}>
                  <item.icon className="text-purple" size={22} />
                </div>

                <h3 className="mb-3 text-base font-semibold leading-7 text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="core-services" className={`${sectionWrap} ${sectionSpacing}`}>
          <div className="mb-14 space-y-4 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple">
              Our Services
            </p>

            <h2 className="text-3xl font-semibold leading-[1.18] text-white lg:text-4xl">
              End-to-end systems for modern businesses
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => (
              <motion.button
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedService(service)}
                className={`${cardClass} cursor-pointer text-left`}
              >
                <service.icon className="mb-4 text-purple" size={40} />

                <h3 className="mb-3 text-base font-semibold leading-7 text-white">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {service.desc}
                </p>
              </motion.button>
            ))}
          </motion.div>

          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-12 rounded-3xl border border-purple-100 bg-[rgba(18,22,58,0.5)] p-8 lg:p-10"
            >
              <div className="mb-8 flex items-center gap-4">
                <selectedService.icon className="text-purple" size={44} />

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple">
                    Service Details
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="mb-10 max-w-3xl text-base leading-8 text-slate-400">
                {selectedService.desc}
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {selectedDetails.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-purple-100 bg-[rgba(6,11,26,0.5)] p-6"
                  >
                    <selectedService.icon className="mb-4 text-purple" size={40} />

                    <h4 className="mb-3 text-lg font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-7 text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </section>

        <section className={`${sectionWrap} ${sectionSpacing}`}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className={cardClass}
            >
              <div className={iconClass}>
                <FiTool className="text-purple" size={24} />
              </div>

              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-purple">
                What is Custom Software Development?
              </p>

              <h2 className="mb-5 text-2xl font-semibold leading-[1.2] text-white">
                Systems built around your business, not the other way around
              </h2>

              <p className="mb-8 leading-8 text-slate-400">
                Custom software development is the process of building systems
                tailored specifically to your business workflows, instead of
                using generic tools that may not fully meet your needs.
              </p>

              <ul className="space-y-4">
                {[
                  'Built around your operations',
                  'Scalable as your business grows',
                  'Integrated with your existing tools',
                  'Higher ROI long-term vs off-the-shelf',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheck className="mt-1 shrink-0 text-purple" size={16} />
                    <span className="text-sm leading-7 text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="rounded-2xl border border-purple-100 bg-[rgba(18,22,58,0.4)] p-6 transition-all duration-300 hover:border-purple-300"
            >
              <div className="mb-8 space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple">
                  Comparison
                </p>

                <h2 className="text-2xl font-semibold leading-[1.2] text-white">
                  Custom vs Off-the-Shelf
                </h2>

                <p className="max-w-xl text-sm leading-7 text-slate-400">
                  A quick look at why custom systems create stronger long-term
                  value for growing businesses.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-purple-200 bg-[rgba(45,91,255,0.08)] p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                      <FiCheck className="text-purple" size={20} />
                    </div>

                    <h3 className="text-base font-semibold text-white">
                      Custom Software
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {comparisonRows.map(([left]) => (
                      <div key={left} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-50">
                          <FiCheck className="text-purple" size={12} />
                        </span>

                        <p className="text-sm leading-7 text-slate-300">
                          {left}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-purple-100 bg-[rgba(6,11,26,0.48)] p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.04)]">
                      <FiX className="text-slate-500" size={20} />
                    </div>

                    <h3 className="text-base font-semibold text-slate-300">
                      Off-the-Shelf
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {comparisonRows.map(([, right]) => (
                      <div key={right} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)]">
                          <FiX className="text-slate-500" size={12} />
                        </span>

                        <p className="text-sm leading-7 text-slate-500">
                          {right}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className={`${sectionWrap} ${sectionSpacing}`}>
          <div className="rounded-2xl border border-purple-200 bg-[rgba(45,91,255,0.08)] p-6 sm:p-8 lg:p-10">
            <div className="mb-12 space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple">
                How We Build
              </p>

              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.18] text-white lg:text-4xl">
                How we build systems that actually work
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-purple-100 bg-[rgba(6,11,26,0.48)] p-6"
                >
                  <div className="btn-gradient mb-5 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                    {item.step}
                  </div>

                  <h3 className="mb-3 text-base font-semibold leading-7 text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionWrap} ${sectionSpacing}`}>
          <div className="rounded-2xl border border-purple-200 bg-[rgba(45,91,255,0.08)] p-6 sm:p-8 lg:p-10">
            <div className="mb-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-purple">
                Why Businesses Choose 2YouDev
              </p>

              <h2 className="text-2xl font-semibold leading-[1.2] text-white">
                Built for businesses that need systems, not just pages
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyUs.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-purple-100 bg-[rgba(6,11,26,0.48)] p-6"
                >
                  <FiCheck className="mb-4 text-purple" size={18} />
                  <span className="text-sm leading-7 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionWrap} ${sectionSpacing}`}>
          <div className="mb-12 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple">
              FAQ
            </p>

            <h2 className="text-3xl font-semibold leading-[1.18] text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-purple-100 bg-[rgba(18,22,58,0.4)] transition-all duration-300 hover:border-purple-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold leading-7 text-white">
                    {faq.q}
                  </span>

                  <FiChevronDown
                    size={18}
                    className={`shrink-0 text-purple transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-sm leading-7 text-slate-400">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <section className={`${sectionWrap} pt-24 pb-32 lg:pt-28 lg:pb-36`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="rounded-[28px] border border-purple-100 bg-[linear-gradient(180deg,rgba(18,22,58,0.82),rgba(8,12,30,0.96))] px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
          >
            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
              <h2 className="max-w-4xl text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
                Build a system that actually improves your business operations
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Book a consultation today and let&apos;s identify the right
                system for your business with a practical roadmap focused on
                measurable results.
              </p>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={goToContact}
                  className="inline-flex items-center justify-center gap-3 rounded-xl btn-gradient px-8 py-4 text-base font-medium text-white shadow-[0_10px_30px_rgba(45,91,255,0.28)] transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
                >
                  Book a Consultation
                  <FiArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}