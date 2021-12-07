import styles from "../../styles/Disney.module.css";
import { RiArrowRightDownLine } from "react-icons/ri";
import Link from 'next/link'

function Disney({ disneyMovies }) {
  return (
    <>
      <div className={styles.disneyContainer} id='disney'>
        <div className={styles.text}>
          <h1>
            DISNEY <br /> <span className={styles.tel}>TELE</span>MENTS
          </h1>
        </div>
        <div className={styles.content}>
          {disneyMovies.map((d) => (
            <div key={d.title} className={styles.box1}>
              <Link href={`/movies/${d.id}`} passHref>
                <div className={styles.elementDetails}>
                  <h2 className={styles.elementSymbol}>
                    {d.title.slice(0, 2)}
                  </h2>
                  <p className={styles.elementname}>{d.title.slice(0, 12)}</p>
                </div>
              </Link>
            </div>
          ))}
          {disneyMovies.map((d) => (
            <div key={d.title} className={styles.box1}>
              <Link href={`/movies/${d.id}`} passHref>
                <div className={styles.elementDetails}>
                  <h2 className={styles.elementSymbol}>
                    {d.title.slice(0, 2)}
                  </h2>
                  <p className={styles.elementname}>{d.title.slice(0, 12)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <RiArrowRightDownLine className={styles.arrow} />
      </div>
    </>
  );
}

export default Disney;
