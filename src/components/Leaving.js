import styles from "../../styles/Leaving.module.css";

function Leaving({ nfLeaving, huluLeaving, primeLeaving, hboLeaving }) {
  return (
    <div className={styles.leavingContainer}>
      <div className={styles.text}>
        <h1>
          <span className={styles.tel}>TELE</span>MENTS <br /> LEAVING SOON:
        </h1>
      </div>
      <div className={styles.leavingList}>
        <div className={styles.leavingListItem}>
          <div className={styles.netflixContent}>
            <h2 className={styles.telNetflix}>NETFLIX</h2>
            {nfLeaving.results.slice(0, 10).map((n) => (
              <p>{n.title.slice(0, 34)}</p>
            ))}
          </div>
        </div>

        <div className={styles.leavingListItem}>
          <div className={styles.hulucontent}>
            <h2 className={styles.telHulu}>HULU</h2>
            {huluLeaving.results.slice(10, 20).map((h) => (
              <p>{h.title}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.leavingList}>
        <div className={styles.leavingListItem}>
          <h2 className={styles.telPrime}>PRIME</h2>
          {primeLeaving.results.slice(0, 10).map((p) => (
            <p>{p.title}</p>
          ))}
        </div>

        <div className={styles.leavingListItem}>
          <h2 className={styles.telHBO}>HBO MAX</h2>
          {hboLeaving.results.slice(18, 28).map((hb) => (
            <p>{hb.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaving;
