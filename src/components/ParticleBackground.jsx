import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles = [];
        const particleCount = 150;

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.angle = Math.random() * Math.PI * 2;
                // Start near center when respawning, randomly distributed when initializing
                this.radius = initial ? Math.random() * Math.max(width, height) / 2 : Math.random() * 50;
                this.speed = Math.random() * 1.5 + 0.5;
                this.length = Math.random() * 15 + 5;
                this.thickness = Math.random() * 2 + 1;
                this.color = getRandomColor();
            }

            update() {
                this.radius += this.speed;
                // Exponential speedup as it gets further from center for 3D effect
                this.speed *= 1.01;
                if (this.radius > Math.max(width, height)) {
                    this.reset();
                }
            }

            draw(ctx, cx, cy) {
                const x = cx + Math.cos(this.angle) * this.radius;
                const y = cy + Math.sin(this.angle) * this.radius;

                // Draw the tail slightly inwards
                const tailRadius = Math.max(0, this.radius - this.length - (this.speed * 2));
                const tailX = cx + Math.cos(this.angle) * tailRadius;
                const tailY = cy + Math.sin(this.angle) * tailRadius;

                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(x, y);
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.thickness;
                ctx.lineCap = 'round';
                ctx.stroke();
            }
        }

        const getColors = () => {
            return theme === 'dark'
                ? ['#f472b6', '#c084fc', '#fb7185', '#818cf8', '#a78bfa']
                : ['#ec4899', '#a855f7', '#f43f5e', '#6366f1', '#8b5cf6'];
        };

        const getRandomColor = () => {
            const colors = getColors();
            return colors[Math.floor(Math.random() * colors.length)];
        };

        for (let i = 0; i < particleCount; i++) {
            const p = new Particle();
            particles.push(p);
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            for (let particle of particles) {
                particle.update();
                particle.draw(ctx, cx, cy);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
        />
    );
};

export default ParticleBackground;
