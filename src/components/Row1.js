import styles from "../../styles/Row1.module.css";
import Link from 'next/link'

function Row1({ huluMovies }) {
  return (
    <div className={styles.row1Container}>
      <div className={styles.content}>
        {huluMovies.slice(12, 13).map((h) => (
          <div key={h.name} className={styles.box1}>
            <Link href={`/movies/${h.id}`}>
              <div className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{h.title.slice(3, 5)}</h2>
                <p className={styles.elementname}>{h.title.slice(0, 12)}</p>
              </div>
            </Link>
          </div>
        ))}
        {huluMovies.slice(10, 11).map((h) => (
          <div key={h.name} className={styles.box2}>
            <Link href={`/movies/${h.id}`}>
              <div className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{h.title.slice(3, 5)}</h2>
                <p className={styles.elementname}>{h.title.slice(0, 12)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row1;
