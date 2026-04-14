import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Tools', href: '#tools' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="24" height="24" rx="6" stroke="url(#logo-grad)" strokeWidth="2.5" />
              <path d="M9 9h4v4H9zM15 15h4v4h-4z" fill="url(#logo-grad)" />
              <path d="M9 15h4v4H9z" fill="rgba(0,212,255,0.3)" />
              <path d="M15 9h4v4h-4z" fill="rgba(123,47,247,0.3)" />
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#00d4ff" />
                  <stop offset="1" stopColor="#7b2ff7" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="navbar__logo-text">
            L<span className="navbar__logo-highlight">ogin</span>2
            <span className="navbar__logo-accent">X</span>plore
          </span>
        </a>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a href="#home" className="btn btn--primary btn--sm" onClick={() => setMobileOpen(false)}>
              Get Started Free
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <a
            href="https://api.jsonpowerdb.com:5567/user/index.html"
            className="navbar__login"
            target="_blank" rel="noreferrer"
          >
            Log In
          </a>
          <a href="#home" className="btn btn--primary btn--sm">
            Get Started
          </a>
        </div>

        <button
          className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
