import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiX,
  FiZap,
  FiTrendingUp,
  FiBarChart2,
  FiCpu,
  FiActivity,
} from 'react-icons/fi';

const caseStudies = [
  {
    id: 1,
    image: '/case-1.jpg',
    tag: 'AI OPERATING SYSTEM',
    title: 'AI Operating System for Logistics Company',
    problem:
      'Manual routing processes caused delays, errors, and zero real-time visibility across delivery operations.',
    solution:
      'We built a centralized AI operating system with automated task routing, real-time tracking, and intelligent decision support.',
    results: [
      '60% reduction in manual work',
      '40% faster execution time',
      'Real-time delivery visibility across all teams',
    ],
    before: [
      'Manual routing across spreadsheets',
      'Delays caused by disconnected teams',
      'No real-time operational visibility',
    ],
    after: [
      'Automated intelligent routing',
      'Faster execution with fewer errors',
      'Centralized live dashboard for all operations',
    ],
    reverse: false,
  },
  {
    id: 2,
    image: '/case-2.jpg',
    tag: 'INTERNAL SYSTEM',
    title: 'Internal Platform for Financial Services',
    problem:
      'Teams used 5 disconnected tools for reporting, causing inconsistencies, delays, and wasted analyst time.',
    solution:
      'We replaced fragmented tools with a unified internal platform featuring automated reporting and centralized dashboards.',
    results: [
      '50% reduction in reporting time',
      'Replaced 5 disconnected tools with 1 system',
      'Improved team visibility and productivity',
    ],
    before: [
      '5 disconnected tools',
      'Manual report compilation taking days',
      'Poor cross-team data visibility',
    ],
    after: [
      'Single unified business platform',
      'Automated reports generated instantly',
      'Real-time data across all departments',
    ],
    reverse: true,
  },
  {
    id: 3,
    image: '/case-3.jpg',
    tag: 'MOBILE APP',
    title: 'Customer App for Service Company',
    problem:
      'Customers had no visibility into service requests, leading to frustration, repeated calls, and high support cost.',
    solution:
      'We built a mobile app with real-time service tracking, in-app payments, and automated status notifications.',
    results: [
      '30% increase in customer efficiency',
      '70% reduction in support call volume',
      'In-app payments processed seamlessly',
    ],
    before: [
      'No customer visibility into service status',
      'High inbound support call volume',
      'Manual payment handling',
    ],
    after: [
      'Real-time tracking in customer app',
      'Automated status notifications',
      'Integrated in-app payment flow',
    ],
    reverse: false,
  },
];

const sectionWrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12';

const cardClass =
  'rounded-3xl border border-[rgba(45,91,255,0.10)] bg-[rgba(18,22,58,0.36)] shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-[rgba(45,91,255,0.22)] hover:shadow-[0_24px_70px_rgba(45,91,255,0.10)]';

const iconSoftClass =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50';

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

export default function CaseStudiesPage() {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[6%] top-[10%] h-[360px] w-[360px] rounded-full bg-purple-50 blur-[130px]" />
        <div className="absolute right-[5%] top-[28%] h-[360px] w-[360px] rounded-full bg-purple-50 blur-[140px]" />
        <div className="absolute left-[35%] bottom-[8%] h-[260px] w-[260px] rounded-full bg-purple-50 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <section className={`${sectionWrap} pt-44 pb-24 lg:pt-48 lg:pb-28`}>
          <div className="mb-14 flex flex-col gap-6">
            <Link
              to="/"
              className="inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium text-white btn-gradient shadow-[0_10px_35px_rgba(45,91,255,0.25)] transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
            >
              <FiArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-purple shadow-[0_0_16px_rgba(45,91,255,0.8)]" />
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple">
                Case Studies
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16"
          >
            <div className="space-y-8">
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]">
                Real Systems. Real Results.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-400 lg:text-xl lg:leading-9">
                Most companies talk about features. We focus on results.
                Explore how our software and AI systems helped businesses
                improve operations, reduce manual work, and move faster.
              </p>
            </div>

            <div className="relative">
              <div className={`${cardClass} relative overflow-hidden p-8 lg:p-10`}>
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-50 blur-[90px]" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">
                    <FiBarChart2 className="text-purple" size={30} />
                  </div>

                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-purple">
                    Result-driven engineering
                  </p>

                  <h2 className="mb-5 text-2xl font-semibold leading-[1.2] text-white lg:text-3xl">
                    Every project is designed around measurable business impact
                  </h2>

                  <p className="text-sm leading-7 text-slate-400">
                    From AI operating systems to internal platforms and customer
                    apps, our focus is building systems that reduce friction,
                    save time, and improve execution.
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      { value: '60%', label: 'Less manual work' },
                      { value: '40%', label: 'Faster execution' },
                      { value: '70%', label: 'Fewer support calls' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[rgba(45,91,255,0.10)] bg-[rgba(6,11,26,0.42)] p-4"
                      >
                        <p className="text-xl font-semibold text-white">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className={`${sectionWrap} py-24 lg:py-28`}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-14"
          >
            {caseStudies.map((study) => (
              <motion.article
                key={study.id}
                variants={cardVariants}
                className={`${cardClass} group overflow-hidden p-3 sm:p-4`}
              >
                <div
                  className={`grid grid-cols-1 gap-4 ${
                    study.reverse
                      ? 'lg:grid-cols-[0.95fr_1.05fr]'
                      : 'lg:grid-cols-[1.05fr_0.95fr]'
                  }`}
                >
                  <div
                    className={`relative min-h-[320px] overflow-hidden rounded-2xl ${
                      study.reverse ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,26,0.05),rgba(6,11,26,0.62))]" />

                    <div className="absolute left-6 top-6">
                      <span className="inline-flex rounded-xl border border-[rgba(45,91,255,0.20)] bg-[rgba(45,91,255,0.16)] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-white backdrop-blur-xl">
                        {study.tag}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[rgba(6,11,26,0.22)] p-6 sm:p-8 lg:p-10">
                    <div className="mb-8">
                      <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-purple">
                        Case Study 0{study.id}
                      </p>

                      <h2 className="max-w-xl text-2xl font-semibold leading-[1.2] text-white lg:text-3xl">
                        {study.title}
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className={iconSoftClass}>
                          <FiZap className="text-purple" size={18} />
                        </div>

                        <div>
                          <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-purple">
                            Problem
                          </h3>

                          <p className="text-sm leading-7 text-slate-400">
                            {study.problem}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className={iconSoftClass}>
                          <FiCpu className="text-purple" size={18} />
                        </div>

                        <div>
                          <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-purple">
                            Solution
                          </h3>

                          <p className="text-sm leading-7 text-slate-400">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className={iconSoftClass}>
                          <FiTrendingUp className="text-purple" size={18} />
                        </div>

                        <div>
                          <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-purple">
                            Results
                          </h3>

                          <ul className="space-y-3">
                            {study.results.map((result) => (
                              <li
                                key={result}
                                className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                              >
                                <FiCheck
                                  className="mt-1 shrink-0 text-purple"
                                  size={16}
                                />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-[rgba(6,11,26,0.24)] p-6 sm:p-8 lg:p-10">
                  <div className="mb-8 space-y-3">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple">
                      Transformation
                    </p>

                    <h3 className="text-2xl font-semibold leading-[1.2] text-white">
                      Before vs After
                    </h3>

                    <p className="max-w-2xl text-sm leading-7 text-slate-400">
                      A clear view of the operational shift after building the
                      right system.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(6,11,26,0.38)] p-5">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.04)]">
                          <FiX className="text-slate-500" size={20} />
                        </div>

                        <h4 className="text-base font-semibold text-slate-300">
                          Before
                        </h4>
                      </div>

                      <div className="space-y-5">
                        {study.before.map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)]">
                              <FiX className="text-slate-500" size={12} />
                            </span>

                            <p className="text-sm font-medium leading-7 text-slate-500">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[rgba(45,91,255,0.18)] bg-[rgba(45,91,255,0.07)] p-5 shadow-[0_12px_40px_rgba(45,91,255,0.08)]">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50">
                          <FiCheck className="text-purple" size={20} />
                        </div>

                        <h4 className="text-base font-semibold text-white">
                          After
                        </h4>
                      </div>

                      <div className="space-y-5">
                        {study.after.map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-50">
                              <FiCheck className="text-purple" size={12} />
                            </span>

                            <p className="text-sm font-medium leading-7 text-slate-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className={`${sectionWrap} pt-12 pb-32 lg:pb-36`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="rounded-[28px] border border-[rgba(45,91,255,0.10)] bg-[linear-gradient(180deg,rgba(18,22,58,0.82),rgba(8,12,30,0.96))] px-6 py-16 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:px-10 lg:px-16 lg:py-20"
          >
            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">
                <FiActivity className="text-purple" size={30} />
              </div>

              <h2 className="max-w-4xl text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
                Want similar results for your business?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Start your project with 2YouDev and build a system designed to
                create measurable impact from day one.
              </p>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={goToContact}
                  className="inline-flex items-center justify-center gap-3 rounded-xl btn-gradient px-8 py-4 text-base font-medium text-white shadow-[0_10px_30px_rgba(45,91,255,0.28)] transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
                >
                  Start Your Project
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