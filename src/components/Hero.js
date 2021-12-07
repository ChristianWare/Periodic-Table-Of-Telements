import styles from "../../styles/Hero.module.css";
import Link from "next/link";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1>
        PERIODIC TABLE OF <br />
        <span className={styles.underline}>
          <span className={styles.tel}>TELE</span>
          MENTS
        </span>
      </h1>
      <div className={styles.keyContainer}>
        <h4>KEY:</h4>
        <Link href='#prime' passHref>
          <h4>Prime</h4>
        </Link>
        <Link href='#hulu' passHref>
          <h4>Hulu</h4>
        </Link>
        <Link href='#netflix' passHref>
          <h4>Netflix</h4>
        </Link>
        <Link href='#hbo' passHref>
          <h4>Hbo Max</h4>
        </Link>
        
      </div>
    </div>
  );
}

export default Hero;
