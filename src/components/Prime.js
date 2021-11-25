import styles from "../../styles/Prime.module.css";

function Row3() {
  return (
    <div className={styles.row3Container}>
      <div className={styles.content}>
        <div className={styles.box1}>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>Na</h2>
            <p className={styles.elementname}>Lithium</p>
          </div>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>Mg</h2>
            <p className={styles.elementname}>Beronium</p>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>Ai</h2>
            <p className={styles.elementname}>Helium</p>
          </div>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>Si</h2>
            <p className={styles.elementname}>Helium</p>
          </div>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>P</h2>
            <p className={styles.elementname}>Helium</p>
          </div>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>S</h2>
            <p className={styles.elementname}>Helium</p>
          </div>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>Ci</h2>
            <p className={styles.elementname}>Helium</p>
          </div>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>Ar</h2>
            <p className={styles.elementname}>Helium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row3;
