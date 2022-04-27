import React, { useState } from 'react';
import clsx from 'clsx';
import { SliderData } from './SliderData'
import styles from './index.module.css';

export default function Carrousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalOfSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === totalOfSlides - 1
        ? 0
        : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0
        ? totalOfSlides - 1
        : totalOfSlides - 1
    );
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <span className={styles.leftArrow} onCLick={prevSlide}>&#10094;</span>
      <span className={styles.rightArrow} onClick={nextSlide}>&#10095;</span>
      {
        SliderData.map((slide, i) => (
          <article
            className={
              i === currentSlide
                ? clsx(styles.slide, styles.active)
                : styles.slide
            }
            key={i}
          >
            {
              i === currentSlide && (<img
                src={slide.image}
                alt={slide.mug}
                className={styles.image}
                loading="lazy"
              />)
            }
          </article>
        ))
      }
    </section>
  );
}

