import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Hamburger.module.scss';

export const Hamburger = () => {
  return (
    <div className={styles.hamburger}>
        <div className={styles.burgertitle}>
          Wolf Game
        </div>
        <div className={styles.burgerlinks}>
          <Link to="/#" >Migrate</Link>
          <Link to="/#" >Risky Game</Link>
          <Link to="/#" >Wool Pouches</Link>
          <Link to="/#" >Land</Link>
          <Link to="/#" >Whitepaper</Link>
          <Link to="/#" >Whitepaper V2</Link>
        </div>
    </div>
  )
};