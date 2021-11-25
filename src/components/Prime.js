import styles from "../../styles/Prime.module.css";

function Prime({ prime }) {
  return (
    <div className={styles.primeContainer}>
      <div className={styles.content}>
        <div className={styles.box1}>
          {prime.results.slice(2, 4).map((p) => (
            <div key={p.title} className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>{p.title.slice(3, 5)}</h2>
              <p className={styles.elementname}>{p.title}</p>
            </div>
          ))}
        </div>

        <div className={styles.box2}>
          {prime.results.slice(2, 8).map((p) => (
            <div key={p.title} className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>{p.title.slice(4, 6)}</h2>
              <p className={styles.elementname}>{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prime;
