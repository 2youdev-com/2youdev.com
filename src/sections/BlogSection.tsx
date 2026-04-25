import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import { articles, topics } from '../data/articles';

const containerVariants: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const goToBlogTop = () => {
  window.setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, 80);
};

export default function BlogSection() {
  return (
    <section id="blog" className="w-full bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">
              BLOG
            </p>

            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
              Insights on Software, AI,
              <br className="hidden sm:block" /> and Business Operations
            </h2>

            <p className="text-slate-400 text-sm mt-3 max-w-md leading-relaxed">
              Real use cases, practical strategies, and implementation guidance
              for businesses using software and AI to improve operations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {topics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1.5 text-xs font-medium text-slate-400 border border-purple-100 rounded-full hover:border-purple-300 hover:text-white cursor-pointer transition-all duration-200"
            >
              {topic}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {articles.map((article) => (
            <motion.div
              key={article.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-[rgba(18,22,58,0.4)] border border-purple-100 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-purple-300 hover:shadow-[0_8px_32px_rgba(124,92,252,0.12)] flex flex-col"
            >
              <p className="text-xs font-medium text-purple uppercase tracking-wide mb-3">
                {article.tag}
              </p>

              <h3 className="text-sm font-semibold text-white leading-snug mb-3 flex-1">
                {article.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-purple-100">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <FiClock size={12} />
                  {article.readTime}
                </span>

                <Link
                  to="/blog"
                  onClick={goToBlogTop}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-purple transition-colors duration-200"
                >
                  Read
                  <FiArrowRight
                    className="group-hover:translate-x-1 transition-transform duration-200"
                    size={12}
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-[rgba(45,91,255,0.08)] border border-purple-200 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-300 text-sm leading-relaxed">
            Stay updated with practical insights on AI and business systems.
          </p>

          <Link
            to="/blog"
            onClick={goToBlogTop}
            className="shrink-0 px-5 py-2.5 text-sm font-medium text-white btn-gradient rounded-lg hover:brightness-110 transition-all duration-200 flex items-center gap-2"
          >
            Explore All Articles
            <FiArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}