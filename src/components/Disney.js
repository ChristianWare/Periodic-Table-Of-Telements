import styles from "../../styles/Disney.module.css";

function Disney({ disney }) {
  return (
    <div className={styles.disneyContainer}>
      <div className={styles.text}>
        <h1>
          DISNEY <br /> <span className={styles.tel}>TELE</span>MENTS
        </h1>
      </div>
      <div className={styles.content}>
        {disney.results.map((d) => (
          <div key={d.title} className={styles.box1}>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>{d.title.slice(0, 2)}</h2>
              <p className={styles.elementname}>{d.title}</p>
            </div>
          </div>
        ))}
        {disney.results.map((d) => (
          <div key={d.title} className={styles.box1}>
            <div className={styles.elementDetails}>
              <h2 className={styles.elementSymbol}>{d.title.slice(4, 6)}</h2>
              <p className={styles.elementname}>{d.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Disney;
