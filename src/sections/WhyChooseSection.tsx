import { motion } from 'framer-motion';
import { FiTarget, FiLayers, FiTrendingUp, FiStar, FiZap } from 'react-icons/fi';

const reasons = [
  { icon: FiTarget, title: 'Business Value First', desc: 'Every solution is designed to save cost, save time, reduce effort, or solve a clear business problem.' },
  { icon: FiLayers, title: 'Software + AI Bridge', desc: 'Clients do not need one team for software and another team for AI. We build both together.' },
  { icon: FiTrendingUp, title: 'Built Around Operations', desc: 'We work around bottlenecks, delays, repetitive tasks, and disconnected systems.' },
  { icon: FiStar, title: 'Beyond the Launch', desc: 'We build systems that are meant to support real business operations, not only look good in a demo.' },
  { icon: FiZap, title: 'R&D Driven', desc: 'We continuously test new approaches so clients benefit from current AI capabilities.' },
];

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">WHY BUSINESSES CHOOSE 2YOUDEV</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            We focus on what matters: real business impact
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                <reason.icon className="text-purple" size={28} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
