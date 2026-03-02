import { useState } from 'react';
import styles from './projects.module.scss';
import SideBorder from '../sideBorder/SideBorder';
import mars from '../../assets/marspic.png';
import { jpass, fitness, weather, portfolio } from './texts';
import crosshair from '../../assets/focus.png';

const Project = () => {
  const nameArr = ['JPass', 'Live Fitness', 'Portfolio', 'Weather'];
  const idArr = ['jpass', 'fitness', 'portfolio', 'weather'];

  const [showProject, setShowProject] = useState({
    jpassState: false,
    fitnessState: false,
    weatherState: false,
    portfolioState: false,
  });

  const switchTo = e => {
    e.preventDefault();

    const element = e.target.id;
    let text = jpass;

    switch (element) {
      case 'jpass':
        setShowProject({ ...showProject });
        setShowProject({ jpassState: true });
        text = jpass;
        break;

      case 'fitness':
        setShowProject({ ...showProject });
        setShowProject({ fitnessState: true });
        text = fitness;
        break;

      case 'weather':
        setShowProject({ ...showProject });
        setShowProject({ weatherState: true });
        text = weather;
        break;

      case 'portfolio':
        setShowProject({ ...showProject });
        setShowProject({ portfolioState: true });
        text = portfolio;
        break;

      default:
        setShowProject({ ...showProject });
        setShowProject({ jpassState: true });
        text = jpass;
    }

    const header = document.getElementById('header');
    const description = document.getElementById('description');
    const top1 = document.getElementById('top1');
    const top2 = document.getElementById('top2');
    const top3 = document.getElementById('top3');
    const bottom1 = document.getElementById('bottom1');
    const bottom2 = document.getElementById('bottom2');
    const bottom3 = document.getElementById('bottom3');
    const link = document.getElementById('link');

    header.textContent = text.header;
    description.textContent = text.description;
    top1.textContent = text.top1;
    top2.textContent = text.top2;
    top3.textContent = text.top3;
    bottom1.textContent = text.bottom1;
    bottom2.textContent = text.bottom2;
    bottom3.textContent = text.bottom3;
    link.setAttribute('href', text.link);
  };

  return (
    <div className={styles.projects} id="projects">
      <SideBorder down={'resume'} />
      <div className={styles.current}>current</div>
      <div className={styles.projectsHeader}>PROJECTS</div>
      <div className={styles.container}>
        <div className={styles.headersContainer}>
          {nameArr.map((name, i) => (
            <div
              className={`${styles.projectHeader}`}
              id={idArr[i]}
              onClick={switchTo}
              key={i}
            >
              {name}
            </div>
          ))}
        </div>
        <div className={`${styles.middle}`}>
          <div className={styles.middleHeaderContainer}>
            <span className={styles.middleHeader} id="header">
              {jpass.header}
            </span>

            <a className={styles.link} href={jpass.link} id="link">
              Github Link{' >'}
            </a>
          </div>
          <div className={styles.middleDescript} id="description">
            {jpass.description}
          </div>
          <div className={styles.middleInfo}>
            <div className={styles.middleInfo__one}>
              <span className={styles.top} id="top1">
                {jpass.top1}
              </span>
              <span className={styles.bottom} id="bottom1">
                {jpass.bottom1}
              </span>
            </div>
            <div className={styles.middleInfo__two}>
              <span className={styles.top} id="top2">
                {jpass.top2}
              </span>
              <span className={styles.bottom} id="bottom2">
                {jpass.bottom2}
              </span>
            </div>
            <div className={styles.middleInfo__three}>
              <span className={styles.top} id="top3">
                {jpass.top3}
              </span>
              <span className={styles.bottom} id="bottom3">
                {jpass.bottom3}
              </span>
            </div>
          </div>
        </div>
        <img src={mars} className={styles.mars} alt="" />
        <img
          src={crosshair}
          className={`${styles.crosshair} ${styles.crosshairOne}`}
          alt=""
          onClick={switchTo}
          id="jpass"
        />
        <img
          src={crosshair}
          className={`${styles.crosshair} ${styles.crosshairTwo}`}
          alt=""
          onClick={switchTo}
          id="fitness"
        />
        <img
          src={crosshair}
          className={`${styles.crosshair} ${styles.crosshairThree}`}
          alt=""
          onClick={switchTo}
          id="weather"
        />
        <img
          src={crosshair}
          className={`${styles.crosshair} ${styles.crosshairFour}`}
          alt=""
          onClick={switchTo}
          id="calories"
        />
        <img
          src={crosshair}
          className={`${styles.crosshair} ${styles.crosshairFive}`}
          alt=""
          onClick={switchTo}
          id="portfolio"
        />
      </div>
      <div className={styles.more}>More to come</div>
    </div>
  );
};

export default Project;
