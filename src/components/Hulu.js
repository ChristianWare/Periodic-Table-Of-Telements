import styles from "../../styles/Hulu.module.css";

function Hulu({ hulu }) {
  return (
    <div className={styles.row2Container}>
      <div className={styles.content}>
        <div className={styles.box1}>
          {hulu.results.slice(0, 2).map((h) => (
            <div key={h.title} className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>{h.title.slice(11, 13)}</h2>
              <p className={styles.elementname}>{h.title}</p>
            </div>
          ))}
        </div>

        <div className={styles.box2}>
          {hulu.results.slice(2, 8).map((h) => (
            <div key={h.title} className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>{h.title.slice(3, 5)}</h2>
              <p className={styles.elementname}>{h.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hulu;
