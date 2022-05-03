import React, { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './photos.module.css';

const photosDesc = [
  {
    image: '/photos/pasillo-oscuro.JPG',
    title: 'pasillo oscuro',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/fuck-you-thanos.JPG',
    title: 'fuck you thanos',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/astro-rural.jpg',
    title: 'astro rural',
    photoClass: 'modal-image-landscape',
    camera: 'canon 4000d'
  },
  {
    image: '/photos/artadecer-caleno.JPG',
    title: 'artadecer-caleño',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/lector.JPG',
    title: 'el lector',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/pasillo-infernal.JPG',
    title: 'pasillo infernal',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/dark-tree.JPG',
    title: 'arbol oscuro',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/zona-de-programador-bonus1.JPG',
    title: 'zona de programador bonus 1',
    photoClass: 'modal-image-landscape',
    camera: 'canon 4000d'
  },
  {
    image: '/photos/naturaleza-aracnida.JPG',
    title: 'naturaleza arácnida',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/nubes-dramaticas4.jpg',
    title: 'nubes dramaticas 4',
    photoClass: 'modal-image-landscape',
    camera: 'canon 4000d'
  },
  {
    image: '/photos/lienzo-de-la-atardecer.JPG',
    title: 'lienzo de la atardecer',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/nubes-dramaticas.jpg',
    title: 'nubes dramaticas',
    photoClass: 'modal-image-landscape',
    camera: 'canon 4000d'
  },
  {
    image: '/photos/nubes-dramaticas2.jpg',
    title: 'nubes dramaticas 2',
    photoClass: 'modal-image-landscape',
    camera: 'canon 4000d'
  },
  {
    image: '/photos/nubes-dramaticas6.JPG',
    title: 'nubes dramaticas 6',
    photoClass: 'modal-image-portait',
    camera: 'canon a2500'
  },
  {
    image: '/photos/el-contraste-de-la-botella.JPG',
    title: 'el contraste de la botella',
    photoClass: 'modal-image-portait',
    camera: 'canon a2500',
  },
  {
    image: '/photos/dia-casual.jpeg',
    title: 'día casual',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/light-painting.jpeg',
    title: 'light painting',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  },
  {
    image: '/photos/pasillo-infernal3.jpeg',
    title: 'pasillo infernal 3',
    photoClass: 'modal-image-landscape',
    camera: 'canon a2500'
  }
];

export default function Photos() {
  const [photoInfo, setPhotoInfo] = useState({
    image: '',
    title: '',
    photoClass: '',
    camera: ''
  });

  const [modal, setModal] = useState(false);

  const dialog = useRef();

  const openInfo = (info) => {
    dialog.current.showModal()
    setPhotoInfo(info);
  };

  const closeInfo = () => {
    dialog.current.close()
  };

  return (
    <Layout
      title="photos"
      description="Portafolio fotográfico de mi marca personal"
    >
      <Head>
        <meta name="keywords" content="juliomixtreria fotografia, juliomixtreria, fotografia" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://julio-mixtreria.web.app/photos" />
      </Head>
      <main>
        <h1 className="text--center text--primary margin-vert--md">portafolio fotográfico</h1>
        <section className={styles.pinLayout}>
          {
            React.Children.toArray(photosDesc.map(photo =>
              <img src={photo.image} alt={photo.title} className={styles.pinLayoutImg} onClick={() => openInfo(photo)} />
            ))
          }
        </section>
        <dialog ref={dialog} className={styles.modal}>
          <figure className={styles.modalContent}>
            <img className={photoInfo.photoClass} src={photoInfo.image} alt={photoInfo.title} loading="lazy" />
            <figcaption className={styles.modalImageTitle}>
              <strong>{photoInfo.title}</strong>
              <br />
              <em>cámara utilizada: {photoInfo.camera}</em>
            </figcaption>
            <button 
            onClick={closeInfo} 
            className="button button--danger button--block"
          >
            close &times;
          </button>
          </figure>
        </dialog>
      </main>
    </Layout>
  );
}
