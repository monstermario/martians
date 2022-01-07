import React, { useState } from 'react';
import { Header } from '../../components/header';
import styles from './Land.module.scss';

export const Land: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div className={styles.landwrap}>
      <div className={styles.back}></div>
      <Header />
      <div>
        
      </div>
    </div>
  );
};
