import styles from "../../styles/Hulu.module.css";
import Link from "next/link";

function Hulu({ huluMovies }) {
  return (
    <div className={styles.row2Container}>
      <div className={styles.content}>
        <div className={styles.box1}>
          {huluMovies.slice(0, 2).map((h) => (
            <Link href={`/movies/${h.id}`}>
              <div key={h.title} className={styles.elementDetails}>
                <a>
                  <h2 className={styles.elementSymbol}>
                    {h.title.slice(1, 3)}
                  </h2>
                  <p className={styles.elementname}>{h.title.slice(0, 12)}</p>
                </a>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.box2}>
          {huluMovies.slice(2, 8).map((h) => (
            <Link href={`/movies/${h.id}`}>
              <div key={h.title} className={styles.elementDetails}>
                <h2 className={styles.elementSymbol}>{h.title.slice(3, 5)}</h2>
                <p className={styles.elementname}>{h.title.slice(0, 12)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hulu;
