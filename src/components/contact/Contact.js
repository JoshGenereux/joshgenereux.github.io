import React from 'react';
import styles from './contact.module.scss';
import SideBorder from '../sideBorder/SideBorder';

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <SideBorder down="" />
      <div className={styles.header}>Contact Me</div>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          <div className={styles.linkName}>Email</div>
          <a className={styles.link} href="mailto:josh.genereux13@gmail.com">
            Josh.Genereux13@gmail.com
          </a>
        </div>
        <div className={styles.linkContainer}>
          <div className={styles.linkName}>Github</div>
          <a href="https://github.com/JoshGenereux" className={styles.link}>
            Github
          </a>
        </div>
        <div className={styles.linkContainer}>
          <div className={styles.linkName}>Linkedin</div>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/joshua-genereux-8292a8223/"
          >
            &nbsp;LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
