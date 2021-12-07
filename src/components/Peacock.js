import styles from "../../styles/Peacock.module.css";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from 'next/link'

function Peacock({ peacockMovies }) {
  return (
    <div className={styles.peacockContainer} id='peacock'>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            PEACOCK <br /> <span className={styles.tel}>TELE</span>MENTS
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.box1}>
            {peacockMovies.slice(0, 10).map((p) => (
              <Link key={p.title} href={`/movies/${p.id}`} passHref>
                <div className={styles.elementDetails}>
                  <h2 className={styles.elementSymbol}>
                    {p.title.slice(0, 2)}
                  </h2>
                  <p className={styles.elementname}>{p.title.slice(0, 11)}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.box2}>
            {peacockMovies.slice(0, 10).map((p) => (
              <Link key={p.title} href={`/movies/${p.id}`} passHref>
                <div className={styles.elementDetails}>
                  <h2 className={styles.elementSymbol}>
                    {p.title.slice(3, 5)}
                  </h2>
                  <p className={styles.elementname}>{p.title.slice(0, 11)}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.box2}>
            {peacockMovies.slice(0, 10).map((p) => (
              <Link key={p.title} href={`/movies/${p.id}`} passHref>
                <div className={styles.elementDetails}>
                  <h2 className={styles.elementSymbol}>
                    {p.title.slice(1, 3)}
                  </h2>
                  <p className={styles.elementname}>{p.title.slice(0, 12)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <RiArrowDownSLine className={styles.arrow} />
        <RiArrowDownSLine className={styles.arrow} />
        <RiArrowDownSLine className={styles.arrow} />
        <RiArrowDownSLine className={styles.arrow} />
        <RiArrowDownSLine className={styles.arrow} />
      </div>
    </div>
  );
}

export default Peacock;
