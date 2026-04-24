import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const layers = [
  {
    num: '01',
    title: 'Understand',
    desc: 'We study your operations, challenges, and goals.',
    color: 'from-[#2D5BFF] to-[#6EA8FF]',
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'We design the right system, architecture, and execution path.',
    color: 'from-[#3C6CFF] to-[#2D5BFF]',
  },
  {
    num: '03',
    title: 'Execute',
    desc: 'We build, integrate, and automate your workflows.',
    color: 'from-[#2D5BFF] to-[#3C6CFF]',
  },
  {
    num: '04',
    title: 'Improve',
    desc: 'We optimize continuously to deliver real impact.',
    color: 'from-[#1A2A6C] to-[#2D5BFF]',
  },
];

const leftVariants: any = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const layerVariants: any = {
  hidden: { opacity: 0, y: 30, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 5,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function WhatWeDoSection() {
  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="what-we-do" className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full lg:w-1/2"
          >
            <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">
              WHAT WE DO
            </p>

            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-6">
              We turn operational complexity into clarity with software and AI systems that work.
            </h2>

            <p className="text-slate-400 leading-relaxed mb-8">
              We help businesses move from manual processes, disconnected tools, and inefficient workflows to modern digital systems powered by software and AI. Whether you need a new product from scratch or want to improve an existing system, we build solutions that create operational clarity and measurable business value.
            </p>

            <button
              onClick={scrollToAbout}
              className="text-slate-400 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors duration-200"
            >
              Learn More About Us
              <FiArrowRight size={16} />
            </button>
          </motion.div>

          {/* Right: 3D Layer Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="w-full lg:w-1/2 relative"
            style={{ perspective: '1000px' }}
          >
            <div className="relative flex flex-col items-center gap-0">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.num}
                  variants={layerVariants}
                  className={`relative w-full max-w-[340px] bg-gradient-to-br ${layer.color} rounded-xl p-4 border border-white/10 shadow-lg`}
                  style={{
                    transform: `translateZ(${(4 - index) * 10}px) rotateX(5deg)`,
                    zIndex: 4 - index,
                    marginTop: index > 0 ? '-8px' : '0',
                  }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-white/60">
                      {layer.num}
                    </span>

                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {layer.title}
                      </h4>

                      <p className="text-xs text-white/70 mt-0.5">
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}