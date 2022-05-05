import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './tech.module.css';

export default function Home() {
  const projects = [
    {
      name: 'stack-analyze npm',
      desc: 'conjunto de servicios de tecnologia lanzado en npm como app de consola enfocado a los usuarios avanzado',
      image: 'img/stack-analyze-npm.png',
      link: 'https://github.com/stack-analyze/'
    },
    {
      name: 'stack-analyze desktop',
      desc: 'versión gráfica de stack-analyze inspirada en la version npm 1.0.5 enfocado para escritorio',
      image: 'img/stack-analyze-desktop.png',
      link: 'https://github.com/stack-analyze/gui-stack-analyze'
    },
    {
      name: 'stack-analyze pwa',
      desc: 'version web basada en stack-analyze npm 1.0.7 su uso es mas universal de las otras dos y algunas herramientas simplificadas',
      image: 'img/stack-analyze-pwa.png',
      link: 'https://github.com/stack-analyze/stack-analyze-mobile'
    },
    {
      name: 'stack-analyze delta',
      desc: 'conjunto de servicios simplificados solo enfocado para mostrar las herramientas generacionales y contiene su propias herramientas unicas y para un publico general',
      image: 'img/delta.png',
      link: 'https://github.com/stack-analyze/stack-analyze-delta'
    },
    {
      name: 'stack-analyze delta core',
      desc: 'core de la edicion delta enfocado para crear su propio conjunto de servicios llamados delta-distro',
      image: 'img/delta-core.png',
      link: 'https://github.com/stack-analyze/stack-analyze-delta-core'
    },
    {
      name: 'neo-jquery',
      desc: 'libreria modular de javascript alternativa a jquery para el DOM, ajax y pionero de frontend scraping',
      image: 'img/neo-jquery.png',
      link: 'https://github.com/omega5300/neo-jquery'
    },
  ];
  
  return (
    <Layout
      title="projectos tecnologicos"
      description="muestra de mis projectos que me ha destacado como omega5300 mi username en github">
      <Head>
        <meta name="keywords" content="juliomixtreria, stack-analyze, juliomixtreria tech, neo-jquery, omega5300, omege5300 github" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://julio-mixtreria.web.app/tech-projects" />
      </Head>
      <header className="margin-vert--md">
        <h1 className="text--center text--primary">projectos tecnologicos</h1>
      </header>
      <main className={styles.techCards}>
        {
            React.Children.toArray(
              projects.map(project => (
                <section className={styles.card}>
                  <h2 className={styles.cardTitle}>{project.name}</h2>
                  <figure className={styles.cardHeader}>
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className={styles.cardImage}
                      loading="eager"
                    />
                    <figcaption className="text--capitalize">
                      {project.desc}
                    </figcaption>
                  </figure>
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noreferrer"
                    className="button button--link button--outline button--block"
                  >ir a el repo</a>
                </section>
              ))
            )
        }
      </main>
    </Layout>
  );
}
