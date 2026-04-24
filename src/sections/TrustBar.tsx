import { motion } from 'framer-motion';

export default function TrustBar() {
  return (
    <section className="w-full bg-[#0B132B] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-slate-500"
        >
          Built for startups, SMEs, and enterprises that want practical systems, not unnecessary complexity.
        </motion.p>
      </div>
    </section>
  );
}
