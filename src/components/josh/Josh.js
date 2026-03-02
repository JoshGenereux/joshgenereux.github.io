import styles from './josh.module.scss';
import SideBorder from '../sideBorder/SideBorder';
import { useState } from 'react';
import { about, hobbies, past } from '../../texts/about.js';

const Josh = () => {
  const [aboutMe, setAbout] = useState({
    ...about,
  });

  const [index, setIndex] = useState(1);

  const switchNext = e => {
    e.preventDefault();
    const forward = e?.target?.id === 'forward';
    let count = index;

    switch (count) {
      case 1:
        if (forward) {
          setAbout({ ...hobbies });
          setIndex(2);
        } else {
          setAbout({ ...past });
          setIndex(3);
        }
        break;
      case 2:
        if (forward) {
          setAbout({ ...past });
          setIndex(3);
        } else {
          setAbout({ ...about });
          setIndex(1);
        }
        break;
      case 3:
        if (forward) {
          setAbout({ ...about });
          setIndex(1);
        } else {
          setAbout({ ...hobbies });
          setIndex(2);
        }
        break;
      default:
        setAbout({ ...about });
        setIndex(1);
        return;
    }
  };

  return (
    <div className={styles.josh} id="josh">
      <SideBorder className={styles.SideBorder} down={'projects'} />

      <div className={styles.picContainer}>
        <div className={styles.picCover}></div>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.headerDescript}>{aboutMe.subheader}</div>

        <div className={styles.header}>{aboutMe.header}</div>

        <div className={styles.bar}></div>

        <div className={styles.textContainer}>
          <div className={styles.aboutText}>{aboutMe.about}</div>
        </div>

        <div className={styles.containers}>
          <div className={styles.container}>
            <span className={styles.top}>{aboutMe.top}</span>
            <span className={styles.bottom}>{aboutMe.bottom}</span>
          </div>

          <div className={styles.container}>
            <span className={styles.top}>{aboutMe.top2}</span>
            <span className={styles.bottom}>{aboutMe.bottom2}</span>
          </div>

          <div className={styles.container}>
            <span className={styles.top}>{aboutMe.top3}</span>
            <span className={styles.bottom}>{aboutMe.bottom3}</span>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.leftButton} id="back" onClick={switchNext}>
            {'>'}
          </button>

          <div className={styles.centerButton}>{aboutMe.description}</div>

          <button className={styles.rightButton} id="forward" onClick={switchNext}>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Josh;
