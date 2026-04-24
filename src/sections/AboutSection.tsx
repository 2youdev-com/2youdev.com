import { motion } from 'framer-motion';
import { FiTarget, FiEye } from 'react-icons/fi';

const leftVariants: any = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const rightVariants: any = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Main copy */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full lg:w-1/2"
          >
            <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">
              ABOUT
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-6">
              An Engineering Team Building Better Software and Smarter Business Systems
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              2YouDev was built on a simple idea: businesses should not have to
              choose between reliable software development and meaningful AI
              innovation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We create websites, mobile applications, custom platforms,
              business systems, and AI operating systems for companies that want
              to modernize operations and improve how work gets done. Our
              approach combines engineering discipline, product thinking, and
              ongoing R&amp;D so we can build systems that are practical,
              scalable, and useful in daily operations.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              We work with businesses that need more than a vendor. They need a
              team that can understand pain points, design the right system, and
              apply AI where it creates real measurable value.
            </p>
          </motion.div>

          {/* Right: Vision & Mission */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full lg:w-1/2 flex flex-col gap-5"
          >
            <div className="bg-[rgba(18,22,58,0.4)] border border-purple-100 rounded-xl p-6 hover:border-purple-300 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                  <FiEye className="text-purple" size={20} />
                </div>
                <h3 className="text-base font-semibold text-white">Vision</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                To become a trusted partner for software, business systems, and
                applied AI that create measurable business value.
              </p>
            </div>

            <div className="bg-[rgba(18,22,58,0.4)] border border-purple-100 rounded-xl p-6 hover:border-purple-300 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                  <FiTarget className="text-purple" size={20} />
                </div>
                <h3 className="text-base font-semibold text-white">Mission</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                To help organizations build and improve systems that save cost,
                save time, reduce friction, and solve real business problems.
              </p>
            </div>

            {/* Differentiators */}
            <div className="bg-[rgba(45,91,255,0.08)] border border-purple-200 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4">
                What makes us different
              </h3>
              <ul className="space-y-2.5">
                {[
                  'We are not only a web or mobile development company.',
                  'We are not only an AI company building demos.',
                  'We build complete digital systems that improve how businesses operate.',
                  'We combine product engineering, AI integration, and R&D in one team.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple shrink-0" />
                    <span className="text-sm text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}