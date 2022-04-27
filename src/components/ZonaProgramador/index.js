import React from 'react'
import clsx from 'clsx'
import styles from './index.module.css'

export default function ZonaProgramador() {
  const photos = [
    {
      url: 'photos/zona-de-programador-1.JPG',
      title: 'zona de programador 1',
    },
    {
      url: 'photos/zona-de-programador-2.JPG',
      title: 'zona de programador 2',
    },
    {
      url: 'photos/zona-de-programador-3.JPG',
      title: 'zona de programador 3',
    },
    {
      url: 'photos/zona-de-programador-4.JPG',
      title: 'zona de programador 4',
    },
    {
      url: 'photos/zona-de-programador-5.JPG',
      title: 'zona de programador 5',
    },
    {
      url: 'photos/zona-de-programador-6.JPG',
      title: 'zona de programador 6',
    },
    {
      url: 'photos/zona-de-programador-bonus1.JPG',
      title: 'zona de programador bonus 1',
    },
    {
      url: 'photos/zona-de-programador-bonus2.JPG',
      title: 'zona de programador bonus 2',
    },
    {
      url: 'photos/zona-de-programador-bonus3.JPG',
      title: 'zona de programador bonus 3',
    },
    {
      url: 'photos/zona-de-programador-special.JPG',
      title: 'zona de programador special',
    },
  ];
  
  return (
    <section className="container">
      <h2 className={clsx('text--center', styles.imgTitle)}>
        zona de programador saga fotográfica
      </h2>
      <p>
        primer serie de fotos que se realizo en un mes entre abril y mayo de año 2020 durante la pandemia aproveche una idea para pasarla bien.<br />
        <a href="https://500px.com/p/juliomixtreria/galleries/zona-de-programador" target="_blank" rel="noreferrer">ir a la galleria detallada</a>
      </p>
      <article className={styles.imgContainer}>
        {
          React.Children.toArray(
            photos.map(photo => <img className={styles.image} src={photo.url} alt={photo.title} />)
          )
        }
      </article>
    </section>
  );
}