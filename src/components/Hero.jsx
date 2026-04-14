import { useState, useEffect, useRef } from 'react';
import heroBg from '../assets/hero-bg.png';
import './Hero.css';

const stats = [
  { value: '10M+', label: 'API Calls/Day' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<1ms', label: 'Avg Response' },
  { value: '5000+', label: 'Developers' },
];

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open('https://api.jsonpowerdb.com:5567/user/register_dev.html', '_blank');
  };

  return (
    <section className="hero" id="home">
      <canvas ref={particlesRef} className="hero__particles" />
      <div className="hero__bg-image" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero__overlay" />

      {/* Floating orbs */}
      <div className="hero__orb hero__orb--cyan" />
      <div className="hero__orb hero__orb--purple" />

      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__badge animate-in">
            <span className="hero__badge-dot" />
            Powering Next-Gen Applications
          </div>

          <h1 className="hero__title animate-in animate-delay-1">
            Turbocharge Your Apps with{' '}
            <span className="hero__title-gradient">JsonPowerDB</span>
          </h1>

          <p className="hero__desc animate-in animate-delay-2">
            The revolutionary real-time database with built-in REST API.
            Lightning-fast indexing, multi-model support, and serverless
            architecture — all out of the box.
          </p>

          <div className="hero__actions animate-in animate-delay-3">
            <a href="#pricing" className="btn btn--lg btn--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Explore Plans
            </a>
            <a href="https://login2explore.com/jpdb/docs.html" target="_blank" rel="noreferrer" className="btn btn--lg btn--outline">
              View Docs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </div>

          <div className="hero__stats animate-in animate-delay-4">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__form-wrapper animate-in animate-delay-3">
          <div className="hero__form-card">
            <div className="hero__form-glow" />
            <h2 className="hero__form-title">Start <span>Free</span> Today</h2>
            <p className="hero__form-subtitle">No credit card required • Instant setup</p>

            <form className="hero__form" onSubmit={handleSubmit} id="register-form">
              <div className="hero__form-group">
                <label htmlFor="reg-name">Full Name</label>
                <input
                  type="text"
                  id="reg-name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="hero__form-group">
                <label htmlFor="reg-email">Email Address</label>
                <input
                  type="email"
                  id="reg-email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="hero__form-group">
                <label htmlFor="reg-phone">Contact Number</label>
                <input
                  type="tel"
                  id="reg-phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn--lg btn--primary hero__form-btn" id="register-btn">
                Create Free Account
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>

            <p className="hero__form-footer">
              Already have an account?{' '}
              <a href="https://api.jsonpowerdb.com:5567/user/index.html" target="_blank" rel="noreferrer">
                Log in →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
