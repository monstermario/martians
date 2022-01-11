import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Hamburger } from '../hamburger';
import styles from './Header.module.scss';

export const Header = () => {

  const [burgerOpen, setBurgerOpen] = useState<Boolean>(false);
  const toogleBtn =() => {
    setBurgerOpen(!burgerOpen);
  }
  return (
    <div className={styles.header}>
      <div className={styles.content}>
          <div className={styles.title}>
            Wolf Game
          </div>
          <div className={styles.links}>
            <Link to="/" >Migrate</Link>
            <Link to="/risky-game" >Risky Game</Link>
            <Link to="/pouches" >Wool Pouches</Link>
            <Link to="/land" >Land</Link>
            <Link to="/whitepaper" >Whitepaper</Link>
            <Link to="/whitepaper-v2" >Whitepaper V2</Link>
          </div>
      </div>
      {/* <div className={styles.hamburger} onClick={toogleBtn}>
        <Hamburger />
      </div> */}
    </div>
  )
};