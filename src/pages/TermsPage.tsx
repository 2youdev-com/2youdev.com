import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiFileText,
  FiShield,
  FiCheckCircle,
  FiMail,
  FiClipboard,
} from 'react-icons/fi';

const sectionWrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12';

const termsSections = [
  {
    number: '01',
    title: 'Acceptance Of Terms',
    paragraphs: [
      'By accessing or using the 2YouDev website, contacting us, or engaging with our services, you agree to be bound by these Terms of Service. If you do not agree with these terms, you should not use the website or our services.',
      'These terms apply to website visitors, prospective clients, and users who communicate with us through our website, email, or other official channels.',
    ],
  },
  {
    number: '02',
    title: 'Services',
    paragraphs: [
      '2YouDev provides digital services including website design and development, product design, AI-related solutions, digital systems, consulting, and related creative or technical work. The exact scope of any paid engagement will be defined in a separate proposal, statement of work, invoice, or written agreement.',
      'Nothing on this website guarantees project acceptance, delivery timelines, pricing, or ongoing availability of any specific service unless confirmed in writing.',
    ],
  },
  {
    number: '03',
    title: 'Use Of The Website',
    paragraphs: [
      'You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others, restrict access, damage the website, or interfere with its normal operation.',
      'You must not attempt to gain unauthorized access to the website, servers, forms, or connected systems, and you must not use the site to transmit malicious code, spam, or unlawful content.',
    ],
  },
  {
    number: '04',
    title: 'Intellectual Property',
    paragraphs: [
      'Unless otherwise stated, all content on this website, including text, branding, visuals, layout, graphics, and original materials, is owned by or licensed to 2YouDev and is protected by applicable intellectual property laws.',
      'You may not reproduce, republish, distribute, modify, or commercially exploit website content without prior written permission, except for limited personal and non-commercial reference use.',
    ],
  },
  {
    number: '05',
    title: 'Client Materials',
    paragraphs: [
      'If you provide materials, brand assets, data, or content to 2YouDev for a project, you represent that you have the legal right to provide and authorize use of those materials.',
      'You remain responsible for the legality, accuracy, and ownership of materials you submit, and you agree to indemnify 2YouDev against claims arising from unauthorized or unlawful materials you provide.',
    ],
  },
  {
    number: '06',
    title: 'Payments And Project Terms',
    paragraphs: [
      'Payment schedules, revision limits, deliverables, timelines, and ownership transfer terms for paid work will be set out in project-specific agreements. Where no separate written terms exist, invoices and written communications will govern the commercial arrangement.',
      'Late payments, client-side delays, scope changes, or missing approvals may affect delivery timelines and may require revised pricing or scheduling.',
    ],
  },
  {
    number: '07',
    title: 'No Warranty',
    paragraphs: [
      'This website and its content are provided on an as-is and as-available basis. While we aim to keep information accurate and current, 2YouDev makes no express or implied warranties regarding completeness, accuracy, reliability, availability, or fitness for a particular purpose.',
      'We do not guarantee uninterrupted access to the website or that all content will always be free from errors, omissions, or vulnerabilities.',
    ],
  },
  {
    number: '08',
    title: 'Limitation Of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, 2YouDev will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or reliance on its content.',
      'Where liability cannot be excluded, our total liability in connection with the website or services will be limited to the amount actually paid to 2YouDev for the specific service giving rise to the claim, if any.',
    ],
  },
  {
    number: '09',
    title: 'Third-Party Services',
    paragraphs: [
      'Our website may reference or link to third-party tools, platforms, or websites. We do not control those services and are not responsible for their content, terms, privacy practices, or availability.',
      'Your use of third-party services is governed by the terms and policies of those third parties.',
    ],
  },
  {
    number: '10',
    title: 'Termination',
    paragraphs: [
      'We may suspend or terminate access to the website or decline service inquiries if we reasonably believe there has been misuse, unlawful conduct, abuse, security risk, or breach of these terms.',
      'Any provisions that by their nature should survive termination, including intellectual property, payment obligations, limitation of liability, and indemnity provisions, will continue to apply.',
    ],
  },
  {
    number: '11',
    title: 'Governing Terms And Updates',
    paragraphs: [
      'These Terms of Service may be updated from time to time. Updated terms become effective when posted on this page unless stated otherwise.',
      'Your continued use of the website after changes are posted means you accept the revised terms.',
    ],
  },
  {
    number: '12',
    title: 'Contact',
    paragraphs: [],
    emailParagraph:
      'If you have questions about these Terms of Service, contact 2YouDev at',
  },
];

const TermsPage: React.FC = () => {
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
        <div className="absolute left-[8%] top-[10%] h-[360px] w-[360px] rounded-full bg-purple-50 blur-[130px]" />
        <div className="absolute right-[5%] top-[28%] h-[340px] w-[340px] rounded-full bg-purple-50 blur-[140px]" />
        <div className="absolute left-[35%] bottom-[8%] h-[260px] w-[260px] rounded-full bg-purple-50 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <section className={`${sectionWrap} pt-44 pb-20 lg:pt-48 lg:pb-24`}>
          <div className="mb-12 flex flex-col gap-6">
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
                Legal Document
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-purple-100 bg-[rgba(18,22,58,0.5)] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
                <FiShield className="text-purple" size={16} />
                Website & Service Terms
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]">
                Terms of Service for clear and professional engagement
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-400 lg:text-xl lg:leading-9">
                These Terms of Service govern your use of the 2YouDev website
                and any related communication or service engagement with our
                studio.
              </p>

              <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: FiClipboard,
                    label: 'Service Scope',
                  },
                  {
                    icon: FiCheckCircle,
                    label: 'Usage Terms',
                  },
                  {
                    icon: FiMail,
                    label: 'Client Contact',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-purple-100 bg-[rgba(18,22,58,0.4)] p-4"
                  >
                    <item.icon className="mb-3 text-purple" size={20} />
                    <p className="text-sm font-medium text-slate-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-purple-50 blur-[70px]" />

              <motion.div
                initial={{ opacity: 0, rotate: 0, y: 24 }}
                animate={{ opacity: 1, rotate: -1.2, y: 0 }}
                transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
                className="relative mx-auto max-w-md rounded-[28px] border border-white/10 bg-[rgba(18,22,58,0.72)] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="relative overflow-hidden rounded-[18px] border border-[#e6e2d8] bg-[#f8f6f1] px-8 py-10 text-slate-900 shadow-2xl">
                  <div className="absolute right-0 top-0 h-20 w-20 bg-[#ece8dd]" />
                  <div
                    className="absolute right-0 top-0 h-20 w-20 bg-[#f8f6f1]"
                    style={{
                      clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-start justify-between gap-6">
                      <div>
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                          2YouDev
                        </p>
                        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                          Terms of Service
                        </h2>
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <FiFileText className="text-purple" size={24} />
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span>Document Type</span>
                        <span className="font-semibold text-slate-900">
                          Service Terms
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span>Effective Date</span>
                        <span className="font-semibold text-slate-900">
                          April 25, 2026
                        </span>
                      </div>

                      <div className="flex items-center justify-between pb-1">
                        <span>Status</span>
                        <span className="font-semibold text-slate-900">
                          Published
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <div className="h-[7px] w-full rounded-full bg-slate-200" />
                      <div className="h-[7px] w-10/12 rounded-full bg-slate-200" />
                      <div className="h-[7px] w-11/12 rounded-full bg-slate-200" />
                      <div className="h-[7px] w-8/12 rounded-full bg-slate-200" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <main className={`${sectionWrap} pb-28`}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mx-auto max-w-5xl"
          >
            <div className="rounded-[20px] bg-[#f7f4ee] p-[1px] shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
              <div className="relative overflow-hidden rounded-[20px] border border-[#e7e2d8] bg-[#fcfbf8] text-slate-900">
                <div className="absolute right-0 top-0 h-20 w-20 bg-[#efebe2]" />
                <div
                  className="absolute right-0 top-0 h-20 w-20 bg-[#fcfbf8]"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                  }}
                />

                <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
                  <div className="mb-12 border-b border-[#e3ded4] pb-10">
                    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                          Official Terms Document
                        </p>

                        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 lg:text-4xl">
                          Terms of Service
                        </h2>

                        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                          This document outlines the terms that apply when
                          visitors use the 2YouDev website or engage with our
                          services, communication channels, and project
                          processes.
                        </p>
                      </div>

                      <div className="rounded-xl border border-[#e3ded4] bg-white px-5 py-4 shadow-sm lg:min-w-[220px]">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                          Effective Date
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-950">
                          April 25, 2026
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {[
                        'Website usage',
                        'Service engagement',
                        'Project terms',
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-[#e3ded4] bg-white px-4 py-4"
                        >
                          <p className="text-sm font-medium text-slate-700">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-12">
                    {termsSections.map((section) => (
                      <section
                        key={section.number}
                        className="grid grid-cols-1 gap-5 border-b border-[#e3ded4] pb-12 last:border-b-0 last:pb-0 lg:grid-cols-[76px_1fr]"
                      >
                        <div>
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#d8d2c7] bg-[#f7f4ee] text-sm font-semibold text-slate-600">
                            {section.number}
                          </span>
                        </div>

                        <div>
                          <h3 className="mb-5 text-2xl font-semibold tracking-[-0.02em] text-slate-950">
                            {section.title}
                          </h3>

                          <div className="space-y-4 text-[15px] leading-8 text-slate-600">
                            {section.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}

                            {section.emailParagraph && (
                              <p>
                                {section.emailParagraph}{' '}
                                <a
                                  href="mailto:2youdev@gmail.com"
                                  className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-purple"
                                >
                                  2youdev@gmail.com
                                </a>
                                .
                              </p>
                            )}
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>

                  <div className="mt-16 rounded-xl border border-[#e3ded4] bg-white p-6 sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#e3ded4] bg-[#f7f4ee]">
                          <FiMail className="text-slate-700" size={20} />
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-slate-950">
                            Questions about these terms?
                          </h4>
                          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                            If you need clarification about these Terms of
                            Service or how they apply to your project, contact
                            2YouDev directly.
                          </p>
                        </div>
                      </div>

                      <a
                        href="mailto:2youdev@gmail.com"
                        className="inline-flex w-fit items-center justify-center rounded-xl border border-[#d9d4ca] bg-[#f7f4ee] px-6 py-3.5 text-sm font-medium text-slate-900 transition-all duration-200 hover:bg-white"
                      >
                        2youdev@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default TermsPage;