import React, { useState } from 'react';
import { Header } from '../../components/header';
import { Intro } from '../../components/intro';
import { MigrateBox } from '../../components/migrateBox';
import styles from './Migrate.module.scss';

export const Migrate: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
      <div className={styles.back}>
        <Header />
        <div className={styles.migrate}>
          <div className={styles.migrateBody}>
            <p className={styles.title}>Wolf Game</p>
            <div className={styles.introLayout}>
              <Intro 
                full='700px'
                url='./img/migration.gif'
                explain1='Today begins the Great Rescue of 13,809 Sheep and Wolves.'
                explain2='Next week come precious WOOL Pouches, tied to ownership of Sheep and Wolves.'
                explain3='The game has much in store for you. May the best players prosper.'
              />
            </div>
            <div className={styles.migrateBoxs}>
              <MigrateBox 
                content='NFTs you need to migrate. No rush or time limit.'
                title='Legacy NFTs'
              />
              <MigrateBox 
                content='NFTs you already migrated'
                title='Migrated NFTs'
              />
            </div>
          </div>
        </div>
      </div>
  );
};
