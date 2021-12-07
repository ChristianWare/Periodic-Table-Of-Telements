 import styles from '../../styles/Paramount.module.css'
import { RiArrowLeftDownLine } from 'react-icons/ri'
import Link from 'next/link'

function Paramount({ paraMovies }) {
  return (
    <>
      <div className={styles.paramountContainer} id='paramount'>
        <div className={styles.content}>
          {paraMovies.map((p) => (
            <div key={p.title} className={styles.box1}>
              <Link href={`/movies/${p.id}`} passHref>
                <div className={styles.elementDetails}>
                  <h2 className={styles.elementSymbol}>
                    {p.title.slice(1, 3)}
                  </h2>
                  <p className={styles.elementname}>{p.title.slice(0, 12)}</p>
                </div>
              </Link>
            </div>
          ))}
          {paraMovies.map((p) => (
            <div key={p.title} className={styles.box1}>
              <Link href={`/movies/${p.id}`} passHref>
                <div className={styles.elementDetails}>
                  <h2 className={styles.elementSymbol}>
                    {p.title.slice(1, 3)}
                  </h2>
                  <p className={styles.elementname}>{p.title.slice(0, 12)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.text}>
          <h1>
            PARAMOUNT <br /> <span className={styles.tel}>TELE</span>MENTS
          </h1>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <RiArrowLeftDownLine className={styles.arrow} />
      </div>
    </>
  );
}


export default Paramount
