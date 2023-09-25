'use client';

import React from 'react';
import Image from 'next/image';
import banner from '../../../public/images/banner.png';
import styles from './styles.module.css';
import iconOne from '../../../public/icons/first-icon.png';
import iconTwo from '../../../public/icons/second-icon.png';
import iconThree from '../../../public/icons/third-icon.png';

// eslint-disable-next-line react/prop-types
function Homescreen({ handleNext }) {
  return (
    <div className={styles.container}>
      <section>
        <span className="w-full flex justify-center">
          <Image src={banner} alt="banner" />
        </span>

        <section className={styles.welcome}>
          <h1 className={styles.title}>
            PostPilot helps you take flight with your social media content.
          </h1>
          {/* Your icon and text components go here */}
          <div className={styles.iconandtext}>
            <span className={styles.iconSpan}>
              <Image src={iconOne} alt="icon" />
              <p className={styles.text}>
                Welcome to your co-pilot for everyday post inspiration.
              </p>
            </span>
            <span className={styles.iconSpan}>
              <Image src={iconTwo} alt="icon" />
              <p className={styles.text}>
                Tell us your interests, and we’ll guide your social account.
              </p>
            </span>
            <span className={styles.iconSpan}>
              <Image src={iconThree} alt="icon" />
              <p className={styles.text}>
                Build followers, reach your goals and unleash your creativity!
              </p>
            </span>
          </div>
          <button type="button" className={styles.button} onClick={handleNext}>
            Let’s go!
          </button>
        </section>
      </section>
    </div>
  );
}

export default Homescreen;
