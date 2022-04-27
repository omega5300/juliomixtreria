import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export default function ProjectStars() {
  const cardProjects = [
    {
      img: 'img/stack-analyze-npm.png',
      title: 'stack-analyze',
      repo: 'https://github.com/stack-analyze/stack-analyze',
    },
    {
      img: 'img/neo-jquery.png',
      title: 'neo-jquery',
      repo: 'https://github.com/omega5300/neo-jquery',
    },
  ];
  
  return (
    <section className="container">
      <h2 className={clsx('text--center', styles.title)}>Projectos destacados</h2>
      <p>
        muestra de los projectos de codigo abierto mas importantes y a los que me gusta dedicar tiempo para mejorar y agregar novedades con exito moderador en NPM.
      </p>
      <article className={styles.cards}>
        {
          React.Children.toArray(
            cardProjects.map(cardProject => (
              <figure className={styles.card}>
                <img 
                  src={cardProject.img} 
                  alt={cardProject.title} 
                  class={styles.cardImage} 
                />
                <figcaption className={styles.buttons}>
                  <h3 className="text--center">{cardProject.title}</h3>
                  <a 
                    href={cardProject.repo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="button button--primary button--ig"
                  >
                    github del proyecto
                  </a>
                </figcaption>
              </figure>
            ))
          )
        }
      </article>
    </section>
  );
}