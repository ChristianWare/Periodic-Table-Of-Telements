import styles from "../../styles/Leaving.module.css";

function Leaving({ peacockMovies, disneyMovies, paraMovies, netflixMovies2 }) {
  return (
    <div className={styles.leavingContainer}>
      <div className={styles.text}>
        <h1 id='leaving'>
          <span className={styles.tel}>TELE</span>MENTS <br /> LEAVING SOON:
        </h1>
      </div>
      <div className={styles.leavingList}>
        <div className={styles.leavingListItem}>
          <div className={styles.netflixContent}>
            <h2 className={styles.telNetflix}>NETFLIX</h2>
            {peacockMovies.slice(0, 10).map((n) => (
              <p key={n.title}>{n.title.slice(0, 30)}</p>
            ))}
          </div>
        </div>

        <div className={styles.leavingListItem}>
          <div className={styles.hulucontent}>
            <h2 className={styles.telHulu}>HULU</h2>
            {disneyMovies.slice(10, 20).map((h) => (
              <p key={h.title}>{h.title.slice(0, 30)}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.leavingList}>
        <div className={styles.leavingListItem}>
          <div className={styles.primeContent}>
            <h2 className={styles.telPrime}>PRIME</h2>
            {paraMovies.slice(0, 10).map((p) => (
              <p key={p.title}>{p.title.slice(0, 30)}</p>
            ))}
          </div>
        </div>

        <div className={styles.leavingListItem}>
          <h2 className={styles.telHBO}>HBO MAX</h2>
          {netflixMovies2.slice(0, 10).map((hb) => (
            <p key={hb.title}>{hb.title.slice(0, 30)}</p>
          ))}
        </div>
      </div>
      <div className={styles.lines}></div>
    </div>
  );
}

export default Leaving;
