import React from 'react';
import styles from './styles.module.css';

// eslint-disable-next-line react/prop-types
function Header({ title, subtitle }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.paragraph}>
        {subtitle}
      </p>
    </div>
  );
}

export default Header;
