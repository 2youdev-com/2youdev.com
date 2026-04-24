import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const caseStudies = [
  {
    image: '/case-1.jpg',
    category: 'AI OPERATING SYSTEM',
    title: 'AI Operating System for Logistics Company',
    desc: 'Automated routing, reduced manual work by 60%, improved delivery visibility in real time.',
  },
  {
    image: '/case-2.jpg',
    category: 'INTERNAL SYSTEM',
    title: 'Internal Platform for Financial Services',
    desc: 'Integrated dashboards, reducing reporting time by 50% and improving team productivity.',
  },
  {
    image: '/case-3.jpg',
    category: 'MOBILE APP',
    title: 'Customer App for Service Company',
    desc: 'Real-time service tracking, payment, and request handling, increasing customer efficiency by 30%.',
  },
];

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">CASE STUDIES</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white">Real systems. Real impact.</h2>
          </div>
          <button className="mt-4 sm:mt-0 text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2 transition-colors duration-200">
            View All Case Studies
            <FiArrowRight size={16} />
          </button>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-[rgba(18,22,58,0.5)] border border-purple-100 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-purple-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-medium text-purple uppercase tracking-wide mb-2">{cs.category}</p>
                <h3 className="text-lg font-semibold text-white mb-2 leading-snug">{cs.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{cs.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 group-hover:text-purple transition-colors duration-200">
                  View Case Study
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
