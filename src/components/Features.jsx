import { useEffect, useRef } from 'react';
import featuresBg from '../assets/features-bg.png';
import './Features.css';

const features = [
  { icon: '📄', title: 'Document Store', desc: 'Store structured, semi-structured, and unstructured data along with files and big-data.' },
  { icon: '🔌', title: '100% REST-API', desc: 'Free from technology constraints — use from any language via HTTP REST API.' },
  { icon: '☁️', title: 'DBaaS', desc: 'Available as shared environment or independent server on Internet / Intranet / Cloud.' },
  { icon: '🔒', title: 'Multi-Layer Security', desc: 'Dynamic connection tokens with secure data at movement and at rest.' },
  { icon: '⚡', title: 'In-Memory IDBMS', desc: "World's first In-Memory Indexed DBMS that is secure, fast, and easy." },
  { icon: '🌐', title: 'GeoSpatial API', desc: 'Analyze and reveal patterns related to location data and time on Earth.' },
  { icon: '📊', title: 'RDBMS APIs', desc: 'Dynamic relational constraints — manage relational data without pre-defining PK, FK, UK.' },
  { icon: '🔑', title: 'Key-Value Store', desc: 'Useful for caching and session management to accelerate application data.' },
  { icon: '🚀', title: 'Serverless Support', desc: 'Minimum learning curves, builds faster, cuts time to market.' },
  { icon: '🧩', title: 'Pluggable Framework', desc: 'Plugin new features and APIs into a running instance with zero downtime.' },
  { icon: '💾', title: 'Drive APIs', desc: 'All-in-one backend for upload, download, and management of text, binary, and media files.' },
  { icon: '📈', title: 'Real-time DBMS', desc: 'AI JS library to sync data dynamically on client local storage in real-time.' },
];

export default function Features() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('feature-card--visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = gridRef.current?.querySelectorAll('.feature-card');
    cards?.forEach(card => observer.observe(card));
    return () => cards?.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <section className="features" id="features">
      <div className="features__bg" style={{ backgroundImage: `url(${featuresBg})` }} />
      <div className="features__overlay" />

      <div className="container features__container">
        <div className="features__header">
          <span className="section-label">Why JsonPowerDB</span>
          <h2 className="section-title">
            A Pure JSON Database <br />
            <span className="gradient-text">& Much More</span>
          </h2>
          <p className="section-subtitle">
            The combination of features makes JsonPowerDB the world's first
            IDBMS with lightning-fast performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" ref={gridRef}>
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <span className="feature-card__icon">{f.icon}</span>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
