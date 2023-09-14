import Link from "next/link";
import styles from "./styles.module.css";
import googleIcon from "../../../public/icons/googleIcon.png";
import appleIcon from "../../../public/icons/appleIcon.png";
import Image from "next/image";

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
  // Render your form fields for step 1 here
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Great! Let’s start by setting up your account.
      </h1>

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
        <button className={styles.createAccountButton} onClick={handleNext}>Create account</button>
        <span className="mt-2 mb-2 min-[390px]:mt-4 min-[390px]:mb-4">OR</span>
        <button
          className={`${styles.createAccountButton} ${styles.googleButton}`}
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
        <p className="font-normal text-sm mt-4">
          Already have an account? <span className="font-medium">Log in</span>
        </p>
      </section>
    </div>
  );
}

export default Accounts;
