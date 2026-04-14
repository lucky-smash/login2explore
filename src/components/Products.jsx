import './Products.css';

const products = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#g1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#00d4ff"/><stop offset="1" stopColor="#7b2ff7"/></linearGradient></defs>
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'PowerIndeX',
    subtitle: 'Java Database & Indexing Engine',
    desc: 'Real-time, lightweight, high-performance Java database and indexing engine. Manages data in multiple-column, key-value pair, in-memory data structures.',
    link: 'https://powerindex.in',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(123,47,247,0.1))',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#g2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="g2" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#7b2ff7"/><stop offset="1" stopColor="#f50057"/></linearGradient></defs>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: 'JsonPowerDB',
    subtitle: 'REST-Based Micro-services API',
    desc: 'High-performance, RESTful web services JSON database server — energized by PowerIndeX. Document store, key-value, relational, and geospatial all in one.',
    link: 'https://login2explore.com/jpdb/',
    gradient: 'linear-gradient(135deg, rgba(123,47,247,0.1), rgba(245,0,87,0.1))',
  },
];

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__header">
          <span className="section-label">Our Products</span>
          <h2 className="section-title">
            Vivifying <span className="gradient-text">Data Processing</span>
          </h2>
          <p className="section-subtitle">
            Built with core technologies like C++ and Java to meet the demands
            of real-time information processing from ever-growing data streams.
          </p>
        </div>

        <div className="products__grid">
          {products.map((product, i) => (
            <a
              key={i}
              href={product.link}
              target="_blank"
              rel="noreferrer"
              className="product-card"
              style={{ '--card-gradient': product.gradient }}
            >
              <div className="product-card__icon">{product.icon}</div>
              <div className="product-card__content">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__subtitle">{product.subtitle}</p>
                <p className="product-card__desc">{product.desc}</p>
              </div>
              <div className="product-card__arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
