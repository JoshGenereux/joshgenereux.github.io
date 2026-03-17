import React from 'react';
import styles from './skills.module.scss';
import SideBorder from '../sideBorder/SideBorder';

const Skills = () => {
  return (
    <div className={styles.skills} id="resume">
      <SideBorder down={'contact'} />
      <div className={styles.subHeader}>Experience & Skills</div>
      <div className={styles.header}>Professional Background</div>
      <div className={styles.headerBorder}></div>

      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.work}>Professional Experience</div>
          <div className={styles.descript}>
            <span className={styles.dev}>Stratacache</span>
            &nbsp; Front-End Engineer since May 2022. Contributed to large-scale digital
            menu board systems used by national food industry clients. Built and
            maintained Vue and TypeScript applications, resolved production issues,
            refactored legacy components, and collaborated in Agile sprint cycles to
            deliver stable production releases.
          </div>
        </div>

        <div className={styles.innerContainer}>
          <div className={styles.education}>Education</div>
          <div className={styles.descript}>
            <span className={styles.dev}>
              DevMountain Web Development Program
              <br />
            </span>
            Completed immersive web development training focused on full-stack JavaScript
            applications, modern front-end frameworks, and relational database design.
            Built multiple production-style applications utilizing React, Node.js, and
            SQL.
          </div>
        </div>

        <div className={styles.innerContainer}>
          <div className={styles.skillsName}>Technical Skills</div>

          <div className={styles.skillsBox}>
            <div className={styles.box}>
              <div className={styles.frontEnd}>Languages & Frameworks</div>
              <ul className={styles.frontList}>
                <li className={styles.frontLi}>JavaScript</li>
                <li className={styles.frontLi}>TypeScript</li>
                <li className={styles.frontLi}>Java</li>
                <li className={styles.frontLi}>Python</li>
                <li className={styles.frontLi}>React.js</li>
                <li className={styles.frontLi}>Next.js</li>
                <li className={styles.frontLi}>Vue.js</li>
                <li className={styles.frontLi}>Svelte</li>
                <li className={styles.frontLi}>Node</li>
              </ul>
            </div>

            <div className={styles.box}>
              <div className={styles.frontEnd}>Data & APIs</div>
              <ul className={styles.frontList}>
                <li className={styles.frontLi}>REST APIs</li>
                <li className={styles.frontLi}>Axios / Fetch</li>
                <li className={styles.frontLi}>SQL</li>
                <li className={styles.frontLi}>PostgreSQL</li>
                <li className={styles.frontLi}>JSON Logic</li>
              </ul>
            </div>

            <div className={styles.box}>
              <div className={styles.frontEnd}>Tools & Practices</div>
              <ul className={styles.frontList}>
                <li className={styles.frontLi}>Git</li>
                <li className={styles.frontLi}>GitHub / GitLab</li>
                <li className={styles.frontLi}>Jira</li>
                <li className={styles.frontLi}>Agile / Scrum</li>
                <li className={styles.frontLi}>Code Reviews</li>
                <li className={styles.frontLi}>Component Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
