"use client";

import React, { useEffect, useRef } from "react";

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const spiceCount = isMobile ? 18 : 36;

    // Culinary Spice Types: Saffron Thread, Botanical Herb Leaf, Golden Ember, Star Anise Speck
    class CulinaryParticle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      type: "saffron" | "herb" | "ember" | "seed" = "saffron";
      speedY: number = 0;
      speedX: number = 0;
      rotation: number = 0;
      rotSpeed: number = 0;
      opacity: number = 0;
      maxOpacity: number = 0;
      life: number = 0;
      maxLife: number = 0;

      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 30;
        const types: ("saffron" | "herb" | "ember" | "seed")[] = ["saffron", "herb", "ember", "seed"];
        this.type = types[Math.floor(Math.random() * types.length)];
        
        if (this.type === "saffron") {
          this.size = Math.random() * 8 + 6; // Long saffron thread
          this.maxOpacity = Math.random() * 0.45 + 0.2;
        } else if (this.type === "herb") {
          this.size = Math.random() * 6 + 4; // Botanical micro leaf
          this.maxOpacity = Math.random() * 0.35 + 0.15;
        } else if (this.type === "ember") {
          this.size = Math.random() * 3 + 1.5; // Glowing amber dot
          this.maxOpacity = Math.random() * 0.5 + 0.2;
        } else {
          this.size = Math.random() * 3.5 + 2; // Spice seed
          this.maxOpacity = Math.random() * 0.3 + 0.15;
        }

        this.speedY = Math.random() * 0.45 + 0.15;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = 0;
        this.life = 0;
        this.maxLife = Math.random() * 350 + 250;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.006) * 0.3;
        this.rotation += this.rotSpeed;
        this.life++;

        if (this.life < 60) {
          this.opacity = (this.life / 60) * this.maxOpacity;
        } else if (this.life > this.maxLife - 60) {
          this.opacity = ((this.maxLife - this.life) / 60) * this.maxOpacity;
        }

        if (this.y < -20 || this.life >= this.maxLife) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        if (this.type === "saffron") {
          // Curved vibrant saffron stamen
          ctx.beginPath();
          ctx.moveTo(-this.size / 2, 0);
          ctx.quadraticCurveTo(0, -this.size / 3, this.size / 2, 0);
          ctx.strokeStyle = `rgba(217, 93, 38, ${this.opacity})`;
          ctx.lineWidth = 1.6;
          ctx.stroke();
        } else if (this.type === "herb") {
          // Green sage/coriander micro leaf
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size / 2, this.size / 3.5, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(42, 71, 54, ${this.opacity})`;
          ctx.fill();
        } else if (this.type === "ember") {
          // Warm gold simmering dot
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 146, 36, ${this.opacity})`;
          ctx.fill();
        } else {
          // Spice seed (mustard / star anise point)
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(184, 71, 20, ${this.opacity * 0.8})`;
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const particles: CulinaryParticle[] = [];
    for (let i = 0; i < spiceCount; i++) {
      particles.push(new CulinaryParticle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2] opacity-75"
    />
  );
};
