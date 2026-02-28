import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar} id="navBar">
      <button
        className={`${styles.button} ${styles.name}`}
        onClick={() =>
          document.getElementById('josh').scrollIntoView({ behavior: 'smooth' })
        }
      >
        About Me
      </button>
      <button
        className={styles.button}
        onClick={() =>
          document
            .getElementById('projects')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        Projects
      </button>

      <button
        className={styles.button}
        onClick={() =>
          document
            .getElementById('resume')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        Resume
      </button>
      <button
        className={styles.button}
        onClick={() =>
          document
            .getElementById('contact')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        Contact
      </button>
    </div>
  );
};

export default NavBar;
