import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discover', desc: 'We identify goals, bottlenecks, inefficiencies, and business opportunities.' },
  { num: '02', title: 'Define', desc: 'We map the right system, architecture, priorities, and implementation path.' },
  { num: '03', title: 'Build', desc: 'We design and develop the platform, app, or operating system.' },
  { num: '04', title: 'Integrate', desc: 'We connect the solution to your existing tools, workflows, and data.' },
  { num: '05', title: 'Improve', desc: 'We optimize performance, adoption, and business impact after launch.' },
];

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const stepVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProcessSection() {
  return (
    <section className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">OUR PROCESS</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            A clear process that delivers measurable results
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-[24px] left-[10%] right-[10%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="h-full origin-left"
              style={{
                background: 'linear-gradient(90deg, #2D5BFF 0%, #6EA8FF 50%, #2D5BFF 100%)',
              }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={stepVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full btn-gradient flex items-center justify-center mb-4 animate-pulse-glow relative z-10">
                  <span className="text-sm font-bold text-white">{step.num}</span>
                </div>
                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
