import React from "react";
import styles from "./styles.module.css";

function Header({title, subtitle}) {
  return (
    <div>
      {" "}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.paragraph}>
        {subtitle}
      </p>
    </div>
  );
}

export default Header;
