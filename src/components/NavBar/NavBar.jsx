import React from 'react';
import styles from './navbar.module.scss';

const NavBar = () => (
  <div className={styles.NavBar}>
    <a className={styles.link} href="/">
      Home
    </a>
    <a className={styles.link} href="/users-page">
      Users
    </a>
    <a className={styles.link} href="/home-works">
      Home Works
    </a>
    <a className={styles.link} href="/books">
      Books
    </a>
    <a className={styles.link} href="/test">
      Test
    </a>
    <a className={styles.link} href="/about">
      About
    </a>
    <a className={styles.link} href="/form">
      Form
    </a>
  </div>
);

export default NavBar;
