import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const DocCards = [
  {
    title: 'Getting Started',
    emoji: '🚀',
    description: 'Set up your environment and run the project in under 10 minutes.',
    to: '/docs/getting-started',
  },
  {
    title: 'Installation',
    emoji: '📦',
    description: 'Local dev, GitHub Pages, and Docker deployment options.',
    to: '/docs/installation',
  },
  {
    title: 'Configuration',
    emoji: '⚙️',
    description: 'Customize site metadata, navbar, versioning, i18n, and branding.',
    to: '/docs/configuration',
  },
  {
    title: 'Troubleshooting',
    emoji: '🔧',
    description: 'Fix common build errors, CI failures, and locale issues.',
    to: '/docs/troubleshooting',
  },
  {
    title: 'Tutorial',
    emoji: '📖',
    description: 'Step-by-step guide — creating pages, blog posts, and more.',
    to: '/docs/intro',
  },
  {
    title: 'Blog',
    emoji: '📝',
    description: 'Updates, release notes, and announcements from the team.',
    to: '/blog',
  },
];

const Versions = [
  { label: 'v3.0', to: '/docs/getting-started', badge: 'Latest' },
  { label: 'v2.0', to: '/docs/2.0/getting-started', badge: 'v2' },
  { label: 'v1.0', to: '/docs/1.0/getting-started', badge: 'Legacy' },
  { label: 'Next', to: '/docs/next/getting-started', badge: 'Unreleased' },
];

function DocCard({ title, emoji, description, to }) {
  return (
    <Link to={to} className={styles.docCard}>
      <span className={styles.docCardEmoji}>{emoji}</span>
      <Heading as="h3" className={styles.docCardTitle}>{title}</Heading>
      <p className={styles.docCardDesc}>{description}</p>
      <span className={styles.docCardArrow}>→</span>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link className="button button--secondary button--lg" to="/docs/getting-started">
              Get Started →
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/docs/intro">
              Tutorial
            </Link>
          </div>
          <div className={styles.versionRow}>
            {Versions.map((v) => (
              <Link key={v.label} to={v.to} className={styles.versionPill}>
                <span className={styles.versionPillLabel}>{v.label}</span>
                <span className={styles.versionPillBadge}>{v.badge}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className={styles.docsSection}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>Documentation</Heading>
            <p className={styles.sectionSubtitle}>
              Everything you need to build, deploy, and maintain your project.
            </p>
            <div className={styles.docGrid}>
              {DocCards.map((card) => (
                <DocCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
