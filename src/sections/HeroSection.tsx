import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

type ArmParticle = {
  arm: number;
  t: number;
  speed: number;
  size: number;
  alpha: number;
  color: string;
  offset: number;
  twinkle: number;
};

type DustParticle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  driftX: number;
  driftY: number;
};

function HeroGalaxyParticles({
  centerXRatio = 0.74,
  centerYRatio = 0.56,
}: {
  centerXRatio?: number;
  centerYRatio?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let time = 0;

    const armParticles: ArmParticle[] = [];
    const dustParticles: DustParticle[] = [];

    const armCount = 5;
    const colors = ['#2D5BFF', '#6EA8FF', '#AFC4FF', '#FFFFFF'];

    const rgba = (hex: string, alpha: number) => {
      if (hex === '#FFFFFF') return `rgba(255,255,255,${alpha})`;
      if (hex === '#6EA8FF') return `rgba(110,168,255,${alpha})`;
      if (hex === '#AFC4FF') return `rgba(175,196,255,${alpha})`;

      return `rgba(45,91,255,${alpha})`;
    };

    const getCenter = () => ({
      x: width * centerXRatio,
      y: height * centerYRatio,
    });

    const buildScene = () => {
      armParticles.length = 0;
      dustParticles.length = 0;

      const armParticleCount = Math.max(1200, Math.floor(width * 0.95));
      const dustCount = Math.max(150, Math.floor(width * 0.12));

      for (let i = 0; i < armParticleCount; i++) {
        armParticles.push({
          arm: Math.floor(Math.random() * armCount),
          t: Math.random(),
          speed: 0.0008 + Math.random() * 0.0012,
          size: 0.55 + Math.random() * 2.6,
          alpha: 0.14 + Math.random() * 0.72,
          color: colors[Math.floor(Math.random() * colors.length)],
          offset: (Math.random() - 0.5) * 1.05,
          twinkle: Math.random() * Math.PI * 2,
        });
      }

      for (let i = 0; i < dustCount; i++) {
        dustParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 0.35 + Math.random() * 1.8,
          alpha: 0.04 + Math.random() * 0.16,
          driftX: (Math.random() - 0.5) * 0.07,
          driftY: (Math.random() - 0.5) * 0.07,
        });
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;

      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildScene();
    };

    const getArmPosition = (p: ArmParticle) => {
      const { x: cx, y: cy } = getCenter();

      const maxRadius = Math.max(width, height) * 0.96;
      const spiralTurns = 2.75;

      const radius = 10 + p.t * maxRadius;
      const armBase = (p.arm / armCount) * Math.PI * 2;
      const baseAngle = armBase + p.t * spiralTurns * Math.PI * 2;
      const animatedAngle = baseAngle + time * p.speed;

      const armThickness = 6 + p.t * 36;

      const perpendicularOffset =
        p.offset * armThickness +
        Math.sin(time * 0.01 + p.twinkle + p.t * 10) * 2.5;

      const randomX =
        Math.sin(time * 0.005 + p.twinkle * 1.7 + p.t * 18) * 2.2;

      const randomY =
        Math.cos(time * 0.005 + p.twinkle * 1.3 + p.t * 16) * 2.2;

      const spreadX = 1.18;
      const spreadY = 0.78;

      const x =
        cx +
        Math.cos(animatedAngle) * radius * spreadX -
        Math.sin(animatedAngle) * perpendicularOffset +
        randomX;

      const y =
        cy +
        Math.sin(animatedAngle) * radius * spreadY +
        Math.cos(animatedAngle) * perpendicularOffset +
        randomY;

      return { x, y };
    };

    const drawBackgroundDust = () => {
      for (const d of dustParticles) {
        d.x += d.driftX;
        d.y += d.driftY;

        if (d.x < -10) d.x = width + 10;
        if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10;
        if (d.y > height + 10) d.y = -10;

        if (d.size > 1.15) {
          const glow = ctx.createRadialGradient(
            d.x,
            d.y,
            0,
            d.x,
            d.y,
            d.size * 10
          );

          glow.addColorStop(0, `rgba(110,168,255,${d.alpha * 0.35})`);
          glow.addColorStop(1, 'rgba(110,168,255,0)');

          ctx.beginPath();
          ctx.arc(d.x, d.y, d.size * 10, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.alpha})`;
        ctx.fill();
      }
    };

    const drawCoreGlow = () => {
      const { x: cx, y: cy } = getCenter();

      const glow1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, 340);
      glow1.addColorStop(0, 'rgba(110,168,255,0.25)');
      glow1.addColorStop(0.28, 'rgba(45,91,255,0.17)');
      glow1.addColorStop(0.55, 'rgba(45,91,255,0.07)');
      glow1.addColorStop(1, 'rgba(45,91,255,0)');

      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      const glow2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, 145);
      glow2.addColorStop(0, 'rgba(255,255,255,0.18)');
      glow2.addColorStop(0.3, 'rgba(142,162,255,0.14)');
      glow2.addColorStop(1, 'rgba(142,162,255,0)');

      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);
    };

    const drawGalaxyArms = () => {
      const armsMap: { x: number; y: number; t: number; alpha: number }[][] =
        Array.from({ length: armCount }, () => []);

      for (const p of armParticles) {
        const pos = getArmPosition(p);

        if (
          pos.x < -90 ||
          pos.x > width + 90 ||
          pos.y < -90 ||
          pos.y > height + 90
        ) {
          continue;
        }

        const pulse = 0.8 + (Math.sin(time * 0.03 + p.twinkle) + 1) * 0.12;
        const finalAlpha = p.alpha * pulse;

        armsMap[p.arm].push({
          x: pos.x,
          y: pos.y,
          t: p.t,
          alpha: finalAlpha,
        });

        if (p.size > 1.1) {
          const glow = ctx.createRadialGradient(
            pos.x,
            pos.y,
            0,
            pos.x,
            pos.y,
            p.size * 7
          );

          glow.addColorStop(0, rgba(p.color, finalAlpha * 0.34));
          glow.addColorStop(1, rgba(p.color, 0));

          ctx.beginPath();
          ctx.arc(pos.x, pos.y, p.size * 7, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = rgba(p.color, finalAlpha);
        ctx.fill();
      }

      for (let arm = 0; arm < armCount; arm++) {
        const points = armsMap[arm].sort((a, b) => a.t - b.t);

        for (let i = 0; i < points.length - 1; i += 2) {
          const p1 = points[i];
          const p2 = points[i + 1];

          if (!p2) continue;

          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 38) {
            const miniCount = Math.max(2, Math.floor(dist / 6));

            for (let k = 1; k < miniCount; k++) {
              const ratio = k / miniCount;
              const x = p1.x + dx * ratio;
              const y = p1.y + dy * ratio;
              const alpha = Math.min(p1.alpha, p2.alpha) * 0.32;

              ctx.beginPath();
              ctx.arc(x, y, 0.55, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(110,168,255,${alpha})`;
              ctx.fill();
            }
          }
        }
      }
    };

    const animate = () => {
      time += 1;

      ctx.clearRect(0, 0, width, height);

      drawCoreGlow();
      drawBackgroundDust();
      drawGalaxyArms();

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [centerXRatio, centerYRatio]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-navy-900"
    >
      {/* Galaxy particles only inside hero */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroGalaxyParticles centerXRatio={0.74} centerYRatio={0.56} />
      </div>

      {/* Soft glow around logo core */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_74%_56%,rgba(45,91,255,0.13),transparent_19%),radial-gradient(circle_at_74%_56%,rgba(110,168,255,0.08),transparent_34%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-6rem)]">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[55%] z-10"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-medium tracking-[0.15em] text-purple-light uppercase mb-4"
            >
              SOFTWARE &amp; AI COMPANY
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-[720px]"
            >
              Custom Software and AI Operating Systems That Help Businesses Run Better
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
            >
              From websites and mobile apps to internal platforms and AI operating systems, we build digital systems that reduce cost, save time, reduce manual effort, and help businesses solve operational problems faster.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 text-sm font-medium text-white btn-gradient rounded-lg hover:brightness-110 hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
              >
                Book a Free Consultation
                <FiArrowRight size={16} />
              </button>

              <button
                onClick={() => scrollToSection('#services')}
                className="px-6 py-3 text-sm font-medium text-slate-300 border border-purple-300 rounded-lg hover:bg-purple-50 hover:text-white transition-all duration-200 flex items-center gap-2"
              >
                See Our Services
                <FiArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Logo over galaxy core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="w-full lg:w-[45%] h-[420px] sm:h-[520px] lg:h-[620px] relative mt-12 lg:mt-0 flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center pointer-events-none">
              <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full bg-[radial-gradient(circle,rgba(110,168,255,0.22)_0%,rgba(45,91,255,0.12)_35%,transparent_72%)] blur-2xl" />

              <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-[radial-gradient(circle,rgba(45,91,255,0.08)_0%,transparent_70%)] blur-3xl" />

              <div className="animate-float relative z-10">
                <img
                  src="/logo.png"
                  alt="2YouDev 3D Logo"
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 object-contain drop-shadow-[0_0_35px_rgba(45,91,255,0.45)]"
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}