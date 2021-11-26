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
    </div>
  );
}

export default Hero;
