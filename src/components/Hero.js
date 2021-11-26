import styles from "../../styles/Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1>
        PERIODIC TABLE OF <br />{" "}
        <span className={styles.underline}>
          <span className={styles.tel}>TELE</span>
          MENTS
        </span>
      </h1>
      <div className={styles.keyContainer}>
        <h4>Prime</h4>
        <h4>Hulu</h4>
        <h4>Netflix</h4>
        <h4>Hbo Max</h4>
      </div>
    </div>
  );
}

export default Hero;
