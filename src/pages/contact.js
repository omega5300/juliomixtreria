import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import emailjs from '@emailjs/browser';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './contact.module.css';

export default function Contact() {
  const {
    siteConfig: { customFields }
  } = useDocusaurusContext();

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const params = {
        name,
        lastname,
        email,
        subject,
        message
      };
      const result = await emailjs.send(
        customFields.emailID,
        customFields.templateID,
        params,
        customFields.publicKey,
      );
      alert(result.text);
    } catch (err) {
      console.error('FAILED...', err);
    }

    setName('');
    setLastname('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <Layout
      title="contacto"
      description="contactame para info de productos o servicios"
    >
      <Head>
        <meta name="noindex, nofollow" />
        <link rel="canonical" href="https://julio-mixtreria.web.app/contact" />
      </Head>
      <h1 className="text--center">contacto</h1>
      <section className={styles.contact}>
        <form
          onSubmit={sendEmail}
          className={styles.form}
        >
          <fieldset className={clsx(styles.inputContainer, styles.names)}>
            <input
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="nombre"
              required
              autocomplete="off"
              className={styles.inputField}
            />
            <input
              id="lastname"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              type="text"
              placeholder="apellido"
              required
              autocomplete="off"
              className={styles.inputField}
            />
          </fieldset>
          <fieldset className={styles.inputContainer}>
            <input
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="email"
              required
              autocomplete="off"
              className={styles.inputField}
            />
          </fieldset>
          <fieldset className={styles.inputContainer}>
            <input
              id="subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              type="text"
              placeholder="Tema"
              required
              autocomplete="off"
              className={styles.inputField}
            />
          </fieldset>
          <fieldset className={styles.inputContainer}>
            <textarea
              id="message"
              placeholder="mensaje"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              autocomplete="off"
              className={styles.msg}
            />
          </fieldset>
          <button className={styles.btn}>enviar formulario</button>
        </form>
        <figure>
          <img src="photos/contact-info.webp" alt="contact" loading="eager" />
          <figcaption className="text--center">déjame un mensaje.</figcaption>
        </figure>
      </section>
    </Layout>
  );
}
