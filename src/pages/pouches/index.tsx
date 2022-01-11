import React, { useState } from 'react';
import { Header } from '../../components/header';
import { WalletButton } from '../../components/ui/walletButton';
import { WoodBox } from '../../components/ui/woodBox';
import styles from './Pouches.module.scss';

export const Pouches: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
      <div className={styles.back}>
        <Header />
        <div className={styles.pouches}>
          <div className={styles.pouchesBody}>
            <p className={styles.title}>WOOl Pouches</p>
            <div className={styles.wallet}>
              <div className={styles.walletBox}></div>
              <WalletButton color='#b11d18'/>
            </div>
          </div>
        </div>
      </div>
     
  );
};
