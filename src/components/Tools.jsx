import './Tools.css';

const tools = [
  {
    num: '01',
    title: 'Indexing Tool',
    desc: 'Manually index and unindex preferred data, providing full control over database performance. Enhance search efficiency and customize indexes.',
    color: '#00d4ff',
  },
  {
    num: '02',
    title: 'Statistics Tool',
    desc: 'Perform real-time aggregate functions on your data, providing instant insights and analytics. Monitor trends with ease.',
    color: '#7b2ff7',
  },
  {
    num: '03',
    title: 'JPDB Copy Tool',
    desc: 'Seamless transfer or duplication of data between different JsonPowerDB databases. Migrate, backup, or replicate with clicks.',
    color: '#00e676',
  },
  {
    num: '04',
    title: 'CSV Import Tool',
    desc: 'Simplify bulk data handling with effortless CSV uploads. Automatic indexing and customizable column mapping included.',
    color: '#ff9100',
  },
];

export default function Tools() {
  return (
    <section className="tools" id="tools">
      <div className="container">
        <div className="tools__header">
          <span className="section-label">Developer Tools</span>
          <h2 className="section-title">
            Built for <span className="gradient-text">Developers</span>
          </h2>
          <p className="section-subtitle">
            Low-code utilities that generate ready-to-use JSON request code.
            Integrate with any language supporting HTTP.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="tool-card"
              style={{ '--tool-color': tool.color }}
            >
              <div className="tool-card__header">
                <span className="tool-card__num">{tool.num}</span>
                <div className="tool-card__line" />
              </div>
              <h3 className="tool-card__title">{tool.title}</h3>
              <p className="tool-card__desc">{tool.desc}</p>
              <div className="tool-card__glow" />
            </div>
          ))}
        </div>

        <div className="tools__cta">
          <a
            href="https://login2explore.com/jpdb-tools-page.php"
            target="_blank"
            rel="noreferrer"
            className="btn btn--lg btn--outline"
          >
            Explore All JPDB Tools
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
