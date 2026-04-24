import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

/* ---------- Particle Background ---------- */
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let w = 800;
    let h = 400;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = rect?.width || 800;
      h = rect?.height || 400;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5,
        speedY: -(Math.random() * 0.3 + 0.1),
        opacity: Math.random() * 0.3 + 0.1,
        color: Math.random() > 0.5 ? '#2D5BFF' : '#6EA8FF',
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.y += p.speedY;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

/* ---------- CTA Section ---------- */
export default function CTASection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="w-full bg-navy-900 py-24 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
            Ready to build systems that make your business run better?
          </h2>
          <p className="text-base text-slate-400 mb-8">
            Let's build the right software and AI systems for your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 text-sm font-medium text-white btn-gradient rounded-lg hover:brightness-110 hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
            >
              Book a Discovery Call
              <FiArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="px-6 py-3 text-sm font-medium text-slate-300 border border-purple-300 rounded-lg hover:bg-purple-50 hover:text-white transition-all duration-200 flex items-center gap-2"
            >
              Explore Our Services
              <FiArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
