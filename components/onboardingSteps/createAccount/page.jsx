'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, getProviders } from 'next-auth/react';
// import { useRouter } from 'next/router';
import styles from './styles.module.css';
import googleIcon from '../../../public/icons/googleIcon.png';
import xIcon from '../../../public/icons/x_icon.png';
import Header from '../../header/page';
import checked from '../../../public/icons/checked.png';

const inputFields = [
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email address here',
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'i.e Bob Smith',
  },
];
// eslint-disable-next-line react/prop-types
function Accounts({ handleNext, handleMultiNext }) {
  const [providers, setProviders] = useState(null);
  const [agreedToPromotions, setAgreedToPromotions] = useState(false); // Checkbox state
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  // const { data: session } = useSession();
  // Render your form fields for step 1 here

  // Setting the provider
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  // const googleSignIn = async () => {
  //   const signInResult = await signIn('google');

  //   if (!signInResult.error) {
  //       handleNext();
  //   }
  // }

  return (
    <div className={styles.container}>
      <Header title="Great! Let’s start by setting up your account." />

      <section className={styles.formSection}>
        <div>
          {inputFields.map((field) => (
            <div key={field.title} className="mb-2">
              <label htmlFor={field.label} className={styles.label}>
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                className={styles.input}
              />
            </div>
          ))}
        </div>

        <div className={styles.checkboxSpan}>
          <button type="button" className={styles.checkbox} onClick={() => setAgreedToPromotions(!agreedToPromotions)}>
            {agreedToPromotions && (
            <Image
              src={checked}
              // className={styles.checkIcon}
            />
            )}
          </button>
          <p className={styles.paragraph}>
            I agree to receive &nbsp;
            <Link href="/" className={styles.legalPages}>
              promotional offers and deals from PostPilot.
            </Link>
          </p>
        </div>

        <div className={styles.checkboxSpan}>
          <button type="button" className={styles.checkbox} onClick={() => setAgreedToTerms(!agreedToTerms)}>
            {agreedToTerms && (
            <Image
              src={checked}
              // className={styles.checkIcon}
            />
            )}
          </button>
          <p className={styles.paragraph}>
            By creating an account, you agree to our
            <Link href="/" className={styles.legalPages}>
              Terms and Conditions
            </Link>
            and acknowledge the
            <Link href="/" className={styles.legalPages}>
              Privacy Statement.
            </Link>
          </p>
        </div>
      </section>

      <section className={styles.buttons}>
        <button type="button" className={styles.createAccountButton} onClick={handleNext}>
          Create account
        </button>
        <span className={styles.buttonDivide}>OR</span>
        {providers && Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            className={`${styles.createAccountButton} ${styles.googleButton}`}
            onClick={() => signIn(provider.id)}
          >
            <Image src={googleIcon} alt="google" />
            Continue with Google
          </button>
        ))}
        <button
          type="button"
          className={`${styles.createAccountButton} ${styles.xButton}`}
          onClick={handleMultiNext}
        >
          <Image src={xIcon} alt="X-icon" />
          Log in with x (formerly Twitter)
        </button>
        <p className={styles.login}>
          Already have an account?
          <span className={styles.loginSpan}>Log in</span>
        </p>
      </section>
    </div>
  );
}

export default Accounts;
