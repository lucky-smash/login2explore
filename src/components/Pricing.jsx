import { useState } from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Free',
    tag: 'Start Using Now',
    price: '₹0',
    period: 'forever',
    highlight: false,
    limits: ['5 Databases', '50 Relations', '500 Indexes', '5,000 Rows'],
    features: ['REST API', 'Document Store', 'Key-Value DB', 'RDBMS API', 'GeoSpatial API', 'Dev Dashboard', 'JsonPowerSQL'],
    cta: 'Register Free',
    ctaLink: 'https://api.jsonpowerdb.com:5567/user/register_dev.html',
  },
  {
    name: 'Community',
    tag: 'Most Popular',
    price: '₹0',
    period: 'forever',
    highlight: true,
    limits: ['Unlimited* Databases', 'Unlimited* Relations', 'Unlimited* Indexes', 'Unlimited* Rows'],
    features: ['Everything in Free', 'Column API', 'Aggregation API', 'Drive API', 'CSV Import / Export', 'JPDB2JPDB API', 'High Availability'],
    cta: 'Contact Us',
    ctaLink: '#contact',
  },
  {
    name: 'Professional',
    tag: '2 Months Free Trial',
    price: '₹14,000',
    period: '/month',
    highlight: false,
    limits: ['Unlimited* Databases', 'Unlimited* Relations', 'Unlimited* Indexes', 'Unlimited* Rows'],
    features: ['Everything in Community', 'Priority Support', 'Dedicated Hosting', 'Custom Integrations', 'SLA Guarantee', 'Dedicated Server', 'Enterprise Security'],
    cta: 'Contact Sales',
    ctaLink: '#contact',
  },
];

export default function Pricing() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing__header">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="section-subtitle">
            From indie developers to enterprise teams — we have the perfect
            fit for your data management needs.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''} ${hoveredIdx === i ? 'pricing-card--hovered' : ''}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {plan.highlight && <div className="pricing-card__ribbon">Most Popular</div>}

              <div className="pricing-card__tag">{plan.tag}</div>
              <h3 className="pricing-card__name">{plan.name}</h3>

              <div className="pricing-card__price">
                <span className="pricing-card__amount">{plan.price}</span>
                <span className="pricing-card__period">{plan.period}</span>
              </div>

              <div className="pricing-card__limits">
                {plan.limits.map((limit, j) => (
                  <div key={j} className="pricing-card__limit">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    {limit}
                  </div>
                ))}
              </div>

              <div className="pricing-card__divider" />

              <ul className="pricing-card__features">
                {plan.features.map((feat, j) => (
                  <li key={j}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaLink}
                target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
                rel={plan.ctaLink.startsWith('http') ? 'noreferrer' : undefined}
                className={`btn btn--lg ${plan.highlight ? 'btn--primary' : 'btn--outline'} pricing-card__cta`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="pricing__note">* Limited by available memory</p>
      </div>
    </section>
  );
}
