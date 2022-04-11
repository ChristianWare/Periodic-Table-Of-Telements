import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href='/' passHref>
            <h1>
              <span className={styles.logo}>
                <span className={styles.tel}>TELE</span>
                MENTS
              </span>
            </h1>
          </Link>
        </div>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : styles.navMenu + " " + styles.active
          }
          onClick={openMenu}
        >
          <li className={styles.navItem}>
            <Link href='/' passHref>
              <a onClick={openMenu}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/about' passHref>
              <a onClick={openMenu}>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={"/" + "#disney"} passHref>
              <a onClick={openMenu}>Disney</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={"/" + "#paramount"} passHref>
              <a onClick={openMenu}>Paramount</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={"/" + "#peacock"} passHref>
              <a onClick={openMenu}>Peacock</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={"/" + "#leaving"} passHref>
              <a onClick={openMenu}>Leaving</a>
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

export default Navbar;
