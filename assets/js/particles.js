// ==========================================================================
// AMBIENT SAFFRON EMBER & GOLDEN SPICE PARTICLE ENGINE
// ==========================================================================

(function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(window.innerWidth < 768 ? 25 : 55, 60);

  // Colors: Warm Gold, Saffron Ember, Amber Glow
  const colors = [
    'rgba(212, 175, 55, ',   // Gold
    'rgba(255, 120, 0, ',    // Saffron Orange
    'rgba(243, 229, 171, ',  // Light Gold
    'rgba(255, 179, 71, '    // Amber
  ];

  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * height; // initial random distribution
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 20;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = Math.random() * 0.45 + 0.15;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      this.maxOpacity = Math.random() * 0.6 + 0.2;
      this.opacity = 0;
      this.life = 0;
      this.maxLife = Math.random() * 300 + 200;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.005) * 0.2;
      this.life++;

      // Fade in and out
      if (this.life < 50) {
        this.opacity = (this.life / 50) * this.maxOpacity;
      } else if (this.life > this.maxLife - 50) {
        this.opacity = ((this.maxLife - this.life) / 50) * this.maxOpacity;
      }

      if (this.y < -10 || this.life >= this.maxLife) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorBase + this.opacity + ')';
      ctx.shadowBlur = this.size * 3;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
})();
