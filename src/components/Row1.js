import styles from "../../styles/Row1.module.css";

function Row1() {
  return (
    <div className={styles.row1Container}>
      <div className={styles.content}>
        <div className={styles.box1}>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>H</h2>
            <p className={styles.elementname}>Hydrogen</p>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>He</h2>
            <p className={styles.elementname}>Helium</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Row1;
