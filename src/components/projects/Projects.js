import { useState } from 'react';
import styles from './projects.module.scss';
import SideBorder from '../sideBorder/SideBorder';
import { jpass, fitness, whoop, weather, portfolio } from './texts';

const Projects = () => {
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

      case 'whoop':
        setShowProject({ ...showProject });
        setShowProject({ fitnessState: true });
        text = whoop;
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

    header.textContent = text.header;
    description.textContent = text.description;
    top1.textContent = text.top1;
    top2.textContent = text.top2;
    top3.textContent = text.top3;
    bottom1.textContent = text.bottom1;
    bottom2.textContent = text.bottom2;
    bottom3.textContent = text.bottom3;
  };

  return (
    <div className={styles.projects} id="projects">
      <SideBorder down={'skills'} />
      <div className={styles.current}>current</div>
      <div className={styles.projectsHeader}>PROJECTS</div>
      <div className={styles.container}>
        <div
          className={`${styles.project} ${styles.jpass}`}
          id="jpass"
          onClick={switchTo}
        >
          <div className={styles.projectHeader} id="jpass">
            JPass
          </div>
          <div className={styles.projectDescript} id="jpass">
            A React password manager.
          </div>
        </div>

        <div
          className={`${styles.project} ${styles.fitness}`}
          id="fitness"
          onClick={switchTo}
        >
          <div className={styles.projectHeader} id="fitness">
            Live Fitness
          </div>
          <div className={styles.projectDescript} id="fitness">
            A React password manager.
          </div>
        </div>

        <div className={`${styles.middle}`}>
          <div className={styles.middleHeader} id="header">
            {jpass.header}
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

        <div
          className={`${styles.project} ${styles.weather}`}
          id="whoop"
          onClick={switchTo}
        >
          <div className={styles.projectHeader} id="whoop">
            Whoop
          </div>
          <div className={styles.projectDescript} id="whoop">
            A React Weather API.
          </div>
        </div>

        <div
          className={`${styles.project} ${styles.weather}`}
          id="weather"
          onClick={switchTo}
        >
          <div className={styles.projectHeader} id="weather">
            Weather
          </div>
          <div className={styles.projectDescript} id="weather">
            A React Weather API.
          </div>
        </div>

        <div
          className={`${styles.project} ${styles.portfolio}`}
          id="portfolio"
          onClick={switchTo}
        >
          <div className={styles.projectHeader} id="portfolio">
            Portfolio
          </div>
          <div className={styles.projectDescript} id="portfolio">
            React built portfolio.
          </div>
        </div>

        <div
          className={`${styles.project} ${styles.calories}`}
          id="calories"
          onClick={switchTo}
        >
          <div className={styles.projectHeader} id="calories">
            Calorie Tracker
          </div>
          <div className={styles.projectDescript} id="calories">
            A React Complex macro tracker.
          </div>
        </div>
      </div>

      <div className={styles.more}>More to come</div>
    </div>
  );
};

export default Projects;
