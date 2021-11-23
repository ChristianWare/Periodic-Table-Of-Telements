import styles from '../../styles/Row2.module.css'

function Row2() {
    return (
      <div className={styles.row2Container}>
        <div className={styles.content}>
          <div className={styles.box1}>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>Li</h2>
              <p className={styles.elementname}>Lithium</p>
            </div>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>Be</h2>
              <p className={styles.elementname}>Beronium</p>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>B</h2>
              <p className={styles.elementname}>Helium</p>
            </div>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>C</h2>
              <p className={styles.elementname}>Helium</p>
            </div>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>N</h2>
              <p className={styles.elementname}>Helium</p>
            </div>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>P</h2>
              <p className={styles.elementname}>Helium</p>
            </div>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>F</h2>
              <p className={styles.elementname}>Helium</p>
            </div>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>NE</h2>
              <p className={styles.elementname}>Helium</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Row2
