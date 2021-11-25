import styles from "../../styles/Hulu.module.css";

function Hulu({ hulu }) {

  return (
    <div className={styles.row2Container}>
      <div className={styles.content}>

      <div className={styles.box1}>
        {hulu.results.slice(0, 2).map((h) => (
          <div key={h.title} className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>{h.title.slice(0, 2)}</h2>
            <p className={styles.elementname}>{h.title}</p>
          </div>
        ))}
      </div>

        <div className={styles.box2}>

        {hulu.results.slice(3, 8).map((h) => (
          <div className={styles.elementDetails}>
            <h2 className={styles.elementSymbol}>{h.title.slice(0, 2)}</h2>
            <p className={styles.elementname}>{h.title}</p>
          </div>
        ))}
          {/* <div className={styles.elementDetails}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hulu;
