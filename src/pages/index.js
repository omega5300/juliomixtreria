import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ProjectStars from '@site/src/components/ProjectStars';
import ZonaProgramador from '@site/src/components/ZonaProgramador';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <h1 className="hero__title">{siteConfig.title}</h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="inicio"
      description="portafolio web de mi marca personal acerca de mi trabajo como desarrollador multimedia">
      <Head>
        <meta name="keywords" content="portfolio, fotografo, web, mixtreria, juliomixtreria, desarrollo web con juliomixtreria" />
        <meta name="robots" content="index,follow" />
        <base href="https://julio-mixtreria.web.app" />
        <link rel="canonical" href="https://julio-mixtreria.web.app/" />
      </Head>
      <HomepageHeader />
      <main>
        <ZonaProgramador />
        <ProjectStars />
      </main>
    </Layout>
  );
}
