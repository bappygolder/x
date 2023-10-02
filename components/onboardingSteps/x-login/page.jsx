/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import xIcon from '../../../public/icons/x_icon.png';

// eslint-disable-next-line react/prop-types
function XLogin({ handleNext }) {
  return (
    <div className={styles.xlogin}>
      <h1 className={styles.text}>For a more personalized experience, we recommend connecting your X (formerly Twitter) account.</h1>
      <button
        type="button"
        className={`${styles.createAccountButton} ${styles.xButton}`}
        onClick={handleNext}
      >
        <Image src={xIcon} alt="X-icon" />
        Log in with x (formerly Twitter)
      </button>
      <button type="button" className="font-poppins font-normal text-sm mt-4" onClick={handleNext}>I’ll do it later.</button>
    </div>
  );
}

export default XLogin;
