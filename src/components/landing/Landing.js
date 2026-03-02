import React from 'react';
import styles from './landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.sideBug}>
        <div className={styles.sideTop}></div>
        <div className={styles.sideInfo}>
          <ul className={styles.ul}>
            <li className={styles.li}>3</li>
            <li className={styles.li}>9</li>
            <li className={styles.dot}>.</li>
            <li className={styles.li}>7</li>
            <li className={styles.li}>5</li>
            <li className={styles.li}>8</li>
            <li className={styles.li}>9</li>
            <li className={styles.li}>N</li>
            <li className={styles.li}>&nbsp;</li>
            <li className={styles.li}>8</li>
            <li className={styles.li}>4</li>
            <li className={styles.dot}>.</li>
            <li className={styles.li}>1</li>
            <li className={styles.li}>9</li>
            <li className={styles.li}>1</li>
            <li className={styles.li}>6</li>
            <li className={styles.li}>W</li>
          </ul>
        </div>
        <div className={styles.sideBottom}></div>
      </div>
      <div className={styles.header}>CHASE BUGS. BUILD DREAMS.</div>

      <div className={styles.links}>
        <div className={styles.linkContainer}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/joshua-genereux-8292a8223/"
          >
            &nbsp;LinkedIn
          </a>
        </div>
        <div className={styles.linkContainer}>
          <a className={styles.link} href="https://github.com/JoshGenereux">
            &nbsp;Github
          </a>
        </div>
        <div className={styles.linkContainer}>
          <a
            className={styles.link}
            href="https://docs.google.com/document/d/19zsoWqhQ_R5pins1R1dy6ohkc8d6Nek1yi7FDe-c1eY/edit?usp=sharing"
          >
            &nbsp;Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
