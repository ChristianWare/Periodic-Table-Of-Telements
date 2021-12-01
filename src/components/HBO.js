import styles from "../../styles/HBO.module.css";
import Link from 'next/link'

function HBO({ hboShows }) {
  return (
    <>
    <div className={styles.row4Container} id='hbo'>
      <div className={styles.content}>
        <div className={styles.left}>
          {hboShows.map((h) => (
            <div key={h.title} className={styles.box1}>
              <Link href={`/movies/${h.id}`}>
                <div className={styles.elementDetails}>
                  <h2 className={styles.elementSymbol}>
                    {h.title.slice(0, 2)}
                  </h2>
                  <p className={styles.elementname}>{h.title.slice(0, 12)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className={styles.lines}></div>
      </>
  );
}

export default HBO;
