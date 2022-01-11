import React from 'react';
import styles from './Intro.module.scss';

type PageProps = {
  url?: string;
  full?: string;
  explain1?: string;
  explain2?: string;
  explain3?: string;
  explain4?: string;
};


export const Intro = ({
  url,
  full,
  explain1,
  explain2,
  explain3,
  explain4,
}:PageProps) => {
  return (
    <div className={styles.intro}
      style={{
        width: full,
      }}
    >
      <div className={styles.introBox}></div>
      <div className={styles.introBody}>
        <div className={styles.introContent}>
          <img src={url} width="300px" height="300px" alt="migration" />
          <div className={styles.statsContent}>
            <h1>Friends,</h1>
            <p>{explain1}</p>
            <p>{explain2}</p>
            <p>{explain3}</p>
            {/* <p>{explain4}</p> */}
            <p>- The Shepherd</p>
          </div>
        </div>
      </div>
    </div>
  );
};
