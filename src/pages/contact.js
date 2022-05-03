import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <Layout
      title="contacto"
      description="contactame para info de productos o servicios"
    >
      <Head>
        <meta name="noindex, nofollow" />
        <link rel="canonical" />
      </Head>
      <h1 className="text--center">contacto</h1>
      <form className={styles.form}>
        <fieldset className={clsx(styles.inputContainer, styles.names)}>
          <input 
            id="name" 
            type="text" 
            placeholder="nombre" 
            className={styles.inputField}
          />
          <input 
            id="lastname" 
            type="text" 
            placeholder="apellido" 
            className={styles.inputField}
          />
        </fieldset>
        <fieldset className={styles.inputContainer}>
          <input 
            id="email" 
            type="email" 
            placeholder="email" 
            className={styles.inputField}
          />
        </fieldset>
        <fieldset className={styles.inputContainer}>
          <input 
            id="tema" 
            type="text" 
            placeholder="Tema" 
            className={styles.inputField}
          />
        </fieldset>
        <fieldset className={styles.inputContainer}>
          <textarea 
            placeholder="mensaje"
            className={styles.msg}
          />
        </fieldset>
        <button className={styles.btn}>enviar formulario</button>
      </form>
    </Layout>
  );
}
