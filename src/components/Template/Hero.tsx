import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={120} height={120} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Austin Rose</span>
        </h1>

        <p className="hero-tagline">TODO</p>

        <div className="hero-chips">
          <span className="hero-chip">TODO</span>
          <span className="hero-chip">TODO</span>
          <span className="hero-chip">TODO</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
