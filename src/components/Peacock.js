import styles from '../../styles/Peacock.module.css'

function Peacock({ peacock }) {
  return (
    <div className={styles.peacockContainer}>
      <div className={styles.text}>
        <h1>
          PEACOCK <br /> <span className={styles.tel}>TELE</span>MENTS
        </h1>
      </div>
      <div className={styles.content}>
        <div className={styles.box1}>
          {peacock.results.map((p) => (
            <div key={p.title} className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>{p.title.slice(2, 4)}</h2>
              <p className={styles.elementname}>{p.title.slice(0, 10)}</p>
            </div>
          ))}
        </div>
        <div className={styles.box2}>
          {peacock.results.map((p) => (
            <div key={p.title} className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>{p.title.slice(3, 5)}</h2>
              <p className={styles.elementname}>{p.title.slice(0, 10)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Peacock;
