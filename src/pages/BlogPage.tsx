import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiClock } from 'react-icons/fi';
import { articles, topics } from '../data/articles';

const containerVariants: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function BlogPage() {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate('/');

    window.setTimeout(() => {
      const hero = document.querySelector('#home');

      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 120);
  };

  const goToContact = () => {
    navigate('/');

    window.setTimeout(() => {
      const contact = document.querySelector('#contact');

      if (contact) {
        contact.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-4">
        <button
          type="button"
          onClick={goBackHome}
          className="inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium text-white btn-gradient shadow-[0_10px_35px_rgba(45,91,255,0.25)] transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
        >
          <FiArrowLeft size={16} />
          Back to Home
        </button>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium tracking-[0.15em] text-purple uppercase mb-3">
            BLOG
          </p>

          <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5 max-w-2xl">
            Insights on Software, AI, and Business Operations
          </h1>

          <p className="text-slate-400 leading-relaxed max-w-2xl">
            Learn how businesses use software and AI to reduce cost, save time, and improve
            operations. Real use cases, practical strategies, and implementation guidance.
          </p>
        </motion.div>
      </section>

      {/* Topic Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2"
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
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {articles.map((article) => (
            <motion.div
              key={article.title}
              variants={cardVariants}
              className="group bg-[rgba(18,22,58,0.4)] border border-purple-100 rounded-xl overflow-hidden hover:border-purple-300 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <p className="text-xs font-medium text-purple uppercase tracking-wide mb-3">
                  {article.tag}
                </p>

                <h2 className="text-xl font-semibold text-white leading-snug mb-3">
                  {article.title}
                </h2>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Body */}
              <div className="px-6 pb-6">
                <div className="border-t border-purple-100 pt-4 mt-2">
                  {article.body.split('\n\n').map((para, i) => (
                    <p
                      key={i}
                      className="text-sm text-slate-400 leading-relaxed mb-3 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-purple-100 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <FiClock size={12} />
                  {article.readTime}
                </span>

                <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-purple transition-colors duration-200 cursor-pointer">
                  Read More
                  <FiArrowRight
                    className="group-hover:translate-x-1 transition-transform duration-200"
                    size={12}
                  />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="bg-[rgba(45,91,255,0.08)] border border-purple-200 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-300 leading-relaxed">
            Stay updated with practical insights on AI and business systems.
          </p>

          <button
            type="button"
            onClick={goToContact}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white btn-gradient rounded-lg hover:brightness-110 transition-all duration-200"
          >
            Get in Touch
            <FiArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}