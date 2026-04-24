import { motion } from 'framer-motion';
import { FiBriefcase, FiUsers, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

const stats = [
  { icon: FiBriefcase, number: '50+', label: 'Projects Delivered' },
  { icon: FiUsers, number: '20+', label: 'Industries Served' },
  { icon: FiCheckCircle, number: '98%', label: 'Client Satisfaction' },
  { icon: FiTrendingUp, number: '40%', label: 'Avg. Efficiency Gain' },
];

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function StatsBar() {
  return (
    <section className="w-full bg-navy-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-[rgba(18,22,58,0.3)] border border-purple-100 rounded-xl px-5 py-4 flex items-center gap-4"
            >
              <stat.icon className="text-purple shrink-0" size={28} />
              <div>
                <p className="text-xl font-bold text-white">{stat.number}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
