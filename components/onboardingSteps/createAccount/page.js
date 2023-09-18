"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import googleIcon from "../../../public/icons/googleIcon.png";
import appleIcon from "../../../public/icons/appleIcon.png";
import Image from "next/image";
import Header from "../../header/page";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const inputFields = [
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email address here",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    placeholder: "i.e Bob Smith",
  },
];
function Accounts({ handleChange, handleNext }) {
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();
  // Render your form fields for step 1 here

  // Setting the provider
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, [])
  return (
    <div className={styles.container}>
     <Header title={"Great! Let’s start by setting up your account."}/>

      <section className={styles.formSection}>
        <div>
          {inputFields.map((field, index) => (
            <div key={index} className="mb-2">
              <label className={styles.label}>{field.label}</label>
              <input
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          ))}
        </div>
        
        <span className={styles.checkboxSpan}>
        <input type="checkbox" className={styles.checkbox} />
        <p className={styles.paragraph}>
          I agree to receive{" "}
          <Link href="" className={styles.legalPages}>
            {" "}
            promotional offers and deals from PostPilot.{" "}
          </Link>
        </p>
        </span>

        <span className={styles.checkboxSpan}>
        <input type="checkbox" className={styles.checkbox} />
        <p className={styles.paragraph}>
          By creating an account, you agree to our{" "}
          <Link href="" className={styles.legalPages}>
            {" "}
            Terms and Conditions{" "}
          </Link>{" "}
          and acknowledge the{" "}
          <Link href="" className={styles.legalPages}>
            Privacy Statement.
          </Link>
        </p>
        </span>
      </section>

      <section className={styles.buttons}>
        <button className={styles.createAccountButton} onClick={session?.user && handleNext}>Create account</button>
        <span className={styles.buttonDivide}>OR</span>
        <button
          className={`${styles.createAccountButton} ${styles.googleButton}`} onClick={signIn}
        >
          <Image src={googleIcon} alt="google" />
          Continue with Google
        </button>
        <button
          className={`${styles.createAccountButton} ${styles.appleButton}`}
        >
          <Image src={appleIcon} alt="apple" />
          Continue with Apple
        </button>
        <p className={styles.login}>
          Already have an account? <span className={styles.loginSpan}>Log in</span>
        </p>
      </section>
    </div>
  );
}

export default Accounts;
