import React, { useState } from 'react';
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
import { BsBellFill } from 'react-icons/bs'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);

    return (
      <header className={styles.headerContainer}>
        <nav className={styles.navbar}>
          <Link href='/'>
            <span className={styles.navbarLogo}>
              <BsBellFill className={styles.navbarIcon} />
              <a>Taco Bell</a>
            </span>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : styles.navMenu + " " + styles.active
            }
            onClick={openMenu}
          >
            <li className={styles.navItem}>
              <Link href='#about'>
                <a onClick={openMenu}>ABOUT</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href='#specials'>
                <a onClick={openMenu}>SPECIALS</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href='#menu'>
                <a onClick={openMenu}>MENU</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href='#socials'>
                <a onClick={openMenu}>SOCIALS</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href='#newsletter'>
                <a onClick={openMenu}>NEWSLETTER</a>
              </Link>
            </li>
          </ul>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </span>
        </nav>
      </header>
    );
}

export default Navbar
