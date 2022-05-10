import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './about.module.css';

export default function About() {
  const links = [
    {
  name: 'instagram',
  url: 'https://instagram.com/juliomixtreria'
},
{
  name: 'whatsapp',
  url: 'whatsapp://send?phone=+573107230981'
},
{
  name: 'telegram',
  url: 'https://telegram.me/omega5300'
},
{
  name: '500px',
  url: 'https://500px.com/juliomixtreria'
},
{
  name: 'github',
  url: 'https://github.com/omega5300'
},
{
  name: 'stackshare',
  url: 'https://stackshare.io/omega5300/omega5300'
},
  ];

  return (
    <Layout
      title="Sobre mi"
      description="acerca de mi julian cordoba 'julio' sobre donde me especializo">
      <Head>
        <meta name="keywords" content="juliomixtreria, juliomixtreria about, juliomixtreria fotografia, omega5300" />
        <meta name="robots" content="index, follow" />
        <base href="/" />
        <link rel="canonical" href="https://julio-mixtreria.web.app/about" />
      </Head>
      <main>
        <h1 className="text--center text--primary">sobre mi</h1>
        <section className={styles.aboutInfo}>
        <article className={styles.desc}>
          <figure className={styles.profile}>
            <img className={styles.profileImage} src="photos/profile.jpeg" alt="sobre mi" loading="eager" />
          </figure>
          <h2 className="text--center text--primary">Descripción</h2>
          <p className={styles.info}>
            Soy Julian David Cordoba Torres aka "julio" desarrollador multimedia con afinidades en la fotografía, desarrollador de aplicaciones en los campos web, consola y escritorio y sublimador de mugs apasionado por conocer nuevos rumbos en el campo de la programacion, sublimación y/o fotografia.
          </p>
        </article>
        <article>
          <h2 className="text--center text--primary">contacto y redes</h2>
          <ul className={styles.links}>
          {
            React.Children.toArray(
              links.map(link => (<li className={styles.item}>
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >{link.name}</a>
              </li>))
            )
          }
          </ul>
        </article>
        </section>
      </main>
    </Layout>
  );
}
