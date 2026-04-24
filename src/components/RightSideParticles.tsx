import { useRef, useEffect } from 'react';

export default function RightSideParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let w = 120;
    let h = window.innerHeight;

    const resize = () => {
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      x: number;
    }

    const particles: Particle[] = [];
    const count = 25;

    for (let i = 0; i < count; i++) {
      particles.push({
        y: Math.random() * h,
        size: Math.random() * 1.5 + 0.5,
        speedY: -(Math.random() * 0.2 + 0.05),
        opacity: Math.random() * 0.25 + 0.05,
        x: Math.random() * w,
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
        ctx.fillStyle = '#2D5BFF';
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

  return (
    <canvas
      ref={canvasRef}
      className="fixed right-0 top-0 w-[100px] h-full pointer-events-none z-30 opacity-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
