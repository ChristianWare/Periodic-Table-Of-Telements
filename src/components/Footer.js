import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.fContainer}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.navbarLogo}>
            <h1>
              <span className={styles.logo}>
                <span className={styles.tel}>TELE</span>
                MENTS
              </span>
            </h1>
          </div>

          <p className={styles.fDescription}>
            The Periodic Table of Telements (televion + elements = "tele"ments)
            is a reference chart showing the most up to date movie data from
            each major streaming platform. It is organized so that you can
            quickly get information on individual telements such as their title,
            breif overview, runtime, release date, an average viewer rating.
          </p>
          <Link href='/'>
            <BiHomeAlt className={styles.homeArrow} />
          </Link>
        </div>
        <div className={styles.col}>
          <Link href={"/" + "#disney"}>
            <h5>Disney</h5>
          </Link>
          <p>Lion King</p>
          <p>Wall-e</p>
          <p>Inception</p>
          <p>Tenent</p>
        </div>
        <div className={styles.col}>
          <Link href={"/" + "#paramount"}>
            <h5>Paramount</h5>
          </Link>
          <ul>
            <li>
              <a>Spectre</a>
            </li>

            <li>
              <a>Skyfall</a>
            </li>

            <li>
              <a>No Time To Die</a>
            </li>

            <li>
              <a>Quantum Solace</a>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <Link href={"/" + "#leaving"}>
            <h5>Leaving</h5>
          </Link>
          <ul>
            <li>
              <a>Ant Man</a>
            </li>

            <li>
              <a>Spider Man</a>
            </li>

            <li>
              <a>Avengers</a>
            </li>

            <li>
              <a>Iron Man</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles.bottomBorder} />
      <div className={styles.copyContainer}>
        <p lassName={styles.fCopy}>
          <a>
            Telements {new Date().getFullYear()} &copy; - All Rights Reserved
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
