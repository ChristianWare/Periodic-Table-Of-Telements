import styles from "../../styles/Prime.module.css";
import Link from 'next/link'

function Prime({ huluMovies }) {
  return (
    <div className={styles.primeContainer} id='prime'>
      <div className={styles.content}>
        <div className={styles.box1}>
          {huluMovies.slice(7, 9).map((p) => (
            <Link href={`/movies/${p.id}`}>
              <div key={p.title} className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{p.title.slice(3, 5)}</h2>
                <p className={styles.elementname}>{p.title.slice(0, 12)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.box2}>
          {huluMovies.slice(3, 9).map((p) => (
            <Link href={`/movies/${p.id}`}>
              <div key={p.title} className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{p.title.slice(4, 6)}</h2>
                <p className={styles.elementname}>{p.title.slice(0, 12)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Prime;
