import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PKG from '../../package.json';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className="patterns-hero-bank-note py-8 lg:py-16 text-center relative overflow-hidden dark:bg-gray-800">
        <div className="container">
          <h1 className="text-7xl font-brand font-bold mb-4 text-orange-600">{siteConfig.title}</h1>
          <p className="text-xl font-light mb-8">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
          <div className="mt-4">Currently <strong>v{PKG.version}</strong></div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
