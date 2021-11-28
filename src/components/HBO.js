import styles from "../../styles/HBO.module.css";

function HBO({ hbo }) {
  return (
    <div className={styles.row4Container}>
      <div className={styles.content}>
        <div className={styles.left}>
          {hbo.results.map((h) => (
            <div key={h.title} className={styles.box1}>
              <div className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{h.title.slice(0, 2)}</h2>
                <p className={styles.elementname}>{h.title.slice(0, 12)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HBO;
