import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiShield,
  FiFileText,
  FiLock,
  FiCheckCircle,
  FiMail,
} from 'react-icons/fi';

const sectionWrap = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12';

const policySections = [
  {
    number: '01',
    title: 'Information We Collect',
    paragraphs: [
      'We may collect personal information that you voluntarily provide when you contact 2YouDev, request a proposal, book a consultation, or communicate with us about a project. This may include your name, email address, company name, phone number, and any information you include in your message.',
      'We may also collect limited technical information when you use our website, such as browser type, device information, pages visited, referral source, and general usage data. This information helps us understand how the site is used and improve the overall experience.',
    ],
  },
  {
    number: '02',
    title: 'How We Use Information',
    paragraphs: [
      'We use the information we collect to respond to inquiries, evaluate project requests, communicate with you about services, deliver work, improve our website, and maintain the security and reliability of our systems.',
      'We may also use contact details to send relevant project-related follow-ups or service information. We do not sell your personal information to third parties.',
    ],
  },
  {
    number: '03',
    title: 'Legal Basis And Consent',
    paragraphs: [
      'When you submit information to us through our website or by email, you acknowledge that we may process that information to respond to your request, discuss potential work, or fulfill an existing business relationship.',
      'If local laws require consent for specific data processing activities, your submission of information or continued use of the website will be treated as consent for those limited purposes unless a stricter legal standard applies.',
    ],
  },
  {
    number: '04',
    title: 'Sharing Of Information',
    paragraphs: [
      'We may share information with trusted service providers who help us operate the website, manage communications, host systems, or support project delivery, but only to the extent necessary for those purposes.',
      'We may also disclose information if required by law, regulation, legal process, or to protect the rights, safety, or property of 2YouDev, our users, or others.',
    ],
  },
  {
    number: '05',
    title: 'Data Retention',
    paragraphs: [
      'We keep personal information only for as long as reasonably necessary to respond to inquiries, manage client relationships, comply with legal obligations, resolve disputes, and enforce our agreements.',
      'If you would like us to delete information you previously submitted, you can contact us and we will review the request in line with applicable law and our operational obligations.',
    ],
  },
  {
    number: '06',
    title: 'Cookies And Analytics',
    paragraphs: [
      'Our website may use cookies or similar technologies to support essential functionality, measure traffic, and understand engagement. These tools help us improve performance, navigation, and content quality.',
      'If we use third-party analytics or advertising tools, those providers may process technical data according to their own policies. You can manage cookies through your browser settings.',
    ],
  },
  {
    number: '07',
    title: 'Data Security',
    paragraphs: [
      'We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, disclosure, or alteration. However, no method of online transmission or storage can be guaranteed to be completely secure.',
      'You should avoid sending sensitive confidential information through unsecured contact forms or email unless appropriate safeguards are in place.',
    ],
  },
  {
    number: '08',
    title: 'Your Rights',
    paragraphs: [
      'Depending on your location, you may have rights to request access to your personal information, correction of inaccurate data, deletion of data, restriction of processing, or objection to certain uses.',
    ],
    emailParagraph:
      'To make a request related to your personal information, contact us at',
  },
  {
    number: '09',
    title: 'Third-Party Links',
    paragraphs: [
      'Our website may include links to third-party platforms such as social media services or external websites. We are not responsible for the privacy practices, content, or security of those third-party services.',
      'We encourage you to review the privacy policies of any external website you visit through our site.',
    ],
  },
  {
    number: '10',
    title: 'Updates To This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect operational, legal, or service changes. When we do, we will update the effective date at the top of this page.',
      'Your continued use of the website after changes become effective means you accept the updated policy.',
    ],
  },
  {
    number: '11',
    title: 'Contact',
    paragraphs: [],
    emailParagraph:
      'If you have questions about this Privacy Policy or how your information is handled, contact 2YouDev at',
  },
];

const PrivacyPolicyPage: React.FC = () => {
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
                Privacy & Data Protection
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]">
                Privacy Policy for a more transparent digital relationship
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-400 lg:text-xl lg:leading-9">
                This Privacy Policy explains how 2YouDev collects, uses, stores,
                and protects information when you visit our website or contact us
                about our services.
              </p>

              <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: FiLock,
                    label: 'Data Handling',
                  },
                  {
                    icon: FiCheckCircle,
                    label: 'User Rights',
                  },
                  {
                    icon: FiMail,
                    label: 'Contact Requests',
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
                          Privacy Policy
                        </h2>
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <FiFileText className="text-purple" size={24} />
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span>Document Type</span>
                        <span className="font-semibold text-slate-900">Legal Policy</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span>Effective Date</span>
                        <span className="font-semibold text-slate-900">April 25, 2026</span>
                      </div>
                      <div className="flex items-center justify-between pb-1">
                        <span>Status</span>
                        <span className="font-semibold text-slate-900">Published</span>
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
                          Official Policy Document
                        </p>

                        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 lg:text-4xl">
                          Privacy Policy
                        </h2>

                        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                          This document outlines how information is collected,
                          processed, protected, and managed when users interact
                          with 2YouDev.
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
                        'Personal information',
                        'Security measures',
                        'Rights and requests',
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
                    {policySections.map((section) => (
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
                            Questions about this policy?
                          </h4>
                          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                            If you need clarification about this Privacy Policy
                            or how your information is handled, contact 2YouDev
                            directly.
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

export default PrivacyPolicyPage;