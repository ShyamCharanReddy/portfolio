import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', resize);

    // Interactive State
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    
    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    let mouseX = w / 2;
    let mouseY = h / 2;
    let targetMouseX = w / 2;
    let targetMouseY = h / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    type Star = {
      x: number;
      y: number;
      z: number; // depth/speed multiplier for parallax
      radius: number;
      alpha: number;
      twinkleSpeed: number;
      color: string;
      glow: string | null;
    };

    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      const count = Math.min((w * h) / 3000, 800);
      for (let i = 0; i < count; i++) {
        const isCyan = i % 5 === 0;
        const radius = Math.random() * 1.5;
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 2 + 0.1, // depth
          radius: radius,
          alpha: Math.random(),
          twinkleSpeed: (Math.random() - 0.5) * 0.03,
          color: isCyan ? 'rgba(0, 255, 255,' : 'rgba(255, 255, 255,',
          glow: radius > 1.2 ? (isCyan ? '#00ffff' : '#ffffff') : null,
        });
      }
    };
    initStars();

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Smooth interpolation for scroll and mouse
      scrollY += (targetScrollY - scrollY) * 0.1;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const mouseOffsetX = (mouseX - w / 2) * 0.05;
      const mouseOffsetY = (mouseY - h / 2) * 0.05;
      
      // Draw tiny subtle nebula gradient
      const gradient = ctx.createRadialGradient(w/2 - mouseOffsetX*2, h/2 - mouseOffsetY*2, 0, w/2, h/2, w);
      gradient.addColorStop(0, 'rgba(8, 20, 40, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Base autonomous movement (drift up)
        star.y -= star.z * 0.1;
        if (star.y < 0) star.y += h; // wrap internal coordinate
        
        // Calculate the physical screen rendered position with Parallax
        // Stars closer to viewer (higher z) move faster with scroll/mouse
        let drawX = star.x - (mouseOffsetX * star.z);
        let drawY = star.y - (scrollY * star.z * 0.4) - (mouseOffsetY * star.z);

        // Continuous wrap for infinite scroll effect
        drawX = (drawX % w + w) % w;
        drawY = (drawY % h + h) % h;

        // Twinkle
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1) {
          star.alpha = 1;
          star.twinkleSpeed *= -1;
        } else if (star.alpha < 0.1) {
          star.alpha = 0.1;
          star.twinkleSpeed *= -1;
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        
        ctx.fillStyle = `${star.color} ${star.alpha})`;
        ctx.fill();
        
        if (star.glow) {
            ctx.shadowBlur = 5;
            ctx.shadowColor = star.glow;
        } else {
            ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default SpaceBackground;
