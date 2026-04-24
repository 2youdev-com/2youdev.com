import { motion } from 'framer-motion';
import {
  FiCpu,
  FiZap,
  FiBook,
  FiFileText,
  FiBarChart2,
  FiGitMerge,
} from 'react-icons/fi';

const solutions = [
  {
    icon: FiCpu,
    title: 'AI Operating Systems',
    desc: 'Centralized intelligent systems that support workflows, decisions, knowledge access, task routing, and cross-team execution.',
  },
  {
    icon: FiGitMerge,
    title: 'Workflow Intelligence',
    desc: 'AI embedded inside business systems to help users analyze, summarize, search, and act faster.',
  },
  {
    icon: FiZap,
    title: 'Intelligent Automation',
    desc: 'Automation for documents, approvals, notifications, routing, reporting, and recurring operational tasks.',
  },
  {
    icon: FiBook,
    title: 'Knowledge Systems',
    desc: 'Internal knowledge environments that give teams faster access to policies, SOPs, product information, and company knowledge.',
  },
  {
    icon: FiFileText,
    title: 'AI Document Processing',
    desc: 'Extraction, classification, summarization, and organization of information from forms, invoices, PDFs, and business records.',
  },
  {
    icon: FiBarChart2,
    title: 'Predictive and Analytical Systems',
    desc: 'Data-driven tools that help identify trends, improve visibility, and support smarter decisions.',
  },
];

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function AIOperatingSystemsSection() {
  return (
    <section id="ai-systems" className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">
            AI OPERATING SYSTEMS
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight max-w-2xl">
              AI Operating Systems Built for Real Business Operations
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md lg:text-right">
              AI should not live as an isolated feature. It should support how
              the business runs. We build AI operating systems that help teams
              find information faster, automate repetitive work, make better
              decisions, and move operations forward with less friction.
            </p>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {solutions.map((sol) => (
            <motion.div
              key={sol.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-[rgba(18,22,58,0.4)] border border-purple-100 rounded-xl p-6 transition-all duration-300 hover:border-purple-300 hover:shadow-[0_8px_32px_rgba(124,92,252,0.15)]"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                <sol.icon className="text-purple" size={24} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {sol.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {sol.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-[rgba(45,91,255,0.08)] border border-purple-200 rounded-2xl px-8 py-6 text-center"
        >
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
            We focus on applied AI, not AI for show. Every system is designed
            around usability, measurable value, lower cost, faster execution,
            and better operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}