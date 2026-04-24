import { motion } from 'framer-motion';
import {
  FiTruck,
  FiDollarSign,
  FiShoppingBag,
  FiHeart,
  FiHome,
  FiBook,
  FiPackage,
  FiSettings,
} from 'react-icons/fi';

const industries = [
  {
    icon: FiTruck,
    name: 'Logistics & Supply Chain',
    desc: 'Route optimization, delivery tracking, and warehouse automation.',
  },
  {
    icon: FiDollarSign,
    name: 'Financial Services',
    desc: 'Dashboards, reporting systems, and intelligent document processing.',
  },
  {
    icon: FiShoppingBag,
    name: 'Retail & E-Commerce',
    desc: 'Customer portals, inventory systems, and recommendation engines.',
  },
  {
    icon: FiHeart,
    name: 'Healthcare',
    desc: 'Patient management, record processing, and workflow automation.',
  },
  {
    icon: FiHome,
    name: 'Real Estate',
    desc: 'Property platforms, CRM integrations, and smart listing tools.',
  },
  {
    icon: FiBook,
    name: 'Education',
    desc: 'Learning platforms, knowledge systems, and operational tools.',
  },
  {
    icon: FiPackage,
    name: 'Manufacturing',
    desc: 'Production tracking, quality control, and process automation.',
  },
  {
    icon: FiSettings,
    name: 'Professional Services',
    desc: 'Internal tools, client portals, and workflow orchestration.',
  },
];

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">
            INDUSTRIES
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
            Built for businesses across industries
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            We work with startups, SMEs, and enterprises across sectors that
            need practical software and AI systems to improve how they operate.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-[rgba(18,22,58,0.4)] border border-purple-100 rounded-xl p-5 transition-all duration-300 hover:border-purple-300 hover:shadow-[0_8px_32px_rgba(124,92,252,0.12)]"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-3">
                <ind.icon className="text-purple" size={20} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                {ind.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}