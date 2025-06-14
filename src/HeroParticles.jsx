import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    setSize();

    let width = canvas.width;
    let height = canvas.height;

    let particles = [];
    const initialNum = 240;

    const mouse = { x: width / 2, y: height / 2 };

    class Particle {
      constructor(x = Math.random() * width, y = Math.random() * height) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.age = 0;
      }

      update() {
        this.age++;
        this.radius *= 0.998;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          this.vx += dx * 0.0005;
          this.vy += dy * 0.0005;
        }

        this.vx *= 0.95;
        this.vy *= 0.95;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (this.radius < 0.1) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(225, 0, 152, 0.25)';
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < initialNum; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      particles = particles.filter(p => p.radius >= 0.1);

      const scrollY = window.scrollY + window.innerHeight;
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(Math.random() * width, scrollY - window.innerHeight + Math.random() * window.innerHeight * 2));
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY;
    });

    window.addEventListener('resize', () => {
      setSize();
      width = canvas.width;
      height = canvas.height;
    });

    init();
    animate();
  }, []);

  return <canvas ref={canvasRef} style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100%',
    zIndex: -1,
    pointerEvents: 'none'
  }} />;
};

export default ParticleCanvas;
