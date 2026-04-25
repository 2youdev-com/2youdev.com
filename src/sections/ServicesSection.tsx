import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { services } from '../data/services';

const containerVariants: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            End-to-end systems for modern businesses
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-[rgba(18,22,58,0.4)] border border-purple-100 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-purple-300 hover:shadow-[0_8px_32px_rgba(124,92,252,0.15)]"
            >
              <service.icon className="text-purple mb-4" size={40} />

              <h3 className="text-base font-semibold text-white mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Link
            to="/services"
            className="px-6 py-3 text-sm font-medium text-slate-300 border border-purple-300 rounded-lg hover:bg-purple-50 hover:text-white transition-all duration-200 flex items-center gap-2"
          >
            View All Services
            <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}