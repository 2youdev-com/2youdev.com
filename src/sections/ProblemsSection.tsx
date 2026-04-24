import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const problems = [
  'Too much manual work across teams',
  'Delays caused by disconnected systems',
  'Time lost searching for information',
  'Repetitive tasks that waste resources',
  'Weak visibility across workflows and reporting',
  'Slow service processes and internal approvals',
  'Legacy systems that need modern intelligence without full replacement',
];

const leftVariants: any = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const rightVariants: any = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const listContainerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const listItemVariants: any = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProblemsSection() {
  return (
    <section className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Problems List */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full lg:w-1/2"
          >
            <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">PROBLEMS WE SOLVE</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-8">
              We solve the operational problems that slow businesses down
            </h2>

            <motion.ul
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {problems.map((problem) => (
                <motion.li
                  key={problem}
                  variants={listItemVariants}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="text-purple mt-0.5 shrink-0" size={18} />
                  <span className="text-slate-300 text-sm leading-relaxed">{problem}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Dashboard Image */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-purple-100 glow-purple">
              <img
                src="/dashboard.png"
                alt="Business Analytics Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
