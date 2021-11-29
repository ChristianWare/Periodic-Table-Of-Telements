import styles from "../../styles/Netflix.module.css";
import Link from 'next/link'

function Netflix({ netflix, netflix2 }) {
  return (
    <div className={styles.row4Container}>
      <div className={styles.content}>
        {netflix.results.map((n) => (
          <div key={n.title} className={styles.box1}>
            <Link href={`/movies/${n.tmdbID}`}>
              <div className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{n.title.slice(1, 3)}</h2>
                <p className={styles.elementname}>{n.title.slice(0, 12)}</p>
              </div>
            </Link>
          </div>
        ))}
        {netflix2.results.map((n2) => (
          <div key={n2.title} className={styles.box1}>
            <Link href={`/movies/${n2.tmdbID}`}>
              <div className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{n2.title.slice(2, 4)}</h2>
                <p className={styles.elementname}>{n2.title.slice(0, 12)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Netflix;
